import Image from 'next/image'
import React from 'react'

export default function Astronaut() {
  return (
    <div>
      <Image
        src='/services/astronaut.svg'
        alt='Astronaut Icon'
        width={130}
        height={72}
      />
    </div>
  )
}
