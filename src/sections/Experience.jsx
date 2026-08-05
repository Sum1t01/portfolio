import React from 'react'
import { SiGoogleplay } from 'react-icons/si'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { experience, apps, content } from '../data/profile'

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

        {/* Apps worked on */}
        <Reveal delay={200} className='mt-16'>
          <p className='eyebrow'>{content.experience.appsLabel}</p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {apps.map((app, idx) => (
              <a
                key={idx}
                href={app.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group block h-full bg-card border border-border rounded-2xl p-6 shadow-lg shadow-black/20 transition-all duration-300 ease-[var(--ease-premium)] hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5),0_0_16px_rgba(215,255,61,0.15)]'
              >
                <div className='flex items-start justify-between'>
                  <SiGoogleplay className='w-5 h-5 text-primary' />
                  <ArrowUpRight className='w-4 h-4 text-muted-foreground transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary' />
                </div>
                <h4 className='mt-5 font-bold tracking-tight'>{app.name}</h4>
                <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>{app.description}</p>
              </a>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Experience
