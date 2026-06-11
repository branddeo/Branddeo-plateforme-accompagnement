import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'branddeo-academy.announcement-closed'

export function AnnouncementBar() {
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = sessionStorage.getItem(STORAGE_KEY)
    setClosed(stored === '1')
  }, [])

  function handleClose(e: React.MouseEvent) {
    e.stopPropagation()
    setClosed(true)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, '1')
    }
  }

  if (closed) return null

  return (
    <a
      href="#tarif"
      className={cn(
        'group fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-3 px-4 py-2.5 text-center text-sm font-medium text-white transition-opacity',
        'bg-gradient-to-r from-[var(--violet)] to-[var(--coral)]',
      )}
    >
      <span className="font-display tracking-tight">
        La prochaine cohorte YouTube Impact est limitée. Réserve ta place avant la fermeture des inscriptions.
        <span className="ml-2 hidden font-bold underline-offset-4 group-hover:underline sm:inline">
          Voir l'offre →
        </span>
      </span>
      <button
        type="button"
        onClick={handleClose}
        aria-label="Fermer l'annonce"
        className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </a>
  )
}
