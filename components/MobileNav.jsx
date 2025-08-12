import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet'
import { AlignJustify } from 'lucide-react'

import Nav from './Nav'
import Logo from './Logo'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo
              renderLogo={() => (
                <SheetClose asChild>
                  <Link href='/'>
                    <Image
                      src='logogray.svg'
                      width={54}
                      height={54}
                      priority
                      alt='Logo'
                    />
                  </Link>
                </SheetClose>
              )}
            />
            <div className='flex flex-col items-center gap-y-6'>
              {/** Render links from Nav with SheetClose */}
              <Nav
                containerStyles='flex flex-col items-center gap-y-6 capitalize'
                linkStyles='text-2xl'
                renderLink={(children, href) => (
                  <SheetClose asChild>
                    <a href={href} className='text-2xl'>
                      {children}
                    </a>
                  </SheetClose>
                )}
              />
            </div>
          </div>
          <div className='flex gap-x-4'>
            {/** Render icons from Socials with SheetClose */}
            <Socials
              renderIcon={(icon, href) => (
                <SheetClose asChild>
                  <a
                    href={href}
                    className='text-2xl'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {icon}
                  </a>
                </SheetClose>
              )}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
