import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { clients } from '@/data/content'
import Button from '@/components/ui/Button'
import { TrendingDown, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Clientes - Empresas que confían en Daia Systems',
  description: 'Conoce las empresas líderes de la industria frutícola que han transformado sus operaciones con nuestras soluciones tecnológicas.',
}

export default function ClientesPage() {
  const stats = [
    { number: '10+', label: 'Empresas Clientes' },
    { number: '40M+', label: 'Toneladas Procesadas' },
    { number: '99.9%', label: 'Uptime del Sistema' }
  ]

  const beneficios = [
    {
      icon: TrendingDown,
      title: 'Menos Errores',
      description: 'Reducción significativa en errores de inventario y trazabilidad'
    },
    {
      icon: Zap,
      title: 'Mayor Velocidad',
      description: 'Procesos más ágiles desde recepción hasta exportación'
    },
    {
      icon: TrendingUp,
      title: 'Mejor Control',
      description: 'Visibilidad completa y toma de decisiones en tiempo real'
    }
  ]

  const industrias = [
    { emoji: '🍒', label: 'Cerezas' },
    { emoji: '🍎', label: 'Manzanas' },
    { emoji: '🫐', label: 'Ciruelas' },
    { emoji: '🍐', label: 'Peras' },
    { emoji: '🍇', label: 'Uvas' },
    { emoji: '🍊', label: 'Naranjas' },
    { emoji: '🍋', label: 'Limones' },
    { emoji: '🥑', label: 'Paltas' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Trazabilidad sin fronteras
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas líderes de la industria frutícola que han transformado sus operaciones
            con nuestras soluciones tecnológicas.
          </p>
        </div>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-md">
              <div className="text-4xl font-bold text-[#0057B8] mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Clients Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Empresas que confían en nosotros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="h-24 flex items-center justify-center mb-3">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={128}
                      height={80}
                      className="max-h-20 max-w-32 object-contain transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Industrias que atendemos
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Nuestro foco principal está en <strong>cerezas, manzanas, ciruelas y uvas</strong>, donde Daia ERP ha sido especialmente diseñado y optimizado para gestionar los desafíos únicos de estos cultivos. También hemos trabajado exitosamente con peras, cítricos y paltas, logrando resultados excepcionales en la gestión y trazabilidad de cada especie.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industrias.map((item, index) => (
              <div key={index} className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios Comprobados */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Beneficios Comprobados</h2>
            <p className="text-lg opacity-90">
              Mejoras tangibles que nuestros clientes experimentan día a día
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {beneficios.map((b, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-200">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <b.icon className="text-white" size={22} />
                </div>
                <div className="text-lg font-semibold mb-2">{b.title}</div>
                <div className="text-sm opacity-90 leading-relaxed">{b.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a las empresas líderes que ya están transformando sus operaciones con Daia Systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?interes=demostracion">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0057B8]">
                Solicitar demo personalizada
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
