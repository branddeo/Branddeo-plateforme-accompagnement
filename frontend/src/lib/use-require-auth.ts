import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/auth-store'

interface RequireAuthOptions {
  /** Si true, redirige vers /onboarding si l'utilisateur ne l'a pas complété. */
  requireOnboarded?: boolean
  /** Si true, redirige vers /app/dashboard si l'utilisateur n'est pas admin. */
  requireAdmin?: boolean
}

/**
 * Hook de garde de route. À appeler en haut d'un composant de page.
 * - Pas authentifié → /auth
 * - requireOnboarded + onboarding pas fini → /onboarding
 * - requireAdmin + pas admin → /app/dashboard
 *
 * Retourne `true` quand l'utilisateur a passé toutes les conditions (sinon
 * une redirection est en cours, le composant peut afficher null).
 */
export function useRequireAuth(opts: RequireAuthOptions = {}): boolean {
  const navigate = useNavigate()
  const isInitialized = useAuthStore((s) => s.isInitialized)
  const user = useAuthStore((s) => s.user)
  const profile = useAuthStore((s) => s.profile)

  useEffect(() => {
    if (!isInitialized) return

    if (!user) {
      navigate({ to: '/auth' })
      return
    }
    if (opts.requireOnboarded && !profile?.onboarding_completed) {
      navigate({ to: '/onboarding' })
      return
    }
    if (opts.requireAdmin && profile?.role !== 'admin') {
      toast.error('Accès réservé aux administrateurs.')
      navigate({ to: '/app/dashboard' })
    }
  }, [
    isInitialized,
    user,
    profile,
    navigate,
    opts.requireOnboarded,
    opts.requireAdmin,
  ])

  if (!isInitialized || !user) return false
  if (opts.requireOnboarded && !profile?.onboarding_completed) return false
  if (opts.requireAdmin && profile?.role !== 'admin') return false
  return true
}
