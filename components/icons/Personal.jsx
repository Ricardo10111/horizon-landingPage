import Image from 'next/image'
import React from 'react'

export default function Personal() {
  return (
    <div>
      <Image
        src='/services/personal.svg'
        alt='Personal Icon'
        width={130}
        height={72}
      />
    </div>
  )
}
