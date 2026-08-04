import React from 'react'

export const Button = ({ className = "", size = "default", children, onClick, type = "button", disabled = false }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-[var(--radius)] bg-primary text-primary-foreground transition-colors duration-300 ease-[var(--ease-premium)] hover:bg-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-sm",
        lg: "px-7 py-3.5 text-base"
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={classes}>
            <span className='relative flex justify-center items-center gap-2'>
                {children}
            </span>
        </button>
    )
}
