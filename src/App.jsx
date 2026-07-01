import {
  ArrowUpRight,
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  Compass,
  FileText,
  Orbit,
  Sparkles,
} from 'lucide-react'

const spotlightLinks = [
  {
    label: 'Read The Research Paper',
    href: 'https://github.com/AxelTWC/Applied_DeepLearning_Project/blob/main/Group%201%20Final%20Report.pdf',
    external: true,
  },
  {
    label: 'Open Project Repository',
    href: 'https://github.com/AxelTWC/Applied_DeepLearning_Project',
    external: true,
  },
  {
    label: 'Return To Portfolio',
    href: 'https://axeltang.me',
    external: true,
  },
]

const atlasCards = [
  {
    icon: FileText,
    eyebrow: 'Featured Research',
    title: 'Adaptive chunking for stronger retrieval workflows',
    text: 'An editorial entry point for the graded RAG paper, implementation rationale, and the system-level thinking behind the baseline build.',
    href: '#featured',
    label: 'Enter Spotlight',
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: 'Internship Track',
    title: 'A premium runway for Fujifilm APAC research notes',
    text: 'Structured space for publishable internship findings, technical deep-dives, and approved writeups that need a more elevated presentation than a simple file list.',
    href: '#track',
    label: 'View Track',
  },
  {
    icon: BrainCircuit,
    eyebrow: 'Field Journal',
    title: 'Long-form essays on AI systems, data, and responsible deployment',
    text: 'A dedicated shelf for reflective technical writing, research-to-practice notes, and essays that connect implementation details to broader engineering judgment.',
    href: '#journal',
    label: 'Browse Journal',
  },
]

const runwayCards = [
  {
    title: 'Paper Archive',
    text: 'Finished papers, polished submissions, and public-facing reports can live here with cover blurbs, status tags, and deep links to PDFs or repositories.',
    tag: 'Public Research',
  },
  {
    title: 'Internship Deep-Dives',
    text: 'A separate lane for approved corporate research, implementation retrospectives, and technical learnings that deserve a cleaner narrative than a resume bullet.',
    tag: 'Applied Industry Work',
  },
  {
    title: 'Technical Essays',
    text: 'Opinionated writing on model systems, evaluation, tooling, or engineering philosophy, framed like a publication instead of a default blog index.',
    tag: 'Editorial Writing',
  },
]

const journalNotes = [
  {
    icon: Compass,
    title: 'New Horizons',
    text: 'The visual system is intentionally warmer, slower, and more editorial than the main portfolio so research work feels curated rather than merely listed.',
  },
  {
    icon: Orbit,
    title: 'Research Studio',
    text: 'Each card is designed to scale from a single paper today to a fuller archive later without collapsing into a generic docs site.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Signal',
    text: 'Typography, spacing, and motion are tuned to feel premium and deliberate while keeping the content readable on both desktop and mobile.',
  },
]

function LinkPill({ href, label, external = false, variant = 'primary' }) {
  const palette =
    variant === 'primary'
      ? 'bg-[linear-gradient(135deg,#f7c982,#d97a53)] text-[#2f140a] shadow-[0_18px_45px_rgba(245,168,96,0.22)]'
      : 'border border-white/15 bg-white/8 text-[#fff1e2]'

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 ${palette}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="size-4" />
    </a>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#120c09] text-[#fff6ea]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,196,120,0.18),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(230,122,88,0.18),transparent_22%),linear-gradient(180deg,#120c09_0%,#1a0f0a_42%,#0f0b09_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_center,rgba(255,192,118,0.22),transparent_55%)] blur-3xl" />

      <header className="sticky top-0 z-20 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-[rgba(28,16,12,0.66)] px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f6d197,#cb744e)] font-display text-lg font-semibold text-[#3b180a]">
              NH
            </span>
            <span>
              <strong className="block font-body text-sm font-semibold uppercase tracking-[0.24em] text-[#f5d4af]">Axel Tang</strong>
              <span className="block font-display text-lg text-white">Research & Insights</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-[#efd8bf]">
            <a href="#featured" className="rounded-full px-4 py-2 transition hover:bg-white/8">Spotlight</a>
            <a href="#track" className="rounded-full px-4 py-2 transition hover:bg-white/8">Track</a>
            <a href="#journal" className="rounded-full px-4 py-2 transition hover:bg-white/8">Journal</a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative z-10 mx-auto flex max-w-7xl flex-col gap-7 px-4 pb-20 pt-8 md:px-8 md:pb-28 md:pt-10">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,20,15,0.92),rgba(20,12,10,0.82))] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.32)] md:p-10">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.34em] text-[#ebb56f]">Summer Vibes / Golden Hour Research Studio</p>
            <h1 className="max-w-3xl font-display text-[clamp(3.3rem,10vw,7.4rem)] leading-[0.92] tracking-[-0.05em] text-[#fff8f0]">
              New Horizons
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#e9d7c5] md:text-lg">
              A dedicated editorial environment for internship research papers, technical deep-dives, and long-form engineering writing. The goal is to make serious work feel cinematic, tactile, and genuinely worth lingering on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkPill href="#featured" label="Enter The Spotlight" />
              <LinkPill href="https://axeltang.me" label="Back To Portfolio" external variant="secondary" />
            </div>
          </div>

          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl md:p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#efbc82]">Current Focus</p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl leading-tight text-white">Featured Research Spotlight</h2>
                  <p className="mt-3 text-sm leading-7 text-[#ebdac8]">
                    Adaptive chunking, RAG implementation, and the first layer of a more complete research archive.
                  </p>
                </div>
                <div className="size-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd797_0%,#df8356_78%,#8a3d24_100%)] shadow-[0_0_60px_rgba(255,171,93,0.28)]" />
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-[rgba(255,246,236,0.06)] p-6 backdrop-blur-xl md:p-7">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#efbc82]">Experience Layer</p>
                  <p className="mt-3 text-sm leading-7 text-[#ead7c5]">
                    Purpose-built for a future mix of publishable internship work, polished reports, and thoughtful essays.
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-[#f5eadf]">
                  <div className="rounded-3xl border border-white/8 bg-white/6 px-4 py-4">Premium card system with warm glass depth</div>
                  <div className="rounded-3xl border border-white/8 bg-white/6 px-4 py-4">Tailwind-based React surface designed to grow with the archive</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="featured" className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <article className="rounded-[2rem] border border-[#f1be7f]/18 bg-[linear-gradient(180deg,rgba(250,206,144,0.16),rgba(255,255,255,0.05))] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0be7b]/25 bg-[#f6c983]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd8a9]">
              <FileText className="size-4" />
              Featured Paper
            </div>
            <h2 className="max-w-2xl font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] tracking-[-0.04em] text-white">
              Enhancing Retrieval-Augmented Generation with Adaptive Chunking
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#f0dfcc]">
              This spotlight is reserved for the University graded research project on Retrieval-Augmented Generation, with space for the paper itself, the implementation trail, and the thinking that shaped the system baseline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {spotlightLinks.map((link, index) => (
                <LinkPill
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  external={link.external}
                  variant={index === 0 ? 'primary' : 'secondary'}
                />
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[rgba(255,249,242,0.06)] p-7 backdrop-blur-xl md:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#efbc82]">Why This Space Exists</p>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-5">
                <h3 className="font-display text-3xl text-white">A research hub should feel curated, not incidental.</h3>
                <p className="mt-3 text-sm leading-7 text-[#ead7c5]">
                  The main portfolio introduces the work. This studio gives it room to breathe, with stronger visual hierarchy, a warmer atmosphere, and enough structure to support future papers, essays, and internship findings.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-5 text-sm leading-7 text-[#ead7c5]">
                  Built for a future archive of research outputs and technical writing.
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-5 text-sm leading-7 text-[#ead7c5]">
                  Structured to support both public papers today and more nuanced editorial publishing later.
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {atlasCards.map((card) => {
            const Icon = card.icon

            return (
              <article
                key={card.title}
                className="group rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#efbc82]/28 md:p-7"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#efbc82]">{card.eyebrow}</span>
                  <Icon className="size-5 text-[#f4c98a]" />
                </div>
                <h3 className="font-display text-[2rem] leading-[1] tracking-[-0.03em] text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#e8d5c4]">{card.text}</p>
                <div className="mt-6">
                  <LinkPill href={card.href} label={card.label} variant="secondary" />
                </div>
              </article>
            )
          })}
        </section>

        <section id="track" className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,15,12,0.88),rgba(18,11,9,0.78))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.26)] md:p-9">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#efbc82]">Research Runway</p>
              <h2 className="mt-2 font-display text-[clamp(2.5rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-white">A cleaner home for papers, deep-dives, and future releases</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#e9d8c6]">
              This section is designed so one real paper can coexist with future internship findings and thoughtful essays without everything competing for the same visual weight.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {runwayCards.map((card) => (
              <article key={card.title} className="rounded-[1.7rem] border border-white/8 bg-white/5 p-6">
                <span className="inline-flex rounded-full border border-[#efbc82]/24 bg-[#f4c487]/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#ffd8a8]">
                  {card.tag}
                </span>
                <h3 className="mt-4 font-display text-[1.9rem] leading-[1.02] text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#ead7c5]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="journal" className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <article className="rounded-[2rem] border border-white/10 bg-[rgba(255,248,237,0.05)] p-7 backdrop-blur-xl md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#efbc82]">Field Journal</p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.96] tracking-[-0.04em] text-white">A living surface for reflection, experiments, and technical narrative</h2>
            <p className="mt-5 text-sm leading-8 text-[#ead7c5]">
              Research output is not only the final PDF. This journal layer is where implementation thinking, lessons learned, and short essays can grow into something more intentional than isolated notes.
            </p>
          </article>
          <div className="grid gap-5">
            {journalNotes.map((note) => {
              const Icon = note.icon

              return (
                <article key={note.title} className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6">
                  <div className="mb-4 flex items-center gap-3 text-[#f1c88c]">
                    <Icon className="size-5" />
                    <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#efbc82]">Signal Note</span>
                  </div>
                  <h3 className="font-display text-[1.9rem] leading-[1.02] text-white">{note.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#ead7c5]">{note.text}</p>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
