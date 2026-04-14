import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { products } from '@/data/content'

export const metadata: Metadata = {
  title: 'Productos - Software para la industria frutícola | Daia Systems',
  description: 'Descubre nuestras soluciones tecnológicas: Daia ERP, Daia HUB, Daia Calidad, Daia Agent y Daia Instruments para la industria frutícola y agroindustrial.',
}

const productImages: Record<string, string> = {
  'daia-erp': '/daiaerp.png',
  'daia-hub': '/daiahub.png',
  'daia-calidad': '/daiacalidad.png',
  'daia-agent': '/daiaagent/operador_con_datos.png',
  'daia-instruments': '/daiainstruments/Imagen2.png',
}

const productCategories: Record<string, string> = {
  'daia-erp': 'Gestión Frutícola',
  'daia-hub': 'Logística de Exportación',
  'daia-calidad': 'Control de Calidad',
  'daia-agent': 'Middleware Industrial',
  'daia-instruments': 'Monitoreo IoT',
}

export default function ProductosPage() {
  const total = products.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">
            Suite de productos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Cinco herramientas construidas para la operación frutícola: desde la línea de proceso hasta el despacho al exterior.
          </p>
        </div>

        {/* Products Grid — 6 cols: cada card col-span-2; si son 5 la 4ta arranca en col-start-2 → centradas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-7 mb-16">
          {products.map((product, index) => {
            const isLastPairFirst = total === 5 && index === 3
            return (
              <div
                key={product.id}
                className={[
                  'group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md',
                  'hover:shadow-xl hover:-translate-y-1.5 transition-all duration-250 flex flex-col',
                  'lg:col-span-2',
                  isLastPairFirst ? 'lg:col-start-2' : '',
                ].join(' ')}
              >
                {/* Browser mockup frame */}
                <div className="flex-shrink-0 overflow-hidden">
                  <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <div className="flex-1 mx-2 bg-white rounded border border-gray-200 px-2 py-0.5 text-[10px] text-gray-400 truncate">
                      daia.cl/{product.id}
                    </div>
                  </div>
                  <div className="relative aspect-video bg-[#EEF3FA]">
                    <Image
                      src={productImages[product.id] ?? '/daiaerp.png'}
                      alt={`${product.name} Dashboard`}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-bold text-white bg-[#0057B8]/85 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {productCategories[product.id]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{product.description}</p>

                  <Link href={`/productos/${product.id}`} className="block">
                    <Button variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                      Ver detalles
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿No estás seguro cuál elegir?</h2>
          <p className="text-lg mb-8 text-white/75">
            Cuéntanos cómo opera tu planta y te decimos exactamente qué necesitas.
          </p>
          <div className="flex justify-center">
            <Link href="/contacto?interes=consultoria">
              <Button variant="white" size="lg" className="font-semibold shadow-lg">
                Solicitar consultoría gratuita
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
