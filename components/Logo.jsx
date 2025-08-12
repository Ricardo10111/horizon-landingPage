'use client'

import Link from 'next/link'
import Image from 'next/image'

const Logo = ({ renderLogo }) => {
  if (renderLogo) {
    return renderLogo()
  }

  return (
    <Link href='/'>
      <Image src='logo.svg' width={54} height={54} priority alt='Logo' />
    </Link>
  )
}

export default Logo
