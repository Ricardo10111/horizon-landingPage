import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Cta from '@/components/Cta'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Cta />
    </main>
    // <section className=" flex flex-row items-center justify-center min-h-screen  bg-[#302b62] text-white gap-60">
    //   <div className="flex flex-col items-start p-8 max-w-xl">
    //     <h1 className="text-4xl font-bold mb-4">
    //       Donde Tu Ingles Comenzara a Volar - Para Todas las Edades, Para
    //       cualquier Nivel
    //     </h1>
    //     <h2 className="text-2xl font-semibold mb-4">
    //       Aprende Ingles de Manera Divertida y Efectiva
    //     </h2>
    //     <br />
    //     <p>
    //       En nuestra escuela, ofrecemos una variedad de cursos diseñados para
    //       satisfacer las necesidades de estudiantes de todas las edades y
    //       niveles. Desde clases para niños hasta programas para adultos,
    //       garantizamos un aprendizaje efectivo y agradable.
    //     </p>
    //     <button className="mt-4 px-6 py-2  bg-[#fde58a] text-black rounded-md hover:bg-accent-hover transition">
    //       ¡Inscríbete Ahora!
    //     </button>
    //   </div>
    //   <div>
    //     <Image
    //       src="/heroImage.png"
    //       alt="Hero Image"
    //       width={500}
    //       height={300}
    //       className="rounded-lg shadow-lg mt-8"
    //     />
    //   </div>
    // </section>
  )
}
