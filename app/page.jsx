import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Cta from '@/components/Cta'
import FixedSpaceBackground from '@/components/FixedSpaceBackground'
import ParallaxSection from '@/components/ParallaxSection'
import FadeSection from '@/components/FadeSection'

export default function Home() {
  return (
    <main className='relative'>
      {/* 1) Fondo espacial fijo en toda la página */}
      <FixedSpaceBackground />

      {/* 2) Hero normal (fondo viene de la capa fija) */}
      <FadeSection delay={0.1}>
        <Hero />
      </FadeSection>

      {/* 3) Secciones con parallax */}
      <ParallaxSection speed={0.15} className='relative z-10'>
        {/* <FadeSection delay={0.2}> */}
        <About />
        {/* </FadeSection> */}
      </ParallaxSection>

      <ParallaxSection speed={0.25} className='relative z-10'>
        <FadeSection delay={0.3}>
          <Services />
        </FadeSection>
      </ParallaxSection>

      <ParallaxSection speed={0.18} className='relative z-10'>
        <FadeSection delay={0.4}>
          <Cta />
        </FadeSection>
      </ParallaxSection>
    </main>
  )
}
