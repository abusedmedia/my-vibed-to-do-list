import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
              Message from Designer
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Stay organized and productive with a simple, beautiful task management app
            </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border-2 border-blue-200 hover:border-blue-300">
              <div className="text-4xl mb-4 text-blue-600">✓</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Simple Task Management
              </h3>
              <p className="text-gray-700">
                Create, edit, and complete tasks with an intuitive interface designed for efficiency
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border-2 border-green-200 hover:border-green-300">
              <div className="text-4xl mb-4 text-green-600">🔒</div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-700">
                Your tasks are safely stored and only accessible to you with secure authentication
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border-2 border-amber-200 hover:border-amber-300">
              <div className="text-4xl mb-4 text-amber-600">☁️</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                Cloud Synced
              </h3>
              <p className="text-gray-700">
                Access your tasks from anywhere, anytime with real-time cloud synchronization
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-pink-200">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-semibold mr-4 shadow-md">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Create an account</h4>
                  <p className="text-gray-600">Sign up with your email in seconds</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4 shadow-md">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Add your tasks</h4>
                  <p className="text-gray-600">Start organizing your to-dos immediately</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center font-semibold mr-4 shadow-md">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Stay productive</h4>
                  <p className="text-gray-600">Check off tasks and achieve your goals</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-700 mb-4 font-medium">Ready to get organized?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Log In
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 text-orange-600 font-semibold px-6 py-2 rounded-lg border-2 border-orange-500 hover:border-pink-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
