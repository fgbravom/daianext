'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/content'

export default function Products() {
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
            Nuestros <span className="text-[#0057B8]">productos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones frutícolas diseñadas para impulsar la eficiencia y
            calidad en cada fase de tu operación.
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <Link href={`/productos/${product.id}`} className="group block">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-xl">
                    <div className="aspect-video bg-gradient-to-br from-[#0057B8]/5 to-[#003865]/5 flex items-center justify-center p-8 relative">
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src={
                            product.id === 'daia-erp'
                              ? '/daiaerp.png'
                              : product.id === 'daia-hub'
                              ? '/daiahub.png'
                              : product.id === 'daia-agent'
                              ? '/daiaagent/operador_con_datos.png'
                              : product.id === 'daia-calidad'
                              ? '/daiacalidad.png'
                              : product.image ?? '/daiacalidad.png'
                          }
                          alt={`${product.name} Screenshot`}
                          width={500}
                          height={350}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="absolute inset-0 bg-[#0057B8]/0 group-hover:bg-[#0057B8]/5 transition-colors duration-300 rounded-2xl" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="space-y-6 text-center lg:text-left">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-center lg:items-start">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + featureIndex * 0.1,
                        }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-[#0057B8] rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <Link
                      href={`/productos/${product.id}`}
                      className="relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-[#0057B8] to-[#003865] hover:from-[#003865] hover:to-[#0057B8] text-white px-6 py-3 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Ver producto
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}