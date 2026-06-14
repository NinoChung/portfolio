import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from './ui/LiveProjectButton'

type Project = {
  num: string
  category: string
  name: string
  desc: string
  url: string
  bar: string
  /** opaque card background (distinct faint accent per card) */
  tint: string
  /** accent rgba used for the inset glow + border tint */
  accent: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Landing Page · Derma',
    name: 'Aesthetic Dermatology',
    desc: 'A science-led skincare clinic page: editorial-luxury layout, botanical sage palette, treatment showcase, and trust-building social proof, engineered for consultation bookings.',
    url: '/projects/derma/index.html',
    bar: 'Aesthetic Dermatology · Landing Page',
    tint: 'radial-gradient(135% 95% at 0% 0%, rgba(16,185,129,0.12), transparent 55%), #0C0C0C',
    accent: '#34d399',
  },
  {
    num: '02',
    category: 'Landing Page · Real Estate',
    name: 'Architectural Real Estate',
    desc: 'A curated listings page for architectural homes & estates: warm cream-and-clay palette, immersive property showcase, and a refined enquiry flow built to drive qualified viewings.',
    url: '/projects/real-estate/index.html',
    bar: 'archestate.com · Architectural Real Estate',
    tint: 'radial-gradient(135% 95% at 100% 0%, rgba(245,158,11,0.13), transparent 55%), #0C0C0C',
    accent: '#fbbf24',
  },
  {
    num: '03',
    category: 'Funnel · Masterclass',
    name: 'Signature Offer Masterclass',
    desc: 'A live-webinar registration funnel that turns expertise into a premium coaching offer: curriculum, coach bio, proof, and FAQ, capped by a final CTA with a live countdown and seat-scarcity. Built GoHighLevel-ready.',
    url: '/projects/masterclass/index.html',
    bar: 'Free Live Masterclass · Funnel',
    tint: 'radial-gradient(135% 95% at 0% 0%, rgba(168,85,247,0.15), transparent 55%), #0C0C0C',
    accent: '#c084fc',
  },
  {
    num: '04',
    category: 'Web App · Calculator',
    name: 'SahodKo Pay Calculator',
    desc: 'A Philippine take-home pay calculator that computes net salary after SSS, PhilHealth, Pag-IBIG, and BIR withholding tax, with a dashboard, multiple calculators, guides, and a salary directory. Fully hand-built, SEO-ready.',
    url: '/projects/sahodko/index.html',
    bar: 'sahodko · Philippine Take-Home Pay Calculator',
    tint: 'radial-gradient(135% 95% at 100% 0%, rgba(34,180,220,0.13), transparent 55%), #0C0C0C',
    accent: '#38bdf8',
  },
]

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div
      className="h-[85vh] flex items-start justify-center sticky"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top',
          background: project.tint,
          borderColor: project.accent,
          boxShadow: `0 -8px 40px 8px rgba(12,12,12,0.95), 0 30px 70px -30px rgba(0,0,0,0.9), inset 0 0 110px -25px color-mix(in srgb, ${project.accent} 35%, transparent)`,
        }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 sm:px-4 pt-1 pb-5 sm:pb-7">
          <div className="flex items-center gap-5 sm:gap-8">
            <span
              className="font-black leading-none"
              style={{
                color: '#0C0C0C',
                WebkitTextStroke: '2px #D7E2EA',
                fontSize: 'clamp(2.5rem, 8vw, 100px)',
              }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/55 font-light uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        {/* Live preview frame */}
        <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-[#D7E2EA]/15 bg-[#0C0C0C]">
          {/* browser bar */}
          <div className="absolute top-0 left-0 right-0 h-9 z-20 flex items-center gap-2 px-4 bg-[#111] border-b border-[#D7E2EA]/10">
            <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <i className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[0.7rem] text-[#D7E2EA]/70 font-light truncate">
              {project.bar}
            </span>
          </div>

          {/* scaled iframe that pans on hover */}
          <div
            className="relative w-full"
            style={{ height: 'clamp(320px, 46vh, 520px)' }}
          >
            <div
              className="absolute left-0 origin-top-left transition-transform duration-[6500ms] ease-[cubic-bezier(.32,.72,0,1)] group-hover:-translate-y-[560px]"
              style={{ top: 36, width: '200%', height: 1600, transform: 'scale(0.5)' }}
            >
              <iframe
                src={project.url}
                title={project.name}
                loading="lazy"
                scrolling="no"
                className="w-full h-full border-0 pointer-events-none"
              />
            </div>
            {/* bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, transparent, rgba(12,12,12,0.6))',
              }}
            />
          </div>

          {/* hover CTA */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-30 bottom-4 left-1/2 -translate-x-1/2 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-full text-white text-xs sm:text-sm font-medium uppercase tracking-widest px-7 py-2.5"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              outline: '2px solid #FFFFFF',
              outlineOffset: '-3px',
            }}
          >
            Open full page ↗
          </a>
        </div>

        {/* description */}
        <p className="text-[#D7E2EA]/55 font-light leading-relaxed mt-5 sm:mt-6 px-2 sm:px-4 max-w-3xl text-sm sm:text-base">
          {project.desc}
        </p>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="work"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-5"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Work
      </h2>
      <p
        className="text-[#D7E2EA]/55 font-light text-center max-w-[620px] mx-auto mb-16 sm:mb-20"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        Conversion-focused landing pages and funnels, built end-to-end: strategy,
        copy, design, and code. Hover a card to preview the live build.
      </p>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
