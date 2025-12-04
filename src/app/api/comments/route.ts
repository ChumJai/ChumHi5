import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

// Remove edge runtime to allow file system access in development
// export const runtime = "edge";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

// GET - ดึงข้อมูลจาก Vercel Blob
export async function GET() {
  try {
    const blobUrl = process.env.chum_READ_WRITE_TOKEN
      ? `https://${process.env.BLOB_STORE_ID}.public.blob.vercel-storage.com/comments.json`
      : null;

    if (!blobUrl) {
      return NextResponse.json({ comments: [] });
    }

    try {
      const response = await fetch(blobUrl);
      if (!response.ok) {
        return NextResponse.json({ comments: [] });
      }
      const data = await response.json();
      return NextResponse.json({ comments: data.comments || [] });
    } catch {
      return NextResponse.json({ comments: [] });
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json({ comments: [] }, { status: 500 });
  }
}

// POST - บันทึกข้อมูลไปที่ Vercel Blob
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, author = "Chum Hi5" } = body;

    if (!content || content.trim() === "") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    // สร้าง comment ใหม่
    const newComment: Comment = {
      id: Date.now().toString(),
      author,
      content: content.trim(),
      timestamp: new Date().toISOString(),
    };

    // ดึงข้อมูลเก่า (ถ้ามี)
    let existingComments: Comment[] = [];

    // ตรวจสอบว่ามี Vercel Blob token หรือไม่
    const hasToken = process.env.chum_READ_WRITE_TOKEN;

    if (hasToken) {
      // ใช้ Vercel Blob (production)
      const blobUrl = `https://${process.env.BLOB_STORE_ID}.public.blob.vercel-storage.com/comments.json`;

      try {
        const response = await fetch(blobUrl);
        if (response.ok) {
          const data = await response.json();
          existingComments = data.comments || [];
        }
      } catch {
        // ไม่มีไฟล์เก่า หรือเกิดข้อผิดพลาด
      }

      // เพิ่ม comment ใหม่
      const updatedComments = [newComment, ...existingComments];

      // อัปโหลดไปที่ Vercel Blob
      const blob = await put(
        "comments.json",
        JSON.stringify({ comments: updatedComments }, null, 2),
        {
          access: "public",
          contentType: "application/json",
        }
      );

      return NextResponse.json({
        success: true,
        comment: newComment,
        blobUrl: blob.url,
      });
    } else {
      // ใช้ local file (development) - ไม่สามารถใช้งานได้ใน Edge Runtime
      // ส่งกลับ comment เพื่อแสดงผล (ไม่บันทึกถาวร)
      return NextResponse.json({
        success: true,
        comment: newComment,
        message:
          "Development mode: Comment not persisted. Set chum_READ_WRITE_TOKEN to use Vercel Blob.",
      });
    }
  } catch (error) {
    console.error("Error saving comment:", error);
    return NextResponse.json(
      { error: "Failed to save comment" },
      { status: 500 }
    );
  }
}
