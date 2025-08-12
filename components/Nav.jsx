'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { path: '/', name: 'home' },
  { path: '/contact', name: 'contact' },
]

const Nav = ({ containerStyles, linkStyles, underLineStyles, renderLink }) => {
  const path = usePathname()
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) =>
        renderLink ? (
          renderLink(link.name, link.path)
        ) : (
          <a
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </a>
        ),
      )}
    </nav>
  )
}

export default Nav
