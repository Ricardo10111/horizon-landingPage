import Image from 'next/image'
import React from 'react'

export default function OneOne() {
  return (
    <div>
      <Image
        src='/services/one-one.svg'
        alt='One-on-One Icon'
        width={130}
        height={72}
      />
    </div>
  )
}
