type ContactButtonProps = {
  className?: string
  href?: string
  label?: string
  target?: string
}

const GRADIENT_STYLE: React.CSSProperties = {
  background:
    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-3px',
}

const CLASSES =
  'inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-105'

export default function ContactButton({
  className = '',
  href,
  label = 'Contact Me',
  target,
}: ContactButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${CLASSES} ${className}`}
        style={GRADIENT_STYLE}
      >
        {label}
      </a>
    )
  }
  return (
    <button className={`${CLASSES} ${className}`} style={GRADIENT_STYLE}>
      {label}
    </button>
  )
}
