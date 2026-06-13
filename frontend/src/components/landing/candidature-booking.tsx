import { AlertCircle, Calendar } from 'lucide-react'
import { Reveal } from './reveal'

const BOOKING_EMBED_URL = import.meta.env.VITE_BOOKING_EMBED_URL as
  | string
  | undefined

export function CandidatureBooking() {
  return (
    <section id="candidater" className="relative py-16 sm:py-20 lg:py-24">
      {/* Glow violet/magenta de fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[500px] w-[140%] max-w-none -translate-y-1/2"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[100%]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(93,41,153,0.4) 0%, rgba(174,8,183,0.18) 35%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[var(--coral)] to-[var(--coral-soft)] bg-clip-text text-transparent">
                Candidate
              </span>{' '}
              à l'incubateur YouTube Impact
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              L'entrée se fait sur sélection. Réserve ton appel : on fait le
              point sur ton projet et ta situation, et on voit ensemble si
              l'incubateur est fait pour toi.
            </p>
          </Reveal>
        </div>

        {/* Bloc IMPORTANT (cadrage de l'appel) */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[var(--coral)]/20 bg-[#150b28] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--coral)]/15 text-[var(--coral)]">
                <AlertCircle className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <p className="font-display text-base font-bold text-[var(--coral)] sm:text-lg">
                  IMPORTANT
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  <li>
                    1 — Cet appel sert à voir ensemble si l'incubateur YouTube
                    Impact correspond à ta situation. Ce n'est pas une session
                    de coaching personnalisée.
                  </li>
                  <li>
                    2 — Cet appel n'est pas disponible si tu es déjà membre de
                    l'incubateur.
                  </li>
                  <li>
                    3 — Si tu ne respectes pas le créneau réservé sans nous
                    prévenir, nous nous réservons le droit de ne pas
                    reprogrammer d'autre appel.
                  </li>
                </ul>
                <p className="mt-4 text-xs italic text-white/45">
                  [À ajuster par Fanel selon le cadrage réel de l'appel.]
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Embed booking */}
        <Reveal delay={0.25}>
          <div className="relative mx-auto mt-10 max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(93,41,153,0.45) 0%, rgba(255,96,92,0.2) 50%, transparent 75%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#150b28]">
              {BOOKING_EMBED_URL ? (
                <iframe
                  src={BOOKING_EMBED_URL}
                  title="Appel de candidature — YouTube Impact"
                  className="h-[640px] w-full"
                  loading="lazy"
                />
              ) : (
                <BookingPlaceholder />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function BookingPlaceholder() {
  return (
    <div className="relative flex min-h-[480px] w-full flex-col items-center justify-center gap-5 p-10 text-center sm:min-h-[560px]">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--violet)] to-[var(--coral)] shadow-2xl shadow-[var(--violet)]/40 sm:h-20 sm:w-20">
        <Calendar className="h-7 w-7 text-white sm:h-9 sm:w-9" strokeWidth={1.75} />
      </div>
      <p className="font-display text-base font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-lg">
        Embed de réservation à connecter
      </p>
      <p className="max-w-md text-sm text-white/55 sm:text-base">
        Branche ici l'embed iClosed / Calendly / outil équivalent fourni par
        Fanel. La variable d'environnement{' '}
        <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs text-white/80">
          VITE_BOOKING_EMBED_URL
        </code>{' '}
        active automatiquement l'iframe.
      </p>
    </div>
  )
}
