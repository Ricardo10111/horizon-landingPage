import Image from 'next/image'
import React from 'react'

export default function Group() {
  return (
    <div>
      <Image
        src='/services/group.svg'
        alt='Group Icon'
        width={130}
        height={72}
      />
    </div>
  )
}
