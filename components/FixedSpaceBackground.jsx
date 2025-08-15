'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic'

// Cargar canvas SOLO en cliente
const SpaceBackground = dynamic(() => import('./SpaceBackground'), {
  ssr: false,
})

export default function FixedSpaceBackground() {
  const [container, setContainer] = useState(null)

  useEffect(() => {
    // aquí sí existe document
    const el = document.createElement('div')
    el.id = 'fixed-space-bg'
    document.body.appendChild(el)
    setContainer(el)
    return () => {
      document.body.removeChild(el)
    }
  }, [])

  // Durante SSR o antes de montar, no renderizamos el portal
  if (!container) return null

  return createPortal(
    <div
      className='pointer-events-none'
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        width: '100vw',
        height: '100dvh', // estable en mobile
        overflow: 'hidden',
      }}
    >
      {/* Imagen base fija */}
      <img
        src='/espacio.png'
        alt=''
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: 'translateZ(0)',
        }}
      />
      {/* Canvas transparente encima */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <SpaceBackground />
      </div>
    </div>,
    container,
  )
}
