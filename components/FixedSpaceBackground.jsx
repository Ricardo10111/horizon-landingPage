'use client'
import SpaceBackground from './SpaceBackground'

export default function FixedSpaceBackground() {
  return (
    <div
      className='fixed inset-0 -z-10 pointer-events-none'
      style={{
        backgroundImage: "url('/espacio.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <SpaceBackground />
    </div>
  )
}
