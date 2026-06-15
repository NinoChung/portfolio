import { motion } from 'framer-motion'
import { useMemo } from 'react'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  // Memoize so the motion component identity is stable across re-renders.
  // Recreating it every render (e.g. when a parent like the ROI sliders
  // updates state) remounts the element and replays the enter animation,
  // causing a flicker + upward jump.
  const MotionTag = useMemo(() => motion.create(as), [as])

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
