import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

const isMock = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder')

export default function ForgotPasswordPage() {
  const [email, setEmail]   = useState('')
  const [error, setError]   = useState('')
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (isMock) {
      await new Promise(r => setTimeout(r, 1000))
      setSent(true)
      setLoading(false)
      return
    }

    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    })

    setLoading(false)
    if (err) { setError(err.message); return }
    setSent(true)
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <div className="auth-logo">
          <div className="nav-logo-mark">RG</div>
          Relationship Goals
        </div>

        {sent ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>&#9993;</div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: 8 }}>Check Your Email</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 24 }}>
              If an account exists for <strong>{email}</strong>, we've sent password reset instructions.
              Check your inbox and spam folder.
            </p>
            <Link to="/login" className="btn btn-primary btn-full" style={{ justifyContent: 'center' }}>
              Back to Sign In
            </Link>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: '1.25rem', marginBottom: 8, textAlign: 'center' }}>Forgot Password?</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: 24, lineHeight: 1.5 }}>
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          </>
        )}

        <div className="auth-switch" style={{ marginTop: 16 }}>
          <Link to="/login">Back to Sign In</Link>
        </div>

        <p style={{
          marginTop: 20,
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          textAlign: 'center',
          lineHeight: 1.5,
        }}>
          &copy; 2026 Chude Muonelo, MS, LPC. All rights reserved.
        </p>
      </div>
    </div>
  )
}
