import { useState } from 'react'
import FadeIn from './ui/FadeIn'

type Role = {
  title: string
  when: string
  company: string
  bullets: string[]
}

const RECENT: Role[] = [
  {
    title: 'Onboarding & Technology Consultant',
    when: 'Mar 2025 – Apr 2026',
    company: 'Freelance Contract',
    bullets: [
      'Configured white-label CRM solutions, workflows, API hooks & third-party tools to speed up value delivery.',
      'Delivered custom onboarding programs & walkthroughs, minimizing support tickets and admin churn.',
      'Monitored post-onboarding adoption analytics, flagging low-engagement accounts early.',
    ],
  },
  {
    title: 'Customer Success Manager',
    when: 'Mar 2024 – Mar 2025',
    company: 'HighLevel / GoHighLevel · Full-time',
    bullets: [
      'Deconstructed detailed agency parameters into straightforward system setups, reducing config timelines.',
      'Led reactivation playbooks for inactive accounts, safeguarding monthly recurring revenue.',
      'Liaison between product & client technical teams, escalating user pain points to engineering sprints.',
    ],
  },
  {
    title: 'Customer Success Manager',
    when: 'Jul 2023 – Mar 2024',
    company: 'Freelance Contract · Green Energy Systems',
    bullets: [
      'Spearheaded structured deployment plans for green/automated heating, lighting & HVAC systems.',
      'Conducted regular account check-ins, locking in system-extension contracts.',
    ],
  },
  {
    title: 'CSM & Project Coordinator',
    when: 'Jul 2021 – Jun 2023',
    company: 'Lionbridge · Full-time',
    bullets: [
      'Direct interface for elite global law portfolios, handling urgent deliveries & critical escalation updates.',
      'Coordinated localization pipelines, decreasing average delivery turnarounds by 20%.',
    ],
  },
]

const OLDER: Role[] = [
  {
    title: 'Senior Customer Success Manager',
    when: 'Jun 2020 – May 2021',
    company: 'eComEngine · Full-time',
    bullets: [
      'Guided post-sales for merchants using feedback & review software, contributing a 10% revenue lift via feature adoption.',
    ],
  },
  {
    title: 'Customer Success Manager',
    when: 'Jan 2020 – Jun 2020',
    company: 'Crisalix · Full-time',
    bullets: [
      'Directed implementation & onboarding for premium clinics using medical visualization solutions.',
    ],
  },
  {
    title: 'Operations & Client Success Manager',
    when: 'Jan 2018 – Dec 2019',
    company: '2nd Office Inc. · Full-time',
    bullets: [
      'Scaled service teams from 3 to 10 agents, improving CSAT scores by 25% through QA coaching.',
    ],
  },
  {
    title: 'BPO Support & Escalations Manager',
    when: 'Jun 2011 – Mar 2017',
    company: 'Telus International · Full-time',
    bullets: [
      'Monitored delivery metrics & resolved critical complaints for international accounts.',
    ],
  },
]

function TimelineItem({ role }: { role: Role }) {
  return (
    <div className="relative pl-12 pb-10 last:pb-0">
      <div className="absolute left-[5px] top-1 w-5 h-5 rounded-full bg-[#0C0C0C] border-2 border-[#BBCCD7] grid place-items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-[#BBCCD7]" />
      </div>
      <div className="flex flex-wrap justify-between gap-2 items-baseline">
        <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl">
          {role.title}
        </h3>
        <span className="text-[0.72rem] font-medium text-[#D7E2EA]/60 border border-[#D7E2EA]/15 px-3 py-1 rounded-full">
          {role.when}
        </span>
      </div>
      <div className="text-sm font-medium text-[#BBCCD7] mt-1.5 mb-3">
        {role.company}
      </div>
      <ul className="grid gap-2">
        {role.bullets.map((b, i) => (
          <li
            key={i}
            className="relative pl-5 text-[#D7E2EA]/55 font-light text-sm leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-sm before:bg-[#7621B0]"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function JourneySection() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="journey"
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
        Journey
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="text-[#D7E2EA]/55 font-light text-center max-w-[560px] mx-auto mb-14 sm:mb-20"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        8+ years of Customer Success across global SaaS & BPO.
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        <div className="relative pl-2">
          <div
            className="absolute left-[14px] top-1 bottom-1 w-0.5"
            style={{
              background:
                'linear-gradient(180deg, #BBCCD7, #7621B0, transparent)',
            }}
          />
          {RECENT.map((role) => (
            <FadeIn key={role.title + role.when} x={-30} y={0}>
              <TimelineItem role={role} />
            </FadeIn>
          ))}

          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: open ? 2000 : 0, opacity: open ? 1 : 0 }}
          >
            {OLDER.map((role) => (
              <TimelineItem key={role.title + role.when} role={role} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] font-medium text-sm px-7 py-3 transition-colors hover:bg-[#D7E2EA]/10"
          >
            {open
              ? 'Collapse earlier experience ↑'
              : 'Reveal earlier experience (2011 – 2021) ↓'}
          </button>
        </div>
      </div>
    </section>
  )
}
