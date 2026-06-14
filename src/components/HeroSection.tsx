import FadeIn from './ui/FadeIn'
import Magnet from './ui/Magnet'
import ContactButton from './ui/ContactButton'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Results', href: '#results' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  return (
    <section
      id="top"
      className="h-screen flex flex-col relative"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="w-full">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden px-6 md:px-10">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[15vw] sm:text-[16vw] md:text-[17vw] lg:text-[18vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Niño Chung
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex items-end justify-between gap-6 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a customer success manager &amp; landing-page designer protecting
          retention, crafting conversion
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="shrink-0">
          <ContactButton href="#contact" />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[260px] sm:w-[330px] md:w-[400px] lg:w-[460px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[40px] opacity-40 blur-2xl"
              style={{
                background:
                  'linear-gradient(123deg, #B600A8 0%, #7621B0 50%, #BE4C00 100%)',
              }}
            />
            <img
              src="/Profile_NChung.jpg"
              alt="Niño Chung, Customer Success Manager and landing-page designer"
              width={460}
              height={473}
              className="relative w-full h-auto select-none pointer-events-none rounded-[32px] border border-[#D7E2EA]/20 object-cover"
              draggable={false}
              style={{ aspectRatio: '1 / 1', objectPosition: 'top' }}
            />
          </div>
        </Magnet>
      </FadeIn>
    </section>
  )
}
