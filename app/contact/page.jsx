import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'

// components
import Form from '@/components/Form'

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* ilustration and text */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              <div>Hi!!</div>
            </div>
            <h1 className='h1 max-w-md mb-8'>Contact Me</h1>
            <p className='subtitle'>
              If you want to get in touch with me, please fill out the form
              below. I will get back to you as soon as possible.
            </p>
          </div>
          {/* ilustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* contact info form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* contact mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>a.vargasg5@hotmail.com</div>
            </div>
            {/* contact address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>Phoenix, AZ</div>
            </div>
            {/* contact phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>+1 (480) 123 4567</div>
            </div>
          </div>
          {/* form */}

          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
