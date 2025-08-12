import MarkImg from './MarkImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Brenda Vargas',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+1 (480) 123 4567',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'b.vargas@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Febrero 5, 1995',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'English Teacher',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Mexico, Queretaro',
  },
]

const qualificationsData = [
  {
    title: 'education',
    data: [
      {
        university: 'ESL',
        qualification: <GraduationCap size={28} />,
      },
      {
        university: 'Business English',
        qualification: <GraduationCap size={28} />,
      },
      {
        university: 'English for Travelers',
        qualification: <GraduationCap size={28} />,
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Test Prep',
        role: <GraduationCap size={28} />,
      },
      {
        company: 'Conversation Fluency',
        role: <GraduationCap size={28} />,
      },
      {
        company: 'Kids & Adults',
        role: <GraduationCap size={28} />,
      },
    ],
  },
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section id='about' className='min-h-screen mb-70 pb-12 xl:py-24 bg-white'>
      <div className='container mx-auto'>
        <h2
          className='section-title text-4xl md:text-6xl font-bold mb-8 xl:mb-16 text-center mx-auto
             bg-gradient-to-br from-sky-500 to-indigo-500
             bg-clip-text text-transparent'
        >
          Acerca de Horizons
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <MarkImg
              containerStyles='w-[505px] h-[505px] bg-transparent relative'
              imgSrc='/about-photo.jpg'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto ' value='personal'>
                  Quien Soy
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Que Ofrezco
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>Hola, soy Brenda Vargas</h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      Soy profesora de inglés con una pasión por ayudar a los
                      estudiantes a alcanzar sus objetivos lingüísticos. Con más
                      de 5 años de experiencia, he desarrollado un estilo de
                      enseñanza único que combina métodos tradicionales con
                      tecnología moderna para crear un entorno de aprendizaje
                      atractivo y efectivo.
                    </p>
                    <br />
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Idiomas</div>
                      <div className='border-b border-border'></div>
                      <div>Inglés, Español, Alemán</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My awesome Benefits
                    </h3>
                    {/* experience & education wraper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationsData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationsData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
