'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              ¿Qué es{' '}
              <span className="text-[#0057B8]">Daia Systems</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Software construido desde adentro de la planta, no desde una oficina.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 flex flex-col items-center lg:items-start"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0057B8] rounded-full"></div>
                <span className="text-gray-700">Desarrollo de software agroindustrial</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0057B8] rounded-full"></div>
                <span className="text-gray-700">Tecnología de trazabilidad garantizada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0057B8] rounded-full"></div>
                <span className="text-gray-700">Integración e innovación continua</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#0057B8]/10 to-[#003865]/10 p-1">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/-eEXkq4BpOg"
                  title="¿Qué es Daia?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}