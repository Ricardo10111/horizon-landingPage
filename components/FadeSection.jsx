'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FadeSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // si quieres que se repita cada vez que entras/sales
    threshold: 0.2, // % visible para activar animación
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}
