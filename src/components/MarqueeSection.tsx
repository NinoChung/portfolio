import { useEffect, useRef, useState } from 'react'

type Tile = { img: string; label: string }

const PROJECTS: Tile[] = [
  { img: '/shots/derma.jpg', label: 'Aesthetic Dermatology' },
  { img: '/shots/real-estate.jpg', label: 'Architectural Real Estate' },
  { img: '/shots/masterclass.jpg', label: 'Signature Masterclass' },
  { img: '/shots/sahodko.jpg', label: 'SahodKo Calculator' },
  { img: '/shots/n1n0.jpg', label: 'N1N0 Smart Automation' },
  { img: '/shots/ai-agency.jpg', label: 'AI Agency Accelerator' },
  { img: '/shots/apex-coaching.jpg', label: 'Apex Coaching' },
]

const ROW_ONE = PROJECTS
const ROW_TWO = [...PROJECTS].reverse()

const TILE_W = 420
const TILE_H = 270

function PreviewTile({ tile, i }: { tile: Tile; i: number }) {
  return (
    <div
      className="relative shrink-0 rounded-2xl overflow-hidden border border-[#D7E2EA]/12 bg-[#0C0C0C]"
      style={{ width: TILE_W, height: TILE_H }}
    >
      <img
        src={tile.img}
        alt={`${tile.label}, page design preview by Niño Chung`}
        width={840}
        height={1050}
        loading="eager"
        decoding="async"
        className="shot-pan block"
        style={{
          width: TILE_W,
          height: 'auto',
          animation: `shot-pan ${14 + (i % 4) * 3}s ease-in-out ${-(i * 2.5)}s infinite alternate`,
          willChange: 'transform',
        }}
      />
      {/* readability + label */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 58%, rgba(12,12,12,0.78))',
        }}
      />
      <span className="absolute bottom-3 left-3 text-[#D7E2EA] text-xs font-medium uppercase tracking-wider">
        {tile.label}
      </span>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const shift = offset - 200

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
      style={{ background: '#0C0C0C' }}
      aria-label="Selected work, design previews"
    >
      <div
        className="flex gap-3 pl-3"
        style={{ transform: `translateX(${shift}px)`, willChange: 'transform' }}
      >
        {ROW_ONE.map((tile, i) => (
          <PreviewTile key={`r1-${i}`} tile={tile} i={i} />
        ))}
      </div>
      <div
        className="flex gap-3 pl-3"
        style={{ transform: `translateX(${-shift}px)`, willChange: 'transform' }}
      >
        {ROW_TWO.map((tile, i) => (
          <PreviewTile key={`r2-${i}`} tile={tile} i={i + 2} />
        ))}
      </div>
    </section>
  )
}
