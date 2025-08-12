import Socials from './Socials'

const Footer = () => {
  return (
    <footer className=' py-12 bg-transparent'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6'
            iconStyles='text-white text-[35px]   transition-all'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
