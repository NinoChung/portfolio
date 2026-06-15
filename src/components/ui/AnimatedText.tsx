import { Fragment, useRef } from 'react'
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
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
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

  const words = text.split(' ')
  const total = text.length
  let index = 0 // running char index across the whole string (incl. spaces)

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        // each word is an unbreakable inline-block so it never splits mid-word
        const wordEl = (
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((ch, ci) => {
              const i = index++
              const start = i / total
              const end = start + 1 / total
              return (
                <AnimatedChar
                  key={ci}
                  char={ch}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              )
            })}
          </span>
        )
        index++ // account for the space that followed this word in the source
        return (
          <Fragment key={wi}>
            {wordEl}
            {wi < words.length - 1 ? ' ' : null}
          </Fragment>
        )
      })}
    </p>
  )
}
