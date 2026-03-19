import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

export default function LoginPage() {
  const { signIn } = useAuth()
  const navigate   = useNavigate()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed]     = useState(false)
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!agreed) { setError('You must agree to the Terms & Conditions to continue.'); return }
    setError('')
    setLoading(true)
    const { error: err } = await signIn(email, password)
    setLoading(false)
    if (err) { setError(err); return }
    navigate('/today')
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <div className="auth-logo">
          <div className="nav-logo-mark">RG</div>
          Relationship Goals
        </div>

        {/* Noo World SSO */}
        <a
          href={'https://id.thenooworld.com?redirect=' + encodeURIComponent('https://app.rg.hhc.travel/auth/nooworld-callback')}
          className="btn btn-full"
          style={{
            background: 'linear-gradient(135deg, #1A0A2E, #2D1A4A)',
            color: 'white',
            marginBottom: 16,
            justifyContent: 'center',
          }}
        >
          &#127760; &nbsp;Sign in with Noo World ID
        </a>

        <div className="auth-divider">or sign in with email</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>

          <div style={{ textAlign: 'right', marginTop: -4, marginBottom: 12 }}>
            <Link to="/forgot-password" style={{ fontSize: '0.82rem', color: 'var(--teal)', fontWeight: 500 }}>
              Forgot password?
            </Link>
          </div>

          {/* Terms agreement checkbox */}
          <label style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 16,
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            cursor: 'pointer',
          }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              style={{ marginTop: 3, accentColor: 'var(--teal)', width: 16, height: 16, flexShrink: 0 }}
            />
            <span>
              I agree to the{' '}
              <Link to="/terms" style={{ color: 'var(--teal)', fontWeight: 600 }}>Terms &amp; Conditions</Link>
              {' '}and{' '}
              <Link to="/privacy" style={{ color: 'var(--teal)', fontWeight: 600 }}>Privacy Policy</Link>
            </span>
          </label>

          {error && <p className="form-error">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading}
          >
            {loading ? 'Signing in\u2026' : 'Sign In'}
          </button>
        </form>

        <div className="auth-switch">
          Don't have an account? <Link to="/register">Create one</Link>
        </div>

        <div className="auth-switch" style={{ marginTop: 8 }}>
          <a
            href="https://rg.hhc.travel"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}
          >
            &larr; Back to rg.hhc.travel
          </a>
        </div>

        {/* Legal links */}
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/terms" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Terms &amp; Conditions</Link>
          <Link to="/privacy" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Privacy Policy</Link>
        </div>

        <p style={{
          marginTop: 16,
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          textAlign: 'center',
          lineHeight: 1.5,
        }}>
          Not a therapy or counseling service. Use of this app does not
          create a therapeutic or clinical relationship of any kind.
        </p>

        <p style={{
          marginTop: 8,
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          textAlign: 'center',
          lineHeight: 1.4,
        }}>
          &copy; 2026 Chude Muonelo, MS, LPC. All rights reserved.
        </p>
      </div>
    </div>
  )
}
