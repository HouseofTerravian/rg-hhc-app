import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function NooWorldCallbackPage() {
  const [params]   = useSearchParams()
  const navigate   = useNavigate()
  const [error, setError] = useState('')

  useEffect(() => {
    const token = params.get('token')
    if (!token) { setError('No token received from Noo World.'); return }
    exchangeToken(token)
  }, [])

  const exchangeToken = async (token: string) => {
    // Verify the Noo World JWT and sign into Supabase
    // The token is a JWT issued by id.thenooworld.com
    // In production: send to your backend to verify + issue a Supabase custom token
    // For now: attempt Supabase session via custom token exchange endpoint

    try {
      const res = await fetch('/api/nooworld-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nooworld_token: token }),
      })

      if (!res.ok) throw new Error('Token exchange failed')

      const { access_token, refresh_token } = await res.json()

      await supabase.auth.setSession({ access_token, refresh_token })
      navigate('/today', { replace: true })
    } catch {
      setError('Could not sign in with Noo World. Please try again or use email/password.')
    }
  }

  if (error) return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      gap: 16,
      textAlign: 'center',
    }}>
      <span style={{ fontSize: '2rem' }}>⚠️</span>
      <p style={{ color: 'var(--text-mid)', maxWidth: 320 }}>{error}</p>
      <button className="btn btn-teal" onClick={() => navigate('/login')}>
        Back to Sign In
      </button>
    </div>
  )

  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      background: 'linear-gradient(160deg, var(--cream), var(--teal-light))',
    }}>
      <div className="nav-logo-mark" style={{ width: 48, height: 48, fontSize: '1.1rem' }}>RG</div>
      <p style={{ color: 'var(--teal-dark)', fontWeight: 600 }}>Signing you in with Noo World…</p>
      <div style={{
        width: 32, height: 32,
        border: '3px solid var(--teal-light)',
        borderTop: '3px solid var(--teal)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
