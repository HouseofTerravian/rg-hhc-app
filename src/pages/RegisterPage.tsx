import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { db } from '../lib/db'

const NWL_REDIRECT = 'https://id.thenooworld.com?redirect=' + encodeURIComponent('https://app.rg.hhc.travel/auth/nooworld-callback')

export default function RegisterPage() {
  const { signUp } = useAuth()
  const navigate   = useNavigate()

  // Your info
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [phone, setPhone]       = useState('')
  const [password, setPassword] = useState('')

  // Partner info
  const [partnerName,  setPartnerName]  = useState('')
  const [partnerEmail, setPartnerEmail] = useState('')
  const [partnerPhone, setPartnerPhone] = useState('')

  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep]       = useState<1 | 2>(1)

  const handleStep1 = (e: FormEvent) => {
    e.preventDefault()
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return }
    setError('')
    setStep(2)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: err, userId } = await signUp(email, password, name)
    if (err) { setError(err); setLoading(false); return }

    if (userId) {
      await db.upsertProfile(userId, {
        full_name:     name,
        phone,
        partner_name:  partnerName,
        partner_email: partnerEmail,
        partner_phone: partnerPhone,
      })
    }

    setLoading(false)
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
        <a href={NWL_REDIRECT} className="btn btn-full" style={{
          background: 'linear-gradient(135deg, #1A0A2E, #2D1A4A)',
          color: 'white',
          marginBottom: 16,
          justifyContent: 'center',
        }}>
          🌐 &nbsp;Sign up with Noo World ID
        </a>

        <div className="auth-divider">or create with email</div>

        {/* Step indicator */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {[1, 2].map(s => (
            <div key={s} style={{
              flex: 1, height: 4, borderRadius: 2,
              background: step >= s ? 'var(--teal)' : 'var(--border)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>

        {step === 1 ? (
          <>
            <h1>Your account</h1>
            <p style={{ marginBottom: 20 }}>Start with your details — we'll add your partner next.</p>

            <form onSubmit={handleStep1}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="First name or display name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" required autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Your Phone Number</label>
                <input id="phone" type="tel" value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000" required />
                <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: 4 }}>
                  Used to deliver your daily love mission via SMS.
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Min. 8 characters" required autoComplete="new-password" />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn btn-primary btn-full">
                Continue →
              </button>
            </form>
          </>
        ) : (
          <>
            <h1>Your partner</h1>
            <p style={{ marginBottom: 20 }}>
              Add your partner's info so they receive missions too.
              <span style={{ color: 'var(--text-dim)' }}> (Optional — you can add this later)</span>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pname">Partner's Name</label>
                <input id="pname" type="text" value={partnerName}
                  onChange={e => setPartnerName(e.target.value)}
                  placeholder="Their first name" />
              </div>
              <div className="form-group">
                <label htmlFor="pemail">Partner's Email</label>
                <input id="pemail" type="email" value={partnerEmail}
                  onChange={e => setPartnerEmail(e.target.value)}
                  placeholder="partner@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="pphone">Partner's Phone Number</label>
                <input id="pphone" type="tel" value={partnerPhone}
                  onChange={e => setPartnerPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000" />
                <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: 4 }}>
                  They'll receive the daily mission directly. We will not spam.
                </p>
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? 'Creating account…' : 'Create Account'}
              </button>

              <button
                type="button"
                className="btn btn-ghost btn-full"
                style={{ marginTop: 8 }}
                onClick={handleSubmit as any}
                disabled={loading}
              >
                {loading ? '…' : 'Skip for now'}
              </button>
            </form>
          </>
        )}

        <div className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>

        <p style={{ marginTop: 16, fontSize: '0.72rem', color: 'var(--text-dim)', textAlign: 'center', lineHeight: 1.5 }}>
          By registering you agree to our{' '}
          <a href="https://rg.hhc.travel/terms.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)' }}>Terms</a>
          {' '}and{' '}
          <a href="https://rg.hhc.travel/privacy.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)' }}>Privacy Policy</a>.
          Not a therapy or counseling service.
        </p>
      </div>
    </div>
  )
}
