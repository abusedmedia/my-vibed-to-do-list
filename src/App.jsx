import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import TodoApp from './components/TodoApp'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="text-gray-900 text-xl">Loading...</div>
      </div>
    )
  }

  return user ? children : <Navigate to="/login" />
}

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="text-gray-900 text-xl">Loading...</div>
      </div>
    )
  }

  return user ? <Navigate to="/todos" /> : children
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Landing />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/todos"
            element={
              <PrivateRoute>
                <TodoApp />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App

