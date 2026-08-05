import React, { useEffect, useState } from 'react'
import { SiAndroid, SiApple, SiSpringboot, SiPytorch } from 'react-icons/si'

const ICONS = [SiAndroid, SiApple, SiSpringboot, SiPytorch]
const INTERVAL_MS = 2600

const NavLogoCycle = ({ className = "" }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ICONS.length)
    }, INTERVAL_MS)

    return () => clearInterval(interval)
  }, [])

  const Icon = ICONS[index]

  return (
    <span className={`relative inline-flex w-5 h-5 items-center justify-center ${className}`}>
      <Icon key={index} className='w-4 h-4 text-primary animate-nav-icon-cycle' />
    </span>
  )
}

export default NavLogoCycle
