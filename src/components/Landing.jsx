import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My Vibed To-Do List
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay organized and productive with a simple, beautiful task management app
            </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Simple Task Management
              </h3>
              <p className="text-gray-600">
                Create, edit, and complete tasks with an intuitive interface designed for efficiency
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600">
                Your tasks are safely stored and only accessible to you with secure authentication
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cloud Synced
              </h3>
              <p className="text-gray-600">
                Access your tasks from anywhere, anytime with real-time cloud synchronization
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Create an account</h4>
                  <p className="text-gray-600">Sign up with your email in seconds</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Add your tasks</h4>
                  <p className="text-gray-600">Start organizing your to-dos immediately</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
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
            <p className="text-gray-600 mb-4">Ready to get organized?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Log In
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-6 py-2 rounded-lg border-2 border-blue-600 transition-colors duration-200"
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
