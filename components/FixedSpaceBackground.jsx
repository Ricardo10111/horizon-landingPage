'use client'
import SpaceBackground from './SpaceBackground'

export default function FixedSpaceBackground() {
  // capa fija detrás de todo
  return (
    <div className='fixed inset-0 -z-10 pointer-events-none'>
      <SpaceBackground />
    </div>
  )
}
