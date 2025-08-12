'use client'
import { useEffect, useRef } from 'react'

export default function ParallaxSection({
  children,
  speed = 0.2,
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    let raf
    const el = ref.current

    const update = () => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      // mueve la sección más lento que el scroll
      const translate = -rect.top * speed
      el.style.transform = `translate3d(0, ${translate}px, 0)`
      raf = requestAnimationFrame(update)
    }

    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      {children}
    </div>
  )
}
