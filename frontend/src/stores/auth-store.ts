import { create } from 'zustand'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { queryClient } from '@/lib/query-client'
import type { Profile } from '@/lib/database.types'
import { useNotificationsStore } from './notifications-store'

/**
 * Cleanup complet à exécuter au logout (clic explicite OU SIGNED_OUT
 * cross-tab / token expiré). Vide TOUTES les sources de données du user
 * courant pour empêcher toute fuite vers un user qui se reconnecterait
 * juste après sur le même navigateur. RLS protège déjà côté DB, mais
 * sans ce cleanup les caches et stores satellites afficheraient ~500ms
 * les anciennes données avant de re-fetcher.
 */
function clearAuthSideEffects() {
  void queryClient.cancelQueries()
  queryClient.clear()
  useNotificationsStore.getState().reset()
}

interface AuthState {
  user: User | null
  profile: Profile | null
  isLoading: boolean
  isInitialized: boolean

  // actions
  initialize: () => Promise<void>
  signUp: (email: string, password: string) => Promise<{ error: string | null }>
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signInWithGoogle: () => Promise<{ error: string | null }>
  /** Envoie l'email de réinitialisation Supabase (lien valide ~1h). */
  requestPasswordReset: (email: string) => Promise<{ error: string | null }>
  /** Met à jour le mot de passe de l'utilisateur (session recovery active). */
  updatePassword: (newPassword: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  refreshUserData: () => Promise<void>

  // computed selectors (helpers, called as functions)
  isAuthenticated: () => boolean
  isAdmin: () => boolean
}

async function fetchProfile(userId: string): Promise<Profile | null> {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()
  return (data as Profile | null) ?? null
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  isLoading: false,
  isInitialized: false,

  initialize: async () => {
    if (get().isInitialized) return
    set({ isLoading: true })

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const profile = await fetchProfile(user.id)
      set({ user, profile })
    }

    supabase.auth.onAuthStateChange(async (event, newSession) => {
      if (event === 'SIGNED_OUT') {
        clearAuthSideEffects()
        set({ user: null, profile: null })
        return
      }
      if (!newSession) {
        if (!get().user) {
          set({ user: null, profile: null })
        }
        return
      }
      if (
        event === 'SIGNED_IN' ||
        event === 'TOKEN_REFRESHED' ||
        event === 'USER_UPDATED'
      ) {
        const profile = await fetchProfile(newSession.user.id)
        set({ user: newSession.user, profile })
      }
    })

    set({ isLoading: false, isInitialized: true })
  },

  signUp: async (email, password) => {
    set({ isLoading: true })
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      set({ isLoading: false })
      return { error: humanizeAuthError(error.message) }
    }
    if (data.user) {
      const profile = await fetchProfile(data.user.id)
      set({ user: data.user, profile, isLoading: false })
    } else {
      set({ isLoading: false })
    }
    return { error: null }
  },

  signIn: async (email, password) => {
    set({ isLoading: true })
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      set({ isLoading: false })
      return { error: humanizeAuthError(error.message) }
    }
    if (data.user) {
      const profile = await fetchProfile(data.user.id)
      set({ user: data.user, profile, isLoading: false })
    } else {
      set({ isLoading: false })
    }
    return { error: null }
  },

  signInWithGoogle: async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth`,
      },
    })
    if (error) {
      return { error: humanizeAuthError(error.message) }
    }
    return { error: null }
  },

  requestPasswordReset: async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) return { error: humanizeAuthError(error.message) }
    return { error: null }
  },

  updatePassword: async (newPassword) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) return { error: humanizeAuthError(error.message) }
    return { error: null }
  },

  signOut: async () => {
    set({ isLoading: true })
    clearAuthSideEffects()
    await supabase.auth.signOut()
    set({ user: null, profile: null, isLoading: false })
  },

  refreshUserData: async () => {
    const user = get().user
    if (!user) return
    const profile = await fetchProfile(user.id)
    set({ profile })
  },

  isAuthenticated: () => get().user !== null,
  isAdmin: () => get().profile?.role === 'admin',
}))

function humanizeAuthError(msg: string): string {
  const m = msg.toLowerCase()
  if (m.includes('invalid login') || m.includes('invalid credentials')) {
    return 'Email ou mot de passe incorrect.'
  }
  if (m.includes('user already registered') || m.includes('already exists')) {
    return 'Un compte existe déjà avec cet email.'
  }
  if (m.includes('password') && m.includes('characters')) {
    return 'Le mot de passe doit contenir au moins 8 caractères.'
  }
  if (m.includes('email') && m.includes('valid')) {
    return 'Adresse email invalide.'
  }
  if (m.includes('rate limit')) {
    return 'Trop de tentatives. Réessaie dans quelques minutes.'
  }
  return msg
}
