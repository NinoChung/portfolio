import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type AnimatedCharProps = {
  char: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: [number, number]
}

function AnimatedChar({ char, progress, range }: AnimatedCharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === ' ' ? ' ' : char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char === ' ' ? ' ' : char}
      </motion.span>
    </span>
  )
}

type AnimatedTextProps = {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = start + 1 / chars.length
        return (
          <AnimatedChar
            key={i}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}
