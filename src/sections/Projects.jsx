import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects, publications, content } from '../data/profile'

const Projects = () => {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6'>

        <Reveal>
          <p className='eyebrow'>{content.projects.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className='mt-4 max-w-2xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]'>
            {content.projects.heading}
          </h2>
        </Reveal>

        <div className='grid md:grid-cols-2 gap-px bg-border mt-16 border border-border'>
          {projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 80} className='bg-background p-8 md:p-10 group'>
              <div className='flex items-start justify-between'>
                <span className='text-sm text-muted-foreground'>{String(idx + 1).padStart(2, '0')}</span>
                <ArrowUpRight className='w-5 h-5 text-muted-foreground transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary' />
              </div>
              <h3 className='mt-8 text-2xl font-bold tracking-tight'>{project.name}</h3>
              <p className='text-sm text-muted-foreground mt-1'>{project.period}</p>
              <ul className='mt-4 space-y-1.5'>
                {project.points.map((point, pidx) => (
                  <li key={pidx} className='text-muted-foreground leading-relaxed pl-4 relative before:content-["/"] before:absolute before:left-0 before:text-primary'>
                    {point}
                  </li>
                ))}
              </ul>
              <div className='flex flex-wrap gap-2 mt-6'>
                {project.stack.split(', ').map((tag, tidx) => (
                  <span key={tidx} className='px-3 py-1 text-xs border border-border rounded-[var(--radius)] text-muted-foreground'>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className='mt-16 pt-10 border-t border-border'>
          <p className='eyebrow'>{content.projects.publicationsLabel}</p>
          <div className='mt-6 space-y-8'>
            {publications.map((pub, idx) => (
              <div key={idx} className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2'>
                <div className='max-w-2xl'>
                  <p className='text-lg'>
                    <span className='font-medium'>{pub.title}</span>
                    <span className='text-muted-foreground'> &mdash; with {pub.coauthors}</span>
                  </p>
                  <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>{pub.summary}</p>
                </div>
                <p className='text-sm text-muted-foreground shrink-0'>{pub.venue}, {pub.year}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Projects
