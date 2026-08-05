import React from 'react'
import Reveal from '../components/Reveal'
import { achievements, content } from '../data/profile'

const Achievements = () => {
  return (
    <section id='achievements' className='py-20 relative overflow-hidden'>
      <div className='container mx-auto px-6'>

        <Reveal>
          <p className='eyebrow'>{content.achievements.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className='mt-4 max-w-2xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]'>
            {content.achievements.heading}
          </h2>
        </Reveal>

        <div className='mt-16 border-t border-border'>
          {achievements.map((item, idx) => (
            <Reveal key={idx} delay={idx * 60} className='border-b border-border py-8 group'>
              <div className='grid md:grid-cols-[200px_1fr] gap-4 md:gap-12'>
                <div>
                  <p className='text-sm text-muted-foreground'>{item.period}</p>
                  <p className='text-sm text-muted-foreground mt-1'>{item.location}</p>
                </div>
                <div>
                  <div className='flex flex-wrap items-baseline gap-x-3'>
                    <h3 className='text-lg md:text-xl font-bold tracking-tight'>{item.title}</h3>
                    <span className='text-muted-foreground'>&mdash; {item.org}</span>
                  </div>
                  <ul className='mt-3 space-y-1.5'>
                    {item.points.map((point, pidx) => (
                      <li key={pidx} className='text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-["/"] before:absolute before:left-0 before:text-primary'>
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

export default Achievements
