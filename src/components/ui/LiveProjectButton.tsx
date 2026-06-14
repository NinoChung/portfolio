type LiveProjectButtonProps = {
  className?: string
  href?: string
  label?: string
}

const CLASSES =
  'inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10'

export default function LiveProjectButton({
  className = '',
  href,
  label = 'Live Project',
}: LiveProjectButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${CLASSES} ${className}`}
      >
        {label}
      </a>
    )
  }
  return <button className={`${CLASSES} ${className}`}>{label}</button>
}
