import React from 'react'
import { Button } from '../components/Button'
import { ArrowRight, Download } from 'lucide-react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'
import Magnetic from '../components/Magnetic'
import { Github, Linkedin } from 'flowbite-react-icons/solid'
import { SiLeetcode } from 'react-icons/si'
import { skills, socials, content } from '../data/profile'

const techMarquee = skills.flatMap((group) => group.items)

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  leetcode: SiLeetcode,
}

const Hero = () => {
  return (
    <section className='relative min-h-screen flex flex-col justify-center overflow-hidden'>

      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10 flex-1 flex flex-col justify-center'>

        <div className='max-w-4xl'>
          <p className='eyebrow animate-fade-in'>{content.hero.eyebrow}</p>

          <h1 className='mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-bold tracking-tight animate-fade-in animation-delay-100'>
            {content.hero.headline}
          </h1>

          <p className='mt-8 max-w-lg text-lg text-muted-foreground animate-fade-in animation-delay-200'>
            {content.hero.tagline}
          </p>

          {/* CTAs */}
          <div className='flex flex-wrap items-center gap-4 mt-10 animate-fade-in animation-delay-300'>
            <Magnetic>
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                {content.ctaLabel} <ArrowRight className='w-5 h-5' />
              </Button>
            </Magnetic>
            <Magnetic>
              <AnimatedBorderButton>
                <Download className='w-5 h-5' />
                {content.downloadCvLabel}
              </AnimatedBorderButton>
            </Magnetic>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-10 animate-fade-in animation-delay-400">
            {socials.map((social) => {
              const Icon = socialIcons[social.key]
              return (
                <Magnetic key={social.key} strength={0.5}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Magnetic>
              )
            })}
          </div>
        </div>

        {/* Tech strip */}
        <div className="mt-24 animate-fade-in animation-delay-600 border-y border-border">
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...techMarquee, ...techMarquee].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center px-8 py-5">
                  <span className="text-sm tracking-wide text-muted-foreground/70">{skill}</span>
                  <span className="ml-8 text-primary/40">/</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className='hidden md:flex flex-col items-center gap-3 absolute bottom-10 right-10 z-10 animate-fade-in animation-delay-800'>
        <span className='text-xs tracking-[0.2em] uppercase text-muted-foreground [writing-mode:vertical-rl]'>{content.hero.scrollLabel}</span>
        <span className='relative w-px h-10 bg-border overflow-hidden'>
          <span className='absolute left-0 top-0 w-px h-3 bg-primary animate-scroll-cue' />
        </span>
      </div>
    </section>
  )
}

export default Hero
