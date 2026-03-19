import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { db } from '../lib/db'
import { invitePartner } from '../lib/sms'

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

  const [agreed, setAgreed]   = useState(false)
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep]       = useState<1 | 2>(1)

  const handleStep1 = (e: FormEvent) => {
    e.preventDefault()
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return }
    if (!agreed) { setError('You must agree to the Terms & Conditions to continue.'); return }
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

    // Invite partner via SMS if phone provided (fire-and-forget)
    if (partnerPhone) {
      invitePartner({ partnerPhone, partnerName, userName: name })
    }

    setLoading(false)
    navigate('/today')
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <div className="auth-logo">
          <div className="nav-logo-mark">RG</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span>Relationship Goals</span>
            {/* Style B: Uppercase tracking (luxury brand feel) */}
            <span style={{
              fontSize: '0.55rem',
              color: 'var(--teal)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginTop: 2,
            }}>by HHC Travel&#8482;</span>
          </div>
        </div>

        {/* Noo World SSO */}
        <a href={NWL_REDIRECT} className="btn btn-full" style={{
          background: 'linear-gradient(135deg, #1A0A2E, #2D1A4A)',
          color: 'white',
          marginBottom: 16,
          justifyContent: 'center',
        }}>
          &#127760; &nbsp;Sign up with Noo World ID
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
              <button type="submit" className="btn btn-primary btn-full">
                Continue &rarr;
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
                {loading ? 'Creating account\u2026' : 'Create Account'}
              </button>

              <button
                type="button"
                className="btn btn-ghost btn-full"
                style={{ marginTop: 8 }}
                onClick={handleSubmit as any}
                disabled={loading}
              >
                {loading ? '\u2026' : 'Skip for now'}
              </button>
            </form>
          </>
        )}

        <div className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>

        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/terms" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Terms &amp; Conditions</Link>
          <Link to="/privacy" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Privacy Policy</Link>
        </div>

        <p style={{ marginTop: 12, fontSize: '0.72rem', color: 'var(--text-dim)', textAlign: 'center', lineHeight: 1.5 }}>
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
          &copy; 2026 Chude Muonelo. All rights reserved.
        </p>
      </div>
    </div>
  )
}
