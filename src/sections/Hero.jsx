import React from 'react'
import { Button } from '../components/Button'
import { ArrowRight, Download } from 'lucide-react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const Hero = () => {
  return (
    <section
      className='relative min-h-screen flex items-center overflow-hidden'>

      {/*Background Image */}
      <div className='absolute inset-0'>
        <img
          src="/hero-bg.jpg"
          alt='hero-bg'
          className='w-full h-full object-cover opacity-40'
        />
      </div>

      <div className='absolute inset-0 bg-gradient-to-b  from-background/20 via-background/80 to-background' />

      {/* Green dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >

          </div>
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/*Left column - text content */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full' />Sumit Gupta . Tech Generalist
              </span>
            </div>
          </div>

          {/*Headline */}
          <div className='space-y-4'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
              Crafting <span className='text-primary glow-text'>Art</span>
              <br />
              with love and
              <br />
              <span className='font-serif italic font-normal text-white'>
                Technology
              </span>
            </h1>

            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
              Hi, I am Sumit. I love Kotlin and I use it for Apps and backend development. I am a Software Engineer-II specializing in app development.
            </p>
            {/* CTAs */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size="lg">
                Contact Me <ArrowRight className='w-5 h-5' />
              </Button>
              <AnimatedBorderButton>
                <Download className='w-5 h-5' />
                Download CV
              </AnimatedBorderButton>

            </div>

             {/* Social Links */}
            {/* <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: GitHub, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div> */}

          </div>
          {/*Right column - profile image */}
        </div>
      </div>

    </section>
  )
}

export default Hero