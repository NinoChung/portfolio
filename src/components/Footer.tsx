export default function Footer() {
  return (
    <footer
      className="border-t border-[#D7E2EA]/10 py-10 px-5 text-center"
      style={{ background: '#0C0C0C' }}
    >
      <p className="text-[#D7E2EA]/55 text-sm font-light">
        © 2026 Niño Chung. All rights reserved. ·{' '}
        <span className="hero-heading font-medium">
          Customer Success &amp; Landing Pages
        </span>
      </p>
      <p className="text-[#D7E2EA]/55 text-xs font-light mt-2">
        Built with React, TypeScript &amp; Framer Motion. Form submissions
        processed via Web3Forms.
      </p>
    </footer>
  )
}
