import React from 'react'

const AnimatedBorderButton = ({ children, className = "" }) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center gap-2
        px-7 py-3.5 text-base font-medium tracking-tight
        border border-border rounded-[var(--radius)] overflow-hidden
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${className}`}
    >
      <span
        className="absolute inset-0 bg-foreground origin-left scale-x-0
          transition-transform duration-500 ease-[var(--ease-premium)]
          group-hover:scale-x-100"
      />
      <span
        className="relative z-10 flex items-center justify-center gap-2
          text-foreground transition-colors duration-500 ease-[var(--ease-premium)]
          group-hover:text-background"
      >
        {children}
      </span>
    </button>
  )
}

export default AnimatedBorderButton
