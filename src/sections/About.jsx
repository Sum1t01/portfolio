import { Code } from 'flowbite-react-icons/outline'
import React from 'react'
import { BsAndroid } from 'react-icons/bs'
import { IoSad } from 'react-icons/io5'
import { SiSpringboot } from 'react-icons/si'

const highlights = [
  {
    icon: BsAndroid,
    title: "Android Development",
    description: "Develop android apps in kotlin with Compose Multiplatform and clean architecture"
  },
  {
    icon: IoSad,
    title: "iOS Development",
    description: "Develop iOS apps in kotlin with Compose Multiplatform and clean architecture"
  },
  {
    icon: SiSpringboot,
    title: "Backend Development",
    description: "Develop scalable backend using springboot/kotlin"
  },

]

const About = () => {
  return (
   <section id='about' className='py-32 relative overflow-hidden'>
    <div>
      <div>
        {/* Left Column */}
        <div>
          <span>
            About Me
          </span>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About