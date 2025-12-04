import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

// GET - ดึงข้อมูลจาก Vercel Blob
export async function GET() {
  try {
    const blobUrl = process.env.BLOB_READ_WRITE_TOKEN
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
    const blobUrl = process.env.BLOB_READ_WRITE_TOKEN
      ? `https://${process.env.BLOB_STORE_ID}.public.blob.vercel-storage.com/comments.json`
      : null;

    if (blobUrl) {
      try {
        const response = await fetch(blobUrl);
        if (response.ok) {
          const data = await response.json();
          existingComments = data.comments || [];
        }
      } catch {
        // ไม่มีไฟล์เก่า หรือเกิดข้อผิดพลาด
      }
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
  } catch (error) {
    console.error("Error saving comment:", error);
    return NextResponse.json(
      { error: "Failed to save comment" },
      { status: 500 }
    );
  }
}
