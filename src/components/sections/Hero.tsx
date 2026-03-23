'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GradientButton from '@/components/ui/GradientButton'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InteractiveDashboard from '@/components/sections/InteractiveDashboard'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  return (
    <section ref={ref} className="relative flex items-center overflow-hidden bg-white">
      {/* Fondo con imagen con efecto parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 opacity-80"
      >
        {/* Imagen para móvil */}
        <motion.div
          className="w-full h-full md:hidden relative"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          <Image
            src="/FondoHeroMobile.png"
            alt="Fondo Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </motion.div>
        {/* Imagen para desktop */}
        <motion.div
          className="hidden md:block w-full h-full relative"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          <Image
            src="/FondoHero.png"
            alt="Fondo Hero"
            fill
            priority
            className="object-contain"
            sizes="100vw"
            quality={85}
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-full object-contain relative z-10 py-24 md:py-32 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          {/* Título principal centrado */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 text-center max-w-6xl"
          >
             Tecnología de {' '}<span className="text-[#0057B8]">trazabilidad</span>{' '} para la {' '}
            <span className="text-[#0057B8]">agroindustria</span>{' '}
            frutícola.
          </motion.h1>

          {/* Image Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-7xl py-8"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0057B8]/10 to-[#003865]/10 p-2 pb-2">
              <InteractiveDashboard />
            </div>
          </motion.div>

          {/* Descripción debajo del video */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-black text-center max-w-4xl leading-relaxed"
          >
            Sistemas que se integran para obtener la trazabilidad completa de la fruta, desde la
            {' '}<strong className="text-black">recepción</strong>{' '} en la planta,
            hasta su {' '}<strong className="text-black">exportación</strong>.{' '}
            ERP, HUB, AGENTE para líneas de proceso, integraciones con otros sistemas, integración con maquinaria, sensores de temperatura y más.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-black text-center max-w-4xl leading-relaxed"
          >Tu fruta, bajo control.</motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link href="/productos">
              <GradientButton size="lg" className="group whitespace-nowrap">
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                />
                Nuestros productos
              </GradientButton>
            </Link>

            {/* <GradientButton size="lg" className="group whitespace-nowrap">
              <Play size={20} className="group-hover:animate-pulse flex-shrink-0" />
              Ver demostración
            </GradientButton> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 grid grid-cols-3 gap-12 max-w-2xl w-full"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057B8]">10+</div>
              <div className="text-sm text-gray-600">Plantas de procesos activas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057B8]">Total</div>
              <div className="text-sm text-gray-600">Integración con tu maquinaria</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0057B8]">24/7</div>
              <div className="text-sm text-gray-600">Soporte adaptable</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}