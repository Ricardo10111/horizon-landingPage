import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6'
            iconStyles='text-primary dark:text-white/70 text-[20px] hover:text-black/70 dark:hover:text-primary transition-all'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
