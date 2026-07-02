import {
  ArrowUpRight,
  FileText,
  BrainCircuit,
  BriefcaseBusiness,
  BookOpen,
  FlaskConical,
  Library,
  ExternalLink,
  Sparkles,
  Search,
  Zap,
  ChevronRight,
} from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'

const searchIndex = [
  { id: "featured", title: "Custom Chunking & Reranking Pipeline", keywords: "Parent Child Chunking Adaptive Chunking Metadata PCC AC MD CustomAlgo Reranker BGE rerank outperform NeurIPS report Fujifilm internship", category: "Spotlight" },
  { id: "papers", title: "ResearchAllRAGEngines Survey", keywords: "RAG engines comparison research survey architectures", category: "Archive", href: "/research/Reports/ResearchAllRAGEngines.html" },
  { id: "triviaqa", title: "TriviaQA RAG Benchmark", keywords: "TriviaQA benchmark evaluation RAG retrieval strategies pizza heatmap visualizations", category: "Archive", href: "/research/Reports/Triviaqa%20Rag%20Final%20Report.pdf" },
  { id: "haystack", title: "HayStack vs LightRAG", keywords: "HayStack LightRAG comparison throughput latency retrieval deployment", category: "Archive", href: "/research/Reports/HayStackVsLightRAG.pdf" },
  { id: "portfolio", title: "Back to Portfolio", keywords: "main site axeltang.me home", category: "Link", href: "https://axeltang.me" },
]

const spotlightLinks = [
  {
    label: '📄 NeurIPS-Formatted Report',
    href: '/research/Reports/PCC_AC_MD.pdf',
    external: true,
  },
  {
    label: '📊 Interactive Ranking Visualization',
    href: '/research/Reports/CustomAlgo_Reranker.html',
    external: true,
  },
]

const categoryCards = [
  {
    icon: FileText,
    accent: 'border-blue-500/50 hover:border-blue-500 shadow-blue-500/15',
    iconBg: 'bg-blue-500/15 text-blue-400',
    title: 'Custom Chunking; Reranker',
    desc: 'Parent-Child Chunking + Adaptive Chunking + Metadata — a custom pipeline that beats BGE rerank models. NeurIPS-formatted report + interactive HTML visualization.',
    href: '#featured',
  },
  {
    icon: BriefcaseBusiness,
    accent: 'border-purple-500/50 hover:border-purple-500 shadow-purple-500/15',
    iconBg: 'bg-purple-500/15 text-purple-400',
    title: 'OCR RAG Retrieval System',
    desc: 'End-to-end OCR-powered RAG retrieval system — presentation deck covering architecture, pipelines, and results.',
    href: '#featured',
  },
  {
    icon: BrainCircuit,
    accent: 'border-emerald-500/50 hover:border-emerald-500 shadow-emerald-500/15',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    title: 'ResearchAllRAGEngines',
    desc: 'Comparative analysis across multiple RAG engine implementations — research survey of retrieval techniques.',
    href: '#featured',
  },
]

const archiveCards = [
  {
    icon: FileText,
    accent: 'border-blue-500/50 hover:border-blue-500 shadow-blue-500/15',
    iconBg: 'bg-blue-500/15 text-blue-400',
    title: 'Custom Chunking; Reranker (NeurIPS)',
    desc: 'NeurIPS-formatted report on Parent-Child Chunking, Adaptive Chunking, and Metadata — outperforms BGE rerank models.',
    href: '/research/Reports/PCC_AC_MD.pdf',
  },
  {
    icon: FlaskConical,
    accent: 'border-cyan-500/50 hover:border-cyan-500 shadow-cyan-500/15',
    iconBg: 'bg-cyan-500/15 text-cyan-400',
    title: 'ResearchAllRAGEngines',
    desc: 'Comparative survey of multiple RAG engine implementations — retrieval strategies, performance trade-offs, and architecture insights.',
    href: '/research/Reports/ResearchAllRAGEngines.html',
  },
  {
    icon: Sparkles,
    accent: 'border-purple-500/50 hover:border-purple-500 shadow-purple-500/15',
    iconBg: 'bg-purple-500/15 text-purple-400',
    title: 'HayStack vs LightRAG',
    desc: 'Head-to-head comparison of HayStack and LightRAG frameworks — throughput, latency, retrieval quality, and deployment considerations.',
    href: '/research/Reports/HayStackVsLightRAG.pdf',
  },
  {
    icon: BookOpen,
    accent: 'border-amber-500/50 hover:border-amber-500 shadow-amber-500/15',
    iconBg: 'bg-amber-500/15 text-amber-400',
    title: 'Pizza — Metrics Visualized',
    desc: 'A graphic design explaining retrieval evaluation metrics visually — precision, recall, F1, and ranking quality made intuitive.',
    href: '/research/Reports/Pizza.png',
  },
  {
    icon: BookOpen,
    accent: 'border-pink-500/50 hover:border-pink-500 shadow-pink-500/15',
    iconBg: 'bg-pink-500/15 text-pink-400',
    title: 'LLM Wiki DeepEval',
    desc: 'Deep evaluation of LLM-powered retrieval systems — analysis of inference quality, prompt sensitivity, and benchmark performance across configurations.',
    href: '/research/Reports/LLMWIkiDeepEval.pdf',
  },
]

const journalNotes = [
  {
    featured: true,
    title: 'Custom Haystack Reranker — Beats BGE at 25× Speed',
    text: 'Tasked to improve an enterprise RAG platform with a custom Haystack pipeline. Built Parent-Child Chunking (4 children/parent, 500-word splits, adaptive boundaries), metadata injection, and a hybrid reranking formula (0.70 semantic + 0.15 metadata + 0.15 lexical). Benchmarked against BAAI/bge-reranker-v2-m3: identical accuracy (Recall@5 = 1.00, MRR = 1.00) but 25× faster on GPU (0.015s vs 0.374s/query) and ~1343× faster than cross-encoder on CPU.',
  },
]

function Button({ href, label, external = false, variant = 'primary' }) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200'
  const styles = variant === 'primary'
    ? 'bg-white/10 text-white hover:bg-white/16'
    : 'border border-white/8 text-zinc-400 hover:text-white hover:border-white/16'

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${base} ${styles}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="size-4" />
    </a>
  )
}

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef(null)
  const inputRef = useRef(null)

  const performSearch = useCallback((query) => {
    const q = query.toLowerCase().trim()
    if (!q) {
      setSearchResults([])
      setShowResults(false)
      return
    }
    const results = searchIndex.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    ).slice(0, 6)
    setSearchResults(results)
    setShowResults(results.length > 0)
  }, [])

  useEffect(() => { performSearch(searchQuery) }, [searchQuery, performSearch])

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setShowResults(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); inputRef.current?.focus() }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = (result) => {
    setShowResults(false)
    setSearchQuery("")
    if (result.href) { window.location.href = result.href }
    else { const el = document.getElementById(result.id); if (el) el.scrollIntoView({ behavior: "smooth" }) }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal-card').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-300">

      {/* ========== NAV ========== */}
      <header className="sticky top-0 z-20 border-b border-white/6 bg-[rgba(10,10,11,0.85)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Axel Tang</span>
            <span className="hidden text-sm text-zinc-500 sm:inline">· Research &amp; Insights</span>
          </a>

          <button className="block text-white md:hidden" onClick={() => setMobileNavOpen((p) => !p)}>
            ☰
          </button>

          <nav className={`${mobileNavOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/6 bg-[#0a0a0b] p-4 md:relative md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}>
            <a href="#featured" className="rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:text-white">Spotlight</a>
            <a href="#journal" className="rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:text-white">Journal</a>
            <a href="https://axeltang.me" className="rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:text-white">Portfolio</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16">

        {/* ========== HERO ========== */}
        <div className="relative mb-12 rounded-2xl">
          {/* Animated banner background */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
            {/* Spinning aurora gradient */}
            <div className="absolute inset-0 opacity-80" style={{
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(59,130,246,0.25) 0deg, rgba(168,85,247,0.15) 90deg, rgba(6,182,212,0.12) 180deg, rgba(59,130,246,0.2) 270deg, rgba(59,130,246,0.25) 360deg)',
              animation: 'aurora-spin 4s linear infinite',
            }} />
            <div className="absolute inset-0 opacity-70" style={{
              background: 'conic-gradient(from 180deg at 50% 50%, rgba(168,85,247,0.18) 0deg, rgba(6,182,212,0.1) 120deg, rgba(59,130,246,0.15) 240deg, rgba(168,85,247,0.18) 360deg)',
              animation: 'aurora-spin-rev 6s linear infinite',
            }} />
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />
            <div className="hero-grid" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0e]" />
          </div>
          <section className="relative z-10 px-6 py-12 text-center md:px-8 md:py-16">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Research &amp; Insights
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-zinc-400">
              A dedicated editorial environment for internship research, technical deep-dives,
              and long-form engineering writing.
            </p>
          <div ref={searchRef} className="mx-auto mt-6 max-w-md relative">
            <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#151518] px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.03)]">
              <Search className="size-4 shrink-0 text-zinc-500" />
              <input
                ref={inputRef}
                type="text"
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                placeholder="Search research..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowResults(searchResults.length > 0)}
              />
              <kbd className="flex cursor-pointer items-center gap-0.5 rounded-md bg-white/6 px-2 py-1 text-xs text-zinc-500 transition hover:bg-white/10" onClick={() => inputRef.current?.focus()}>⌘K</kbd>
            </div>
            {showResults && (
              <div className="search-dropdown">
                {searchResults.map((r) => (
                  <button
                    key={r.id}
                    className="search-result-item"
                    onClick={() => handleSelect(r)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="search-result-title">{r.title}</span>
                      <span className="search-result-cat">{r.category}</span>
                    </div>
                    {r.href && <span className="search-result-badge">external</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
        </div>

        {/* ========== EXPLORE RESEARCH ========== */}
        <div className="mb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Explore Research</p>
          <h2 className="text-xl font-bold text-white">How can I help you?</h2>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {categoryCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href={card.href}
                className={`reveal-card translate-y-4 rounded-2xl border border-white/6 bg-[#151518] p-6 opacity-0 transition-all duration-500 hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.25)] ${card.accent}`}
              >
                <div className={`mb-4 flex size-10 items-center justify-center rounded-xl ${card.iconBg}`}>
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">{card.desc}</p>
              </a>
            )
          })}
        </div>

        {/* ========== SPOTLIGHT ANNOUNCEMENT ========== */}
        <div className="mb-12">
          <div className="flex flex-col items-start gap-3 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 px-6 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.2)] md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Zap className="size-5 shrink-0 text-indigo-400" />
              <p className="text-sm text-white">
                <strong>AI Internship Spotlight:</strong> Custom Chunking Pipeline beats BGE Rerank — NeurIPS report + interactive viz
              </p>
            </div>
            <a href="#featured" className="flex items-center gap-1 text-sm font-medium text-indigo-400 transition hover:text-indigo-300">
              View Deliverables <ChevronRight className="size-4" />
            </a>
          </div>
        </div>

        {/* ========== FEATURED SPOTLIGHT ========== */}
        <section id="featured" className="reveal-card mb-12 translate-y-4 opacity-0 transition-all duration-500">
          <div className="rounded-2xl border border-blue-500/20 bg-[#151518] p-7 shadow-[0_4px_12px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.25)] md:p-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <FileText className="size-4" />
              AI Internship — Fujifilm APAC
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Custom Chunking &amp; Reranking Pipeline — Beats BGE Rerank
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
              <strong className="text-zinc-200">The challenge:</strong> Tasked to improve an existing enterprise RAG platform with a custom <strong className="text-zinc-200">Haystack</strong>-based pipeline using custom chunking methods — and the reranking algorithm came next.
              <br /><br />
              <strong className="text-zinc-200">The solution:</strong> A custom chunking strategy combining <strong className="text-zinc-200">Parent-Child Chunking</strong> (4 children per parent, 500-word splits, adaptive boundaries),
              <strong className="text-zinc-200">Adaptive Chunking</strong> (table-aware splitting, metadata injection),
              and a <strong className="text-zinc-200">hybrid reranking formula</strong> (0.70 semantic + 0.15 metadata + 0.15 lexical).
              <br /><br />
              <strong className="text-zinc-200">The result:</strong> Matched <strong className="text-zinc-200">BAAI/bge-reranker-v2-m3</strong> cross-encoder accuracy
              (Recall@5 = 1.00, MRR = 1.00) while being <strong className="text-zinc-200">25× faster on GPU</strong> (0.015s vs 0.374s per query)
              and ~1343× faster than cross-encoder on CPU. The NeurIPS-formatted report details the methodology;
              the interactive HTML visualization lets you explore the benchmark results live.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {spotlightLinks.map((link, idx) => (
                <Button key={link.label} href={link.href} label={link.label} external={link.external} variant={idx === 0 ? 'primary' : 'secondary'} />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-white/6 pt-4">
              <span className="text-xs text-zinc-500">Also available:</span>
              <a href="/research/Reports/ResearchAllRAGEngines.html" className="text-xs text-zinc-400 underline transition hover:text-white">ResearchAllRAGEngines</a>
              <span className="text-xs text-zinc-600">·</span>
              <a href="/research/Reports/HayStackVsLightRAG.pdf" className="text-xs text-zinc-400 underline transition hover:text-white">HayStack vs LightRAG</a>
              <span className="text-xs text-zinc-600">·</span>
              <a href="/research/Reports/LLMWIkiDeepEval.pdf" className="text-xs text-zinc-400 underline transition hover:text-white">LLM Wiki DeepEval</a>
              <span className="text-xs text-zinc-600">·</span>
              <a href="/research/Reports/LLMWikiResearch.pdf" className="text-xs text-zinc-400 underline transition hover:text-white">LLM Wiki Research</a>
              <span className="text-xs text-zinc-600">·</span>
              <a href="/research/Reports/Triviaqa%20Rag%20Final%20Report.pdf" className="text-xs text-zinc-400 underline transition hover:text-white">TriviaQA RAG</a>
              <span className="text-xs text-zinc-600">·</span>
              <a href="/research/Reports/OCR%20RAG%20Retrieval%20System.pdf" className="text-xs text-zinc-400 underline transition hover:text-white">OCR RAG Presentation</a>
            </div>
          </div>
        </section>

        {/* ========== RESEARCH ARCHIVE (4 cards) ========== */}
        <div className="mb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Research Archive</p>
          <h2 className="text-xl font-bold text-white">Explore the collection</h2>
        </div>

        <div className="mb-12 grid gap-3 md:grid-cols-4">
          {archiveCards.map((card) => {
            const Icon = card.icon
            const Tag = card.href ? 'a' : 'div'
            const tagProps = card.href ? { href: card.href, target: '_blank', rel: 'noreferrer' } : {}

            return (
              <Tag
                key={card.title}
                {...tagProps}
                className={`reveal-card translate-y-4 rounded-xl border border-white/6 bg-[#151518] p-5 text-center opacity-0 transition-all duration-500 hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.2),0_4px_20px_rgba(0,0,0,0.15)] ${card.accent}`}
              >
                <div className={`mx-auto mb-3 flex size-9 items-center justify-center rounded-lg ${card.iconBg}`}>
                  <Icon className="size-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">{card.title}</h4>
                <p className="mt-1 text-xs leading-5 text-zinc-500">{card.desc}</p>
              </Tag>
            )
          })}
        </div>

        {/* ========== FIELD JOURNAL ========== */}
        <section id="journal" className="mb-12">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Field Journal</p>
            <h2 className="text-xl font-bold text-white">Signal Notes</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-1">
            {journalNotes.map((note) => (
              <div key={note.title} className="reveal-card translate-y-4 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 p-6 opacity-0 transition-all duration-500 shadow-[0_4px_12px_rgba(0,0,0,0.3),0_8px_32px_rgba(0,0,0,0.25)]">
                {note.featured && (
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-indigo-400">
                    <Zap className="size-3" />
                    Featured
                  </span>
                )}
                <h3 className="text-base font-semibold text-white">{note.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{note.text}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/6 py-6 text-center text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} Axel Tang. All rights reserved.
      </footer>
    </div>
  )
}

export default App
