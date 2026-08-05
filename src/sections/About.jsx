import React from 'react'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { PiBrainDuotone } from 'react-icons/pi'
import { SiSpringboot } from 'react-icons/si'
import Reveal from '../components/Reveal'
import { bio, education, skills, extracurricular, highlights, content } from '../data/profile'

const highlightIcons = {
  mobile: HiOutlineDeviceMobile,
  ml: PiBrainDuotone,
  backend: SiSpringboot,
}

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6'>

        <Reveal>
          <p className='eyebrow'>{content.about.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className='mt-4 max-w-2xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]'>
            {content.about.heading}
          </h2>
        </Reveal>

        {/* Highlight cards */}
        <div className='grid sm:grid-cols-3 gap-6 mt-16'>
          {highlights.map((item, idx) => {
            const Icon = highlightIcons[item.key]
            return (
              <Reveal key={item.key} delay={idx * 100}>
                <div className='h-full bg-card border border-border rounded-2xl p-8 shadow-lg shadow-black/20 transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5),0_0_16px_rgba(215,255,61,0.15)]'>
                  <Icon className='w-6 h-6 text-primary' />
                  <h3 className='mt-6 text-lg font-bold tracking-tight'>{item.title}</h3>
                  <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className='grid lg:grid-cols-12 gap-12 lg:gap-16 mt-20'>
          {/* Bio + education */}
          <div className='lg:col-span-7'>
            <Reveal>
              <p className='text-lg text-muted-foreground leading-relaxed max-w-xl'>
                {bio.replace(/\n/g, ' ')}
              </p>
            </Reveal>

            <Reveal delay={100} className='mt-14'>
              <p className='eyebrow'>{content.about.educationLabel}</p>
              <div className='mt-6 divide-y divide-border border-t border-border'>
                {education.map((item, idx) => (
                  <div key={idx} className='py-5'>
                    <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
                      <div>
                        <p className='font-medium'>{item.school}</p>
                        <p className='text-sm text-muted-foreground mt-1'>{item.degree}</p>
                      </div>
                      <div className='text-right shrink-0'>
                        <p className='text-sm text-muted-foreground'>{item.period}</p>
                        <p className='text-sm text-primary mt-1'>{item.detail}</p>
                      </div>
                    </div>
                    {item.coursework && (
                      <p className='text-sm text-muted-foreground/70 mt-3 leading-relaxed'>
                        {item.coursework}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className='mt-14'>
              <p className='eyebrow'>{content.about.extracurricularLabel}</p>
              <div className='mt-6 space-y-4'>
                {extracurricular.map((item, idx) => (
                  <div key={idx}>
                    <p className='font-medium'>{item.title}</p>
                    <p className='text-sm text-muted-foreground mt-1'>{item.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Skills */}
          <div className='lg:col-span-5 lg:border-l lg:border-border lg:pl-16'>
            <Reveal delay={200}>
              <p className='eyebrow'>{content.about.skillsLabel}</p>
              <div className='mt-6 space-y-8'>
                {skills.map((group, idx) => (
                  <div key={idx}>
                    <p className='text-sm text-muted-foreground mb-3'>{group.label}</p>
                    <div className='flex flex-wrap gap-2'>
                      {group.items.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className='px-3 py-1.5 text-sm border border-border rounded-full text-foreground/90 transition-all duration-300 ease-[var(--ease-premium)] hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(215,255,61,0.2)]'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
