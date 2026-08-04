import React, { useEffect, useRef, useState } from 'react'

const CursorDot = () => {
  const dotRef = useRef(null)
  const [enabled] = useState(() => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add("has-fine-pointer")

    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
      }
    }

    const isInteractive = (el) => el?.closest?.("a, button, input, textarea, [role='button']")

    const over = (e) => setHovering(!!isInteractive(e.target))

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      document.documentElement.classList.remove("has-fine-pointer")
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className={`fixed top-0 left-0 z-[999] pointer-events-none rounded-full bg-primary mix-blend-difference transition-[width,height] duration-200 ease-[var(--ease-premium)] ${
        hovering ? "w-8 h-8" : "w-2.5 h-2.5"
      }`}
    />
  )
}

export default CursorDot
