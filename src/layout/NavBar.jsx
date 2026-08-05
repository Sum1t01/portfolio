import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../components/Button'
import { Menu, X } from 'lucide-react'
import { nav, content } from '../data/profile'

const NavBar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })

    const navRef = useRef(null)
    const linkRefs = useRef({})

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

    useEffect(() => {
        const sections = nav
            .map((link) => document.getElementById(link.href.replace('#', '')))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const updateIndicator = () => {
            const activeEl = linkRefs.current[activeSection]
            if (activeEl) {
                setIndicator({ left: activeEl.offsetLeft, width: activeEl.offsetWidth, opacity: 1 })
            } else {
                setIndicator((prev) => ({ ...prev, opacity: 0 }))
            }
        }

        updateIndicator()
        window.addEventListener('resize', updateIndicator)
        return () => window.removeEventListener('resize', updateIndicator)
    }, [activeSection])

    const goToContact = () => {
        document.getElementById('contact')?.scrollIntoView()
        setMobileMenuOpen(false)
    }

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
                <div ref={navRef} className='hidden md:flex items-center gap-10 relative'>
                    {nav.map((link, index) => {
                        const sectionId = link.href.replace('#', '')
                        const isActive = sectionId === activeSection
                        return (
                            <a
                                href={link.href}
                                key={index}
                                ref={(el) => { linkRefs.current[sectionId] = el }}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm transition-colors duration-300 ${
                                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {link.label}
                            </a>
                        )
                    })}
                    <span
                        className='absolute bottom-[-8px] h-px bg-primary transition-[left,width,opacity] duration-500 ease-[var(--ease-premium)]'
                        style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
                    />
                </div>


                {/* CTA Button */}
                <div className='hidden md:block'>
                    <Button
                    size="sm"
                    onClick={goToContact}
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
                    {nav.map((link, index) => {
                        const sectionId = link.href.replace('#', '')
                        const isActive = sectionId === activeSection
                        return (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-lg py-2 transition-colors duration-300 ${
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {link.label}
                            </a>
                        )
                    })}

                    {/* CTA Button */}
                    <Button size='sm' onClick={goToContact}>{content.ctaLabel}</Button>
                </div>
            </div>}
        </header>
    )
}

export default NavBar
