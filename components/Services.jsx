import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

import Astronaut from './icons/Astronaut'

const servicesData = [
  {
    icon: <Astronaut size={80} strokeWidth={0.8} />,
    title: 'Clases Grupales',
    description:
      'Ofrecemos clases grupales para ayudar a los estudiantes a aprender juntos y mejorar sus habilidades lingüísticas.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'One on One',
    description:
      'Ofrecemos clases personalizadas para ayudar a los estudiantes a alcanzar sus objetivos lingüísticos.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Paquetes Personalizados',
    description:
      'Ofrecemos paquetes personalizados para satisfacer las necesidades específicas de cada estudiante.',
  },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36  py-12 xl:py-24'>
      {/* Fondo animado */}

      <div className='container mx-auto relative z-10'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
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
