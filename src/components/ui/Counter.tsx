import { useEffect, useRef, useState } from 'react'

type CounterProps = {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function Counter({
  to,
  prefix = '',
  suffix = '',
  duration = 1400,
  className,
  style,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true
      let t0: number | null = null
      const step = (ts: number) => {
        if (t0 === null) t0 = ts
        const p = Math.min((ts - t0) / duration, 1)
        const e = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(to * e))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
      // safety: snap to final value if rAF never fires (e.g. headless renderer)
      window.setTimeout(() => setValue((v) => (v === 0 && to !== 0 ? to : v)), 1800)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((en) => en.isIntersecting)) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
