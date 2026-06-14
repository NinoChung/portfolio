import { useState } from 'react'
import FadeIn from './ui/FadeIn'

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString('en-US')
}

type SliderProps = {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  minLabel: string
  maxLabel: string
  onChange: (v: number) => void
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  minLabel,
  maxLabel,
  onChange,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="mb-7 last:mb-0">
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-[#D7E2EA]/60 font-light text-sm">{label}</span>
        <b className="text-[#D7E2EA] font-semibold">{display}</b>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-range w-full"
        style={{
          background: `linear-gradient(90deg, #BBCCD7 0%, #BBCCD7 ${pct}%, rgba(215,226,234,0.12) ${pct}%)`,
        }}
      />
      <div className="flex justify-between text-[0.68rem] text-[#D7E2EA]/55 mt-2">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}

export default function RoiSection() {
  const [arr, setArr] = useState(2000000)
  const [exp, setExp] = useState(10)
  const [churn, setChurn] = useState(15)

  const saved = arr * (churn / 100) * 0.25
  const yld = arr * (exp / 100)
  const total = saved + yld

  return (
    <section
      id="roi"
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
        ROI Engine
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="text-[#D7E2EA]/55 font-light text-center max-w-[600px] mx-auto mb-14 sm:mb-20"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
      >
        Plug in your metrics to project the recurring revenue I can recover,
        safeguard, and scale over a 12-month tenure.
      </FadeIn>

      <FadeIn
        delay={0}
        y={30}
        className="max-w-4xl mx-auto rounded-[32px] border border-[#D7E2EA]/15 p-6 sm:p-8 md:p-10"
        style={{ background: 'rgba(215,226,234,0.03)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <Slider
              label="Annual Recurring Revenue (ARR)"
              value={arr}
              min={500000}
              max={10000000}
              step={100000}
              display={fmt(arr)}
              minLabel="$500K"
              maxLabel="$10M+"
              onChange={setArr}
            />
            <Slider
              label="Target Expansion Uplift"
              value={exp}
              min={1}
              max={25}
              step={1}
              display={`${exp}%`}
              minLabel="1%"
              maxLabel="25%"
              onChange={setExp}
            />
            <Slider
              label="Baseline Annual Churn Rate"
              value={churn}
              min={2}
              max={40}
              step={1}
              display={`${churn}%`}
              minLabel="2%"
              maxLabel="40%"
              onChange={setChurn}
            />
          </div>

          <div
            className="rounded-3xl border border-[#D7E2EA]/12 p-6 sm:p-8 flex flex-col"
            style={{ background: '#0C0C0C' }}
          >
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#D7E2EA]/55">
              Estimated Value Generated
            </div>
            <div
              className="hero-heading font-black leading-none my-3"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 3.4rem)' }}
            >
              {fmt(total)}
            </div>
            <small className="text-[#D7E2EA]/55 font-light leading-relaxed">
              Projection based on a historic 25% reduction in addressable churn,
              plus achieving your targeted account expansion.
            </small>
            <div className="mt-auto pt-6 border-t border-[#D7E2EA]/12 grid gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#D7E2EA]/55 font-light">
                  Retained churn revenue (25% saved)
                </span>
                <b className="text-[#D7E2EA] font-semibold">+{fmt(saved)}</b>
              </div>
              <div className="flex justify-between">
                <span className="text-[#D7E2EA]/55 font-light">
                  Account upsell / expansion yield
                </span>
                <b className="text-[#D7E2EA] font-semibold">+{fmt(yld)}</b>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
