'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { clients } from '@/data/content'

export default function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-[#0057B8]">clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ellos han confiado sus procesos productivos a Daia Systems. 
            Cada año, nuestro sistema asegura la trazabilidad de millones de cajas de fruta fresca y gestiona el análisis de cientos de millones de eventos productivos para entregar a nuestros clientes los datos que necesitan para manejar sus negocios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center hover:shadow-md transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={112}
                  height={80}
                  className="max-h-20 max-w-28 object-contain transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            ¿Quieres ser parte de nuestros casos de éxito?{' '}
            <a
              href="/contacto"
              className="text-[#0057B8] hover:text-[#003865] font-medium underline"
            >
              Contáctanos
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}