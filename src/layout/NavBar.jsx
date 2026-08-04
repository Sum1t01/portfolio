import React, { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Menu, X } from 'lucide-react'
import { nav, content } from '../data/profile'

const NavBar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ease-[var(--ease-premium)] ${
                isScrolled ? "bg-background/90 backdrop-blur-sm border-border" : "bg-transparent border-transparent"
            }`}
        >
            <nav className='container mx-auto px-6 py-5 flex items-center justify-between'>
                <a href='#' className='text-xl font-bold tracking-tight'>
                    {content.brandInitials}<span className='text-primary'>.</span>
                </a>

                {/* Desktop's navigation */}
                <div className='hidden md:flex items-center gap-10'>
                    {nav.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={() => setMobileMenuOpen(false)}
                            className='underline-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-300'
                        >
                            {link.label}
                        </a>
                    ))}
                </div>


                {/* CTA Button */}
                <div className='hidden md:block'>
                    <Button
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    >{content.ctaLabel}</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden p-2 text-foreground'
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                >

                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </nav>

            {/* Mobile hamburger menu */}
            {isMobileMenuOpen && <div className='md:hidden bg-background border-t border-border animate-fade-in'>
                <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                    {nav.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={() => setMobileMenuOpen(false)}
                            className='text-lg text-muted-foreground hover:text-foreground py-2'
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* CTA Button */}
                    <Button size='sm'>{content.ctaLabel}</Button>
                </div>
            </div>}
        </header>
    )
}

export default NavBar
