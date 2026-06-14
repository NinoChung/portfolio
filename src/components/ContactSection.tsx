import { useState } from 'react'
import FadeIn from './ui/FadeIn'

const WEB3FORMS_KEY = 'ad6e58f6-2f14-4ba9-a965-a842084d96ff'
const CALENDLY = 'https://calendly.com/ninoechung/30min'

const inputCls =
  'w-full rounded-xl bg-[#0C0C0C] border border-[#D7E2EA]/15 text-[#D7E2EA] px-4 py-3 text-sm transition-colors focus:outline-none focus:border-[#7621B0] placeholder:text-[#D7E2EA]/45'
const labelCls =
  'block text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#D7E2EA]/55 mb-2'

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setStatus('Sending message…')
    const form = e.currentTarget
    const data: Record<string, string> = {}
    new FormData(form).forEach((v, k) => {
      data[k] = String(v)
    })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('✓ Message dispatched! I will be in touch shortly.')
        form.reset()
      } else {
        setStatus('Submission error: ' + json.message)
      }
    } catch {
      setStatus('Network error. Please email ninoechung@gmail.com directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
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
        Contact
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="text-[#D7E2EA]/55 font-light text-center max-w-[560px] mx-auto mb-14 sm:mb-16"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        Let's build something that retains and converts, or design your next
        landing page.
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 max-w-5xl mx-auto items-start">
        {/* Form */}
        <FadeIn
          delay={0}
          y={30}
          className="rounded-3xl border border-[#D7E2EA]/15 p-6 sm:p-8"
          style={{ background: 'rgba(215,226,234,0.03)' }}
        >
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input
              type="hidden"
              name="subject"
              value="New Portfolio Inquiry: Niño Chung"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="cf-name" className={labelCls}>
                  Your Name
                </label>
                <input
                  id="cf-name"
                  type="text"
                  name="name"
                  required
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className={labelCls}>
                  Work Email
                </label>
                <input
                  id="cf-email"
                  type="email"
                  name="email"
                  required
                  className={inputCls}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="cf-role" className={labelCls}>
                Inquiry Focus
              </label>
              <select
                id="cf-role"
                name="target_role"
                required
                className={inputCls}
              >
                <option>Full-Time CS Leadership Role</option>
                <option>Full-Time CS Role</option>
                <option>Implementation Project</option>
                <option>Landing Page Project</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="cf-message" className={labelCls}>
                Brief Context
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                required
                placeholder="Let me know how I can support your goals…"
                className={inputCls}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full text-white font-medium uppercase tracking-widest py-3.5 text-sm transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                outline: '2px solid #FFFFFF',
                outlineOffset: '-3px',
              }}
            >
              Dispatch Message →
            </button>
            {status && (
              <p className="mt-4 text-center text-sm text-[#BBCCD7]">{status}</p>
            )}
          </form>
        </FadeIn>

        {/* Channels */}
        <FadeIn delay={0.1} y={30} className="flex flex-col gap-4">
          <div
            className="rounded-3xl border border-[#D7E2EA]/15 p-6"
            style={{ background: 'rgba(215,226,234,0.03)' }}
          >
            <h3 className="text-[0.72rem] uppercase tracking-[0.1em] text-[#D7E2EA] font-semibold mb-5">
              Fast-Track Channels
            </h3>
            <div className="mb-4">
              <span className="block text-[0.62rem] uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-1">
                Email
              </span>
              <a
                href="mailto:ninoechung@gmail.com"
                className="text-[#BBCCD7] font-medium text-sm hover:underline"
              >
                ninoechung@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <span className="block text-[0.62rem] uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-1">
                Direct Line
              </span>
              <b className="text-[#D7E2EA] font-medium text-sm">
                +63 995 412 6149
              </b>
            </div>
            <div>
              <span className="block text-[0.62rem] uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-1">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/ninochung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BBCCD7] font-medium text-sm hover:underline"
              >
                linkedin.com/in/ninochung
              </a>
            </div>
          </div>

          <div
            className="rounded-3xl border border-[#D7E2EA]/15 p-6 text-center"
            style={{ background: 'rgba(215,226,234,0.03)' }}
          >
            <div className="hero-heading text-3xl font-black">◷</div>
            <h3 className="text-[#D7E2EA] font-medium text-sm mt-3 mb-1.5">
              Want instant calendar lock-in?
            </h3>
            <p className="text-[#D7E2EA]/55 font-light text-xs mb-4">
              Skip the back-and-forth. Book a 30-min slot directly.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest py-3 text-sm transition-colors hover:bg-[#D7E2EA]/10"
            >
              Book a 30-min call →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
