import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

import Group from './icons/Group'
import OneOne from './icons/OneOne'
import Personal from './icons/Personal'

const servicesData = [
  {
    icon: <Group size={80} strokeWidth={0.8} />,
    title: 'Clases Grupales',
    description:
      'Ofrecemos clases grupales para ayudar a los estudiantes a aprender juntos y mejorar sus habilidades lingüísticas.',
  },
  {
    icon: <OneOne size={72} strokeWidth={0.8} />,
    title: 'One on One',
    description:
      'Ofrecemos clases personalizadas para ayudar a los estudiantes a alcanzar sus objetivos lingüísticos.',
  },
  {
    icon: <Personal size={72} strokeWidth={0.8} />,
    title: 'Paquetes Personalizados',
    description:
      'Ofrecemos paquetes personalizados para satisfacer las necesidades específicas de cada estudiante.',
  },
]

const Services = () => {
  return (
    <section className='min-h-screen mb-60 md:mb-96 xl:mb-50  py-12 xl:py-24  '>
      <div className='container mx-auto relative z-10'>
        <h2
          className='section-title text-4xl md:text-6xl font-bold mb-22 xl:mb-40 text-center mx-auto  bg-gradient-to-br from-white/40 to-white/100
             bg-clip-text text-transparent'
        >
          Mis Servicios
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative bg-white/30  backdrop-blur-xs hover:scale-105 hover:translate-y-1 transition-transform duration-300 ease-in-out'
                key={index}
              >
                <CardHeader className='text-white absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-transparent dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center text-white text-3xl'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg text-white/80'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
