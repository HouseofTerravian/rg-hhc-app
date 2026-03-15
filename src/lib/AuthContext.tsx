import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from './supabaseClient'

const isMock = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder')
const MOCK_SESSION_KEY = 'rg_session'

function makeMockUser(email: string, name: string): User {
  return {
    id: 'mock-001',
    email,
    user_metadata: { full_name: name },
    app_metadata: {},
    aud: 'authenticated',
    created_at: new Date().toISOString(),
  } as unknown as User
}

interface AuthCtx {
  session: Session | null
  user: User | null
  loading: boolean
  signIn:  (email: string, password: string) => Promise<{ error: string | null }>
  signUp:  (email: string, password: string, name: string) => Promise<{ error: string | null; userId?: string }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthCtx | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser]       = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isMock) {
      const raw = localStorage.getItem(MOCK_SESSION_KEY)
      if (raw) setUser(JSON.parse(raw) as User)
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
      setUser(sess?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    if (isMock) {
      await new Promise(r => setTimeout(r, 800))
      const mockUser = makeMockUser(email, email.split('@')[0])
      localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(mockUser))
      setUser(mockUser)
      return { error: null }
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error?.message ?? null }
  }

  const signUp = async (email: string, password: string, name: string) => {
    if (isMock) {
      await new Promise(r => setTimeout(r, 1000))
      const mockUser = makeMockUser(email, name)
      localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(mockUser))
      setUser(mockUser)
      return { error: null, userId: 'mock-001' }
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    })
    return { error: error?.message ?? null, userId: data.user?.id }
  }

  const signOut = async () => {
    if (isMock) {
      localStorage.removeItem(MOCK_SESSION_KEY)
      setUser(null)
      return
    }
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ session, user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
