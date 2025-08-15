// 'use client'
// import SpaceBackground from './SpaceBackground'

// export default function FixedSpaceBackground() {
//   return (
//     <div
//       className='fixed inset-0 -z-10 pointer-events-none'
//       style={{
//         backgroundImage: "url('/espacio.png')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       <SpaceBackground />
//     </div>
//   )
// }

// components / FixedSpaceBackground.jsx

// components/FixedSpaceBackground.jsx
'use client'
import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import SpaceBackground from './SpaceBackground'

export default function FixedSpaceBackground() {
  const el = useMemo(() => {
    const d = document.createElement('div')
    d.id = 'fixed-space-bg'
    return d
  }, [])

  useEffect(() => {
    document.body.appendChild(el)
    return () => document.body.removeChild(el)
  }, [el])

  return createPortal(
    <div
      className='pointer-events-none'
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1, // detrás de todo
        width: '100vw',
        height: '100dvh', // ✅ estable en mobile (dinamic viewport)
        overflow: 'hidden',
      }}
    >
      {/* Imagen base: no usa background-attachment */}
      <img
        src='/espacio.png'
        alt=''
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // ✅ siempre cubre cualquier pantalla
          objectPosition: 'center',
          transform: 'translateZ(0)',
        }}
      />
      {/* Canvas de estrellas/cometas transparente encima */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <SpaceBackground />
      </div>
    </div>,
    el,
  )
}
