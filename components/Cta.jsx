import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
            ¡No pierdas la oportunidad de aprender inglés de manera efectiva y
            divertida!
          </h2>
          <Link href='/'>
            <Button className='mt-4 px-6 py-2 bg-linear-65 from-purple-500 to-pink-500 text-white rounded-md hover:bg-accent-hover transition'>
              ¡Inscríbete Ahora!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
