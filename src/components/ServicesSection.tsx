import FadeIn from './ui/FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'Customer Success Management',
    desc: 'Onboarding-to-renewal ownership that accelerates time-to-value, drives product adoption, and protects net revenue retention.',
  },
  {
    num: '02',
    name: 'Onboarding & Implementation',
    desc: 'White-label CRM configuration, workflow automation, API hooks, and guided walkthroughs that cut setup timelines and support tickets.',
  },
  {
    num: '03',
    name: 'CRM & Automation',
    desc: 'GoHighLevel, Salesforce, and HubSpot builds wired up with Zapier and Make automations that remove manual bottlenecks.',
  },
  {
    num: '04',
    name: 'Landing Page Design',
    desc: 'Strategy-first, hand-coded, conversion-focused landing pages: copy, design, and build delivered end-to-end.',
  },
  {
    num: '05',
    name: 'Funnel Building',
    desc: 'GoHighLevel-ready webinar and opt-in funnels with countdowns, scarcity, and booking flows tuned to convert.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="font-black leading-none shrink-0"
              style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </span>
            <div className="flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2 md:pt-3">
              <h3
                className="font-medium uppercase"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  color: '#0C0C0C',
                  opacity: 0.6,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
