import type { Profile } from './database.types'

/**
 * Aiguillage post-authentification.
 *
 * Règles :
 *   - onboarding pas fini → /onboarding
 *   - onboarding fini     → /app/dashboard
 *
 * Retourne `null` uniquement si le profile n'est pas encore chargé
 * (cas anormal — le caller renvoie l'utilisateur sur la landing).
 */
export function nextRouteAfterAuth(profile: Profile | null): string | null {
  if (!profile) return null
  if (!profile.onboarding_completed) return '/onboarding'
  return '/app/dashboard'
}
