'use client'

import { RiFacebookFill, RiWhatsappFill } from 'react-icons/ri'

const icons = [
  {
    path: 'https://www.facebook.com/people/Horizons-English-Studio/61579141342806/',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://wa.me/+525573633009',
    name: <RiWhatsappFill />,
  },
]

const Socials = ({ containerStyles, iconStyles, renderIcon }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>
        renderIcon ? (
          renderIcon(icon.name, icon.path)
        ) : (
          <a
            href={icon.path}
            key={index}
            target='_blank'
            rel='noopener noreferrer'
            className={`${iconStyles}`}
          >
            {icon.name}
          </a>
        ),
      )}
    </div>
  )
}

export default Socials
