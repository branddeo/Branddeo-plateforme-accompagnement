import { ArrowRight, EyeOff, ListChecks, Users, Coins } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { Reveal } from './reveal'

const BENEFITS = [
  {
    icon: EyeOff,
    title: 'Deux parcours, un seul programme',
    body:
      "Faceless ou face caméra : le programme s'adapte à ton profil. Tu veux construire des chaînes sans montrer ton visage avec l'IA comme assistant de production ? Ou bâtir ta marque personnelle devant la caméra ? Les deux chemins sont couverts, module par module.",
  },
  {
    icon: ListChecks,
    title: 'La méthode complète, étape par étape',
    body:
      "Validation de niche, stratégie de contenu, algorithme, packaging et miniatures, scripts, production assistée par IA, tournage, montage, publication, analyse. Rien à deviner : chaque étape a son module, ses exemples et ses cas pratiques.",
  },
  {
    icon: Users,
    title: "Tu n'avances plus seul",
    body:
      "Communauté privée, lives réguliers, retours sur ton travail. Les questions trouvent des réponses, les blocages se débloquent, et tu avances entouré de créateurs qui visent la même chose que toi.",
  },
  {
    icon: Coins,
    title: 'Des premiers revenus sans saut dans le vide',
    body:
      "La méthode est pensée pour générer tes premiers revenus en parallèle de ton activité actuelle. Pas de pari risqué : tu construis ton indépendance brique par brique, à ton rythme, avec un plan clair.",
  },
]

export function FourPillars() {
  return (
    <section id="programme" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--violet)]/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Le programme YouTube Impact</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Une méthode complète, de zéro à ta chaîne monétisée.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              YouTube Impact couvre tout le parcours : trouver ta niche, créer
              ta chaîne, produire tes vidéos avec l'aide de l'IA, publier,
              analyser et monétiser. Tu choisis ton profil, tu suis les étapes,
              tu construis ton actif.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="group flex h-full gap-5 rounded-2xl border border-white/10 bg-[var(--card)] p-7 transition-all hover:border-[var(--coral)]/40 hover:shadow-xl hover:shadow-[var(--violet)]/10 sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-[var(--violet)]/30">
                  <b.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/75">
                    {b.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-14 text-center">
            <a
              href="#tarif"
              className="cta-black cta-black-xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Rejoindre YouTube Impact
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
