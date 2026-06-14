import FadeIn from './ui/FadeIn'
import ContactButton from './ui/ContactButton'
import AnimatedText from './ui/AnimatedText'

const ABOUT_TEXT =
  "I'm Niño Chung, a customer success manager with 8+ years across global SaaS and BPO. I accelerate time-to-value, automate workflows, and protect net revenue retention. On the side, i design and build high-converting landing pages and funnels. Let's build something that retains and converts!"

const METRICS = [
  { label: 'Avg. Net Revenue Retention', value: '110%', width: '88%' },
  { label: 'Time-to-Value Reduction', value: '−20% days', width: '72%' },
  { label: 'CRM Integration Success', value: '99.2%', width: '92%' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative corner images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Metric snapshot */}
          <FadeIn
            delay={0.1}
            y={24}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 w-full max-w-[640px]"
          >
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-[#D7E2EA]/15 p-4 sm:p-5"
                style={{ background: 'rgba(215,226,234,0.03)' }}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[#D7E2EA]/55 text-[0.7rem] uppercase tracking-wider font-light leading-tight">
                    {m.label}
                  </span>
                </div>
                <div className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mt-2">
                  {m.value}
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-[#D7E2EA]/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: m.width,
                      background:
                        'linear-gradient(90deg, #7621B0, #BBCCD7)',
                    }}
                  />
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0} y={30}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  )
}
