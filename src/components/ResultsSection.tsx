import FadeIn from './ui/FadeIn'
import Counter from './ui/Counter'

const STATS = [
  {
    to: 233,
    prefix: '',
    suffix: '%',
    title: 'Team Expansion',
    desc: 'Grew the delivery team from 3 to 10 hires at 2nd Office Inc. while standardizing QA frameworks.',
  },
  {
    to: 25,
    prefix: '+',
    suffix: '%',
    title: 'CSAT Improvement',
    desc: 'Optimized customer feedback protocols and hands-on support workflows.',
  },
  {
    to: 20,
    prefix: '−',
    suffix: '%',
    title: 'Turnaround Speedup',
    desc: 'Coordinated localized delivery workflows for demanding legal accounts at Lionbridge.',
  },
  {
    to: 10,
    prefix: '+',
    suffix: '%',
    title: 'SaaS Revenue Uplift',
    desc: 'Secured system expansion & upsell opportunities across eComEngine portfolios.',
  },
]

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        Results
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="text-[#D7E2EA]/55 font-light text-center max-w-[560px] mx-auto mb-14 sm:mb-20"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        Outcomes from across the portfolio: measured, shipped, and repeatable.
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {STATS.map((s, i) => (
          <FadeIn
            key={s.title}
            delay={i * 0.1}
            y={30}
            className="rounded-3xl border border-[#D7E2EA]/15 p-7 sm:p-8"
            style={{ background: 'rgba(215,226,234,0.03)' }}
          >
            <Counter
              to={s.to}
              prefix={s.prefix}
              suffix={s.suffix}
              className="hero-heading font-black leading-none block"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 3.4rem)' }}
            />
            <h3 className="text-[#D7E2EA] font-medium text-lg mt-4 mb-2">
              {s.title}
            </h3>
            <p className="text-[#D7E2EA]/55 font-light text-sm leading-relaxed">
              {s.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
