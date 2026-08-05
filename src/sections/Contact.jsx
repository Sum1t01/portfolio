import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Github, Linkedin } from 'flowbite-react-icons/solid'
import { SiLeetcode } from 'react-icons/si'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import { Button } from '../components/Button'
import { profile, socials, content } from '../data/profile'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  leetcode: SiLeetcode,
}

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const inputClasses = "w-full bg-transparent border border-border rounded-2xl px-5 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-300 ease-[var(--ease-premium)] hover:border-primary/50 focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(215,255,61,0.25)]"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${form.name} via portfolio`,
          ...form,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id='contact' className='py-20 relative overflow-hidden'>
      <div className='container mx-auto px-6'>

        <Reveal>
          <p className='eyebrow'>{content.contact.eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className='mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl'>
            {content.contact.headingLead} <span className='font-light text-muted-foreground'>{content.contact.headingTail}</span>
          </h2>
        </Reveal>

        <Reveal delay={160} className='mt-10 max-w-xl'>
          <p className='text-muted-foreground mb-8'>{content.contact.formIntro}</p>

          {status === "success" ? (
            <p className='py-6 text-lg text-primary'>{content.contact.successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid sm:grid-cols-2 gap-5'>
                <div>
                  <label htmlFor='contact-name' className='sr-only'>Name</label>
                  <input
                    id='contact-name'
                    name='name'
                    type='text'
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={content.contact.namePlaceholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor='contact-email' className='sr-only'>Email</label>
                  <input
                    id='contact-email'
                    name='email'
                    type='email'
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={content.contact.emailPlaceholder}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor='contact-message' className='sr-only'>Message</label>
                <textarea
                  id='contact-message'
                  name='message'
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={content.contact.messagePlaceholder}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className='text-sm text-red-400'>{content.contact.errorMessage}</p>
              )}

              <Magnetic strength={0.15}>
                <Button size='lg' type='submit' disabled={status === "sending"}>
                  {status === "sending" ? content.contact.sendingLabel : content.contact.submitLabel}
                  {status !== "sending" && <ArrowUpRight className='w-5 h-5' />}
                </Button>
              </Magnetic>
            </form>
          )}
        </Reveal>

        <Reveal delay={220} className='mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-8'>
          <div className='flex items-center gap-6'>
            {socials.map((social) => {
              const Icon = socialIcons[social.key]
              return (
                <Magnetic key={social.key} strength={0.5}>
                  <a
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300'
                  >
                    <Icon className='w-4 h-4' />
                    {social.label}
                  </a>
                </Magnetic>
              )
            })}
          </div>
          <p className='text-sm text-muted-foreground'>{profile.location}</p>
        </Reveal>

        <p className='mt-6 text-xs text-muted-foreground'>{content.footer.copyright(new Date().getFullYear())}</p>

      </div>
    </section>
  )
}

export default Contact
