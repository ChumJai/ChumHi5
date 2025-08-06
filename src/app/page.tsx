export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      {/* Header */}
      <header className="bg-white shadow-md px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ChumHi5
            </h1>
            <nav className="hidden md:flex space-x-6">
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
                Photos
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search friends..."
                className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-6">
        {/* Left Sidebar - Profile & Navigation */}
        <div className="w-1/4 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CH</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800">Chum Hi5</h3>
              <p className="text-gray-600 text-sm">@chumhi5</p>
              <div className="mt-4 text-sm text-gray-600">
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
          <div className="bg-white rounded-lg shadow-lg p-4">
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
        <div className="flex-1 space-y-6">
          {/* Status Update */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CH</span>
              </div>
              <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 text-gray-600">
                <button className="hover:text-blue-600">📷 Photo</button>
                <button className="hover:text-green-600">🎵 Music</button>
                <button className="hover:text-purple-600">📍 Location</button>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90">
                Post
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {/* Post 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                  <p className="text-gray-600 text-sm">2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">
                Just deployed my new website! 🚀 Thanks to everyone who helped
                with the design feedback. It looks amazing! Can&apos;t wait to
                share more updates.
              </p>
              <div className="flex items-center space-x-6 text-gray-600">
                <button className="hover:text-red-500">❤️ Like (12)</button>
                <button className="hover:text-blue-500">💬 Comment (3)</button>
                <button className="hover:text-green-500">🔄 Share</button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mike Johnson</h4>
                  <p className="text-gray-600 text-sm">5 hours ago</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">
                Beautiful sunset today! 🌅 Nature never fails to amaze me. Hope
                everyone is having a wonderful day!
              </p>
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span className="text-white text-lg">🌅 Sunset Photo</span>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <button className="hover:text-red-500">❤️ Like (28)</button>
                <button className="hover:text-blue-500">💬 Comment (7)</button>
                <button className="hover:text-green-500">🔄 Share</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Friends & Activity */}
        <div className="w-1/4 space-y-6">
          {/* Online Friends */}
          <div className="bg-white rounded-lg shadow-lg p-4">
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
          <div className="bg-white rounded-lg shadow-lg p-4">
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
          <div className="bg-white rounded-lg shadow-lg p-4">
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
