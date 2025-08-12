import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className='h-[600px] py-4 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2
            className='section-title text-4xl md:text-6xl font-bold mb-8 xl:mb-40 text-center mx-auto  bg-gradient-to-br from-white/40 to-white/100
             bg-clip-text text-transparent'
          >
            ¡No pierdas la oportunidad de aprender inglés de manera efectiva y
            divertida!
          </h2>
          <Link href='/'>
            <Button className='mt-4 px-30 py-4 text-lg bg-linear-65 from-purple-500 to-pink-500 text-white rounded-md hover:bg-accent-hover transition'>
              ¡Inscríbete Ahora!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
