'use client'

import Image from 'next/image'

import { FcReading, FcGraduationCap, FcPortraitMode } from 'react-icons/fc'

// components
import MarkImg from './MarkImg'
import Badge from './Badge'

const Hero = () => {
  return (
    <section className='min-h-screen mb-70 relative py-12 xl:py-12   xl:pt-8 text-white overflow-hidden'>
      <div className='container mx-auto relative z-10'>
        <div className='flex justify-between gap-x-8 '>
          {/* text */}
          <div className='flex max-w-[600px] px-3 md:px-0 flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='flex items-center justify-center lg:items-start lg:justify-start mb-2'>
              <Image
                src='/logo.png'
                alt='Hero Image'
                width={200}
                height={200}
                className='lg:object-cover object-center lg:w-[300px]'
              />
            </div>
            <div className='text-2xl md:text-4xl font-bold mb-4'>
              Empieza tu viaje con el inglés hoy mismo.
            </div>
            <h2 className='text-xl md:text-2xl font-semibold mb-4'>
              ¡Haz tu examen de colocación gratis y da tu primer paso hacia la
              fluidez!
            </h2>

            <p>
              Para todas las edades, Todos los niveles. En Horizons English
              Studio te ayudamos a alcanzar tus metas en inglés con programas
              adaptados a tu nivel, intereses y ritmo de aprendizaje.Desde
              divertidas clases para niños hasta programas especializados para
              adultos, aprenderás de forma efectiva y disfrutarás cada paso del
              camino.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSe7-lKbIqfufxNSBLEjR6oEFiFNFUmS1P_TRwBMer-HEksqhw/viewform'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='mt-4 px-6 py-2  bg-linear-65 from-purple-500 to-pink-500 text-white rounded-md hover:bg-accent-hover transition'>
                  ¡Haz tu Examen de Colocación!
                </button>
              </a>
            </div>
          </div>

          {/* Badges */}
          <div className='hidden xl:flex relative mt-24'>
            {/* badge */}
            <Badge
              containerStyles='absolute  top-[14%] -left-[8rem]'
              icon={<FcReading />}
              endCountNum={9}
              badgeText='Años de Experiencia'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[70%]  -left-[6rem]'
              icon={<FcGraduationCap />}
              endCountText={'+'}
              endCountNum={100}
              badgeText='Estudiantes Satisfechos'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-14'
              icon={<FcPortraitMode />}
              endCountText={'k'}
              endCountNum={1}
              badgeText='Clases con Resultados'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <MarkImg
              containerStyles='bg-hero_shape w-[400px] h-[500px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/heroImage.png'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
