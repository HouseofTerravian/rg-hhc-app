import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/AuthContext'
import AppNav      from './components/AppNav'
import LoginPage   from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TodayPage   from './pages/TodayPage'
import HistoryPage from './pages/HistoryPage'
import CouponsPage from './pages/CouponsPage'
import CreditsPage from './pages/CreditsPage'
import AccountPage      from './pages/AccountPage'
import ProgramsPage     from './pages/ProgramsPage'
import IntegrationsPage from './pages/IntegrationsPage'
import NooWorldCallbackPage from './pages/NooWorldCallbackPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import TermsPage   from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

function ProtectedRoute({ children }: { children: React.ReactElement }) {
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
          <Route path="/register"        element={user ? <Navigate to="/today" replace /> : <RegisterPage />} />
          <Route path="/forgot-password" element={user ? <Navigate to="/today" replace /> : <ForgotPasswordPage />} />
          <Route path="/terms"           element={<TermsPage />} />
          <Route path="/privacy"         element={<PrivacyPage />} />
          <Route path="/programs" element={<ProtectedRoute><ProgramsPage /></ProtectedRoute>} />
          <Route path="/today"    element={<ProtectedRoute><TodayPage /></ProtectedRoute>} />
          <Route path="/history"  element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
          <Route path="/coupons"  element={<ProtectedRoute><CouponsPage /></ProtectedRoute>} />
          <Route path="/credits"  element={<ProtectedRoute><CreditsPage /></ProtectedRoute>} />
          <Route path="/account"       element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="/integrations"  element={<ProtectedRoute><IntegrationsPage /></ProtectedRoute>} />
          <Route path="/auth/nooworld-callback" element={<NooWorldCallbackPage />} />
          <Route path="*"              element={<Navigate to="/" replace />} />
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
