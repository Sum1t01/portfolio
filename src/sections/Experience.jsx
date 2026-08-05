import React from 'react'
import Reveal from '../components/Reveal'
import { experience, content } from '../data/profile'

const Experience = () => {
  return (
    <section id='experience' className='py-20 relative overflow-hidden'>
      <div className='container mx-auto px-6'>

        <Reveal>
          <p className='eyebrow'>{content.experience.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className='mt-4 max-w-2xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]'>
            {content.experience.heading}
          </h2>
        </Reveal>

        <div className='mt-16 border-t border-border'>
          {experience.map((job, idx) => (
            <Reveal key={idx} delay={idx * 80} className='border-b border-border py-10 group'>
              <div className='grid md:grid-cols-[200px_1fr] gap-4 md:gap-12'>
                <div>
                  <p className='text-sm text-muted-foreground'>{job.period}</p>
                  <p className='text-sm text-muted-foreground mt-1'>{job.location}</p>
                </div>
                <div>
                  <div className='flex flex-wrap items-baseline gap-x-3'>
                    <h3 className='text-xl md:text-2xl font-bold tracking-tight'>{job.role}</h3>
                    <span className='text-muted-foreground'>&mdash; {job.org}</span>
                  </div>
                  <ul className='mt-4 space-y-2'>
                    {job.points.map((point, pidx) => (
                      <li key={pidx} className='text-sm md:text-base text-muted-foreground leading-relaxed pl-4 relative before:content-["/"] before:absolute before:left-0 before:text-primary'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
