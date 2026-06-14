import { useState } from 'react'
import FadeIn from './ui/FadeIn'

type Tool = { abbr: string; name: string; role: string; cat: string }

const FILTERS = [
  { key: 'all', label: 'All Tools' },
  { key: 'crm', label: 'CRM & Support' },
  { key: 'pm', label: 'Project Mgmt' },
  { key: 'auto', label: 'Automation & AI' },
  { key: 'cms', label: 'CMS' },
]

const TOOLS: Tool[] = [
  { abbr: 'GHL', name: 'GoHighLevel', role: 'Expert Admin', cat: 'crm' },
  { abbr: 'SF', name: 'Salesforce', role: 'Enterprise CRM', cat: 'crm' },
  { abbr: 'HS', name: 'HubSpot', role: 'CRM Suite', cat: 'crm' },
  { abbr: 'ZD', name: 'Zendesk', role: 'Support Desk', cat: 'crm' },
  { abbr: 'FD', name: 'Freshdesk', role: 'SLA Support', cat: 'crm' },
  { abbr: 'FUB', name: 'FollowUpBoss', role: 'Lead Pipeline', cat: 'crm' },
  { abbr: 'AS', name: 'Asana', role: 'PM Coordination', cat: 'pm' },
  { abbr: 'M', name: 'Monday.com', role: 'Delivery Boards', cat: 'pm' },
  { abbr: 'CU', name: 'ClickUp', role: 'Sprint Tracking', cat: 'pm' },
  { abbr: 'Z', name: 'Zapier', role: 'Flow Automation', cat: 'auto' },
  { abbr: 'Mk', name: 'Make', role: 'API Workflows', cat: 'auto' },
  { abbr: 'WP', name: 'WordPress', role: 'Deployment', cat: 'cms' },
  { abbr: 'Sh', name: 'Shopify', role: 'eCommerce CSM', cat: 'cms' },
  { abbr: '</>', name: 'HTML · CSS · JS', role: 'Landing Pages', cat: 'cms' },
]

export default function StackSection() {
  const [filter, setFilter] = useState('all')

  return (
    <section
      id="stack"
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
        Stack
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="text-[#D7E2EA]/55 font-light text-center max-w-[560px] mx-auto mb-12"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        Filter the platforms I work in by specialization domain.
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full text-sm font-medium px-5 py-2.5 border transition-colors ${
              filter === f.key
                ? 'bg-[#D7E2EA] text-[#0C0C0C] border-transparent'
                : 'text-[#D7E2EA]/70 border-[#D7E2EA]/20 hover:text-[#D7E2EA]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
        {TOOLS.filter((t) => filter === 'all' || t.cat === filter).map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/12 p-4 transition-colors hover:border-[#D7E2EA]/30"
            style={{ background: 'rgba(215,226,234,0.03)' }}
          >
            <div
              className="w-10 h-10 rounded-xl grid place-items-center font-bold text-xs shrink-0 text-[#BBCCD7]"
              style={{ background: 'rgba(118,33,176,0.18)' }}
            >
              {t.abbr}
            </div>
            <div className="min-w-0">
              <b className="block text-[#D7E2EA] text-sm font-semibold truncate">
                {t.name}
              </b>
              <small className="text-[#D7E2EA]/70 text-xs">{t.role}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
