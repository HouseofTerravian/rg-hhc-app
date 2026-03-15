import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

export default function LoginPage() {
  const { signIn } = useAuth()
  const navigate   = useNavigate()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
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
          🌐 &nbsp;Sign in with Noo World ID
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

          {error && <p className="form-error">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={loading}
          >
            {loading ? 'Signing in…' : 'Sign In'}
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
            ← Back to rg.hhc.travel
          </a>
        </div>

        <p style={{
          marginTop: 20,
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          textAlign: 'center',
          lineHeight: 1.5,
        }}>
          Not a therapy or counseling service. Use of this app does not
          create a therapeutic or clinical relationship of any kind.
        </p>
      </div>
    </div>
  )
}
