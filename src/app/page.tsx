"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [comment, setComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [comments, setComments] = useState([]);

  // เรียก API GET เมื่อเปิดเว็บ
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch("/api/comments");
      const data = await response.json();
      console.log("Fetched comments:", data);
      setComments(data.comments || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handlePost = async () => {
    if (!comment.trim()) {
      alert("Please enter a comment");
      return;
    }

    setIsPosting(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          author: "Chum Hi5",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Posted successfully!");
        setComment("");
        // รีเฟรชข้อมูล comments หลังจาก post
        fetchComments();
      } else {
        alert("Failed to post: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("Failed to post comment");
    } finally {
      setIsPosting(false);
    }
  };
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        position: "relative",
      }}
    >
      {/* Tilted Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
          transform: "rotate(15deg)",
          transformOrigin: "center",
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
        }}
      ></div>
      {/* Header */}
      <header className="bg-white shadow-md px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChumHi5
            </h1>
            <nav className="hidden md:flex space-x-3 lg:space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Profile
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Friends
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Messages
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Photos12
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search friends..."
                className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 md:w-auto"
              />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Profile & Navigation */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-300"
                style={{
                  backgroundImage: "url('/bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#ef4444",
                }}
              ></div>
              <h3 className="font-bold text-base md:text-lg text-gray-800">
                Chum Hi5
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">@chumhi5</p>
              <div className="mt-4 text-xs md:text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Friends:</span>
                  <span className="font-semibold text-blue-600">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span>Posts:</span>
                  <span className="font-semibold text-purple-600">56</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-lg p-4 hidden lg:block">
            <h4 className="font-bold text-gray-800 mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                📝 Update Status
              </button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                📷 Upload Photo
              </button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                👥 Find Friends
              </button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                🎵 Add Music
              </button>
            </div>
          </div>
        </div>

        {/* Center - Feed */}
        <div className="flex-1 w-full lg:w-auto space-y-6">
          {/* Status Update */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">
                  CH
                </span>
              </div>
              <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !isPosting) {
                    handlePost();
                  }
                }}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex space-x-2 md:space-x-4 text-gray-600 text-sm">
                <button className="hover:text-blue-600">📷 Photo</button>
                <button className="hover:text-green-600">🎵 Music</button>
                <button className="hover:text-purple-600">📍 Location</button>
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 md:px-6 py-2 rounded-full hover:opacity-90 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handlePost}
                disabled={isPosting}
              >
                {isPosting ? "Posting..." : "Post"}
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {/* Comments from API */}
            {comments.map((commentItem: any) => (
              <div
                key={commentItem.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">
                      {commentItem.author.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                      {commentItem.author}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {new Date(commentItem.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 mb-4 text-sm md:text-base">
                  {commentItem.content}
                </p>
                <div className="flex flex-wrap items-center gap-3 md:gap-6 text-gray-600 text-sm">
                  <button className="hover:text-red-500">❤️ Like</button>
                  <button className="hover:text-blue-500">💬 Comment</button>
                  <button className="hover:text-green-500">🔄 Share</button>
                </div>
              </div>
            ))}

            {/* Post 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">
                    JS
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                    Jane Smith
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    2 hours ago
                  </p>
                </div>
              </div>
              <p className="text-gray-800 mb-4 text-sm md:text-base">
                🎵 Check out this amazing song! Perfect for coding sessions 🎧
              </p>
              <div
                className="relative w-full mb-4"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/PeTlqcugg2s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-gray-600 text-sm">
                <button className="hover:text-red-500">❤️ Like (12)</button>
                <button className="hover:text-blue-500">💬 Comment (3)</button>
                <button className="hover:text-green-500">🔄 Share</button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base">
                    MJ
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                    Mike Johnson
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    5 hours ago
                  </p>
                </div>
              </div>
              <p className="text-gray-800 mb-4 text-sm md:text-base">
                Beautiful sunset today! 🌅 Nature never fails to amaze me. Hope
                everyone is having a wonderful day!
              </p>
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg h-32 md:h-48 mb-4 flex items-center justify-center">
                <span className="text-white text-base md:text-lg">
                  🌅 Sunset Photo
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-gray-600 text-sm">
                <button className="hover:text-red-500">❤️ Like (28)</button>
                <button className="hover:text-blue-500">💬 Comment (7)</button>
                <button className="hover:text-green-500">🔄 Share</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Friends & Activity */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* Online Friends */}
          <div className="bg-white rounded-lg shadow-lg p-4 hidden lg:block">
            <h4 className="font-bold text-gray-800 mb-3">Online Friends (8)</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-gray-700 text-sm">Sarah Wilson</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-gray-700 text-sm">Alex Chen</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-gray-700 text-sm">Emma Davis</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-lg p-4 hidden lg:block">
            <h4 className="font-bold text-gray-800 mb-3">Recent Activity</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <span className="text-blue-500">👥</span>
                <span>
                  <strong>Tom</strong> added you as a friend
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-red-500">❤️</span>
                <span>
                  <strong>Lisa</strong> liked your photo
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-500">💬</span>
                <span>
                  <strong>David</strong> commented on your post
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-500">🎵</span>
                <span>
                  <strong>Maya</strong> shared a song
                </span>
              </div>
            </div>
          </div>

          {/* Trending */}
          <div className="bg-white rounded-lg shadow-lg p-4 hidden lg:block">
            <h4 className="font-bold text-gray-800 mb-3">Trending</h4>
            <div className="space-y-2 text-sm">
              <div className="text-blue-600 hover:underline cursor-pointer">
                #WebDevelopment
              </div>
              <div className="text-purple-600 hover:underline cursor-pointer">
                #Photography
              </div>
              <div className="text-green-600 hover:underline cursor-pointer">
                #Travel
              </div>
              <div className="text-orange-600 hover:underline cursor-pointer">
                #Music
              </div>
              <div className="text-pink-600 hover:underline cursor-pointer">
                #Art
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
