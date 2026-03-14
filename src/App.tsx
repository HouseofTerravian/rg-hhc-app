import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/AuthContext'
import AppNav      from './components/AppNav'
import LoginPage   from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TodayPage   from './pages/TodayPage'
import HistoryPage from './pages/HistoryPage'
import CouponsPage from './pages/CouponsPage'
import CreditsPage from './pages/CreditsPage'
import AccountPage from './pages/AccountPage'

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth()
  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-dim)' }}>Loading…</div>
  return user ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  const { user } = useAuth()

  return (
    <div className="app-shell">
      <AppNav />
      <main className="main-content">
        <Routes>
          <Route path="/"         element={<Navigate to={user ? '/today' : '/login'} replace />} />
          <Route path="/login"    element={user ? <Navigate to="/today" replace /> : <LoginPage />} />
          <Route path="/register" element={user ? <Navigate to="/today" replace /> : <RegisterPage />} />
          <Route path="/today"    element={<ProtectedRoute><TodayPage /></ProtectedRoute>} />
          <Route path="/history"  element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
          <Route path="/coupons"  element={<ProtectedRoute><CouponsPage /></ProtectedRoute>} />
          <Route path="/credits"  element={<ProtectedRoute><CreditsPage /></ProtectedRoute>} />
          <Route path="/account"  element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="*"         element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}
