import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
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

const comparisonData: Record<string, { label: string; items: string[] }> = {
  'daia-erp': {
    label: 'Daia ERP',
    items: ['Productores frutícolas', 'Empresas con procesos de packing', 'Control de inventarios complejos', 'Trazabilidad completa del producto'],
  },
  'daia-hub': {
    label: 'Daia HUB',
    items: ['Empresas exportadoras', 'Comercializadoras de fruta', 'Optimización logística', 'Gestión de múltiples embarques'],
  },
  'daia-calidad': {
    label: 'Daia Calidad',
    items: ['Control de calidad en packing', 'Gestión de certificaciones', 'Cumplimiento de normativas', 'Auditorías y reportes de calidad'],
  },
  'daia-agent': {
    label: 'Daia Agent',
    items: ['Líneas de clasificación automatizadas', 'Integración con Tomra, Unitec, Aweta', 'Etiquetado automático ZPL', 'Control de paletizado en línea'],
  },
  'daia-instruments': {
    label: 'Daia Instruments',
    items: ['Plantas con cámaras de frío', 'Monitoreo de temperatura crítica', 'Sin cableado ni instalaciones', 'Alertas inmediatas por WhatsApp'],
  },
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">Suite de productos</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas diseñadas específicamente para la industria frutícola,
            desde la producción hasta la exportación.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-250 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video bg-gray-50 border-b border-gray-100 overflow-hidden flex-shrink-0">
                <Image
                  src={productImages[product.id] ?? '/daiaerp.png'}
                  alt={`${product.name} Dashboard`}
                  fill
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-bold text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {productCategories[product.id]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-[#0057B8] flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/productos/${product.id}`} className="block">
                  <Button variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                    Ver detalles
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Guía de selección</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">¿Cuál es el mejor para tu empresa?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => {
                const data = comparisonData[product.id]
                if (!data) return null
                return (
                  <div key={product.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-blue-100 transition-all duration-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#0057B8]" />
                      <h3 className="font-bold text-[#0057B8]">{data.label}</h3>
                    </div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Ideal para:</p>
                    <ul className="space-y-2">
                      {data.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿No estás seguro cuál elegir?</h2>
          <p className="text-lg mb-8 opacity-80">
            Nuestro equipo de especialistas puede ayudarte a encontrar la solución perfecta para tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?interes=consultoria">
              <Button variant="white" size="lg">
                Solicitar consultoría gratuita
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0057B8]">
                Contactar ventas
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
