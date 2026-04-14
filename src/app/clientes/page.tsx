import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { clients } from '@/data/content'
import Button from '@/components/ui/Button'
import BenefitCard from '@/components/ui/BenefitCard'
import { TrendingDown, Zap, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Clientes - Empresas que confían en Daia Systems',
  description: 'Conoce las empresas líderes de la industria frutícola que han transformado sus operaciones con nuestras soluciones tecnológicas.',
}

export default function ClientesPage() {
  const stats = [
    { number: '10+', label: 'Empresas clientes' },
    { number: '40M+', label: 'Kg procesados' },
    { number: '100%', label: 'Tiempo real' },
  ]

  const beneficios = [
    {
      icon: TrendingDown,
      title: 'Menos Errores',
      description: 'Sin ingreso manual de datos, los errores de inventario y trazabilidad desaparecen en la fuente. La información llega directamente desde la línea al sistema.',
    },
    {
      icon: Zap,
      title: 'Mayor Velocidad',
      description: 'Recepción, proceso y despacho sin papel, sin re-tipeo, sin esperar que alguien consolide datos al final del turno.',
    },
    {
      icon: TrendingUp,
      title: 'Mejor Control',
      description: 'Cada lote, cada bin, cada caja tiene su historial. En una auditoría, en un reclamo o en una reunión, la información está ahí.',
    },
  ]

  const industrias = [
    'Cerezas', 'Manzanas', 'Ciruelas', 'Uvas',
    'Peras', 'Naranjas', 'Limones', 'Paltas',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      {/* Hero */}
      <section className="pt-20 pb-8 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-[#0057B8] text-xs font-bold uppercase tracking-widest mb-4">
            Nuestros clientes
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900">
            Empresas que confían<br className="hidden md:block" /> en Daia Systems
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Líderes de la agroindustria frutícola que han transformado sus operaciones
            con tecnología hecha para la fruta.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="text-4xl font-bold text-[#0057B8] mb-1">{stat.number}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">
              Cartera activa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Presentes en la agroindustria global
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl p-6 h-32 flex items-center justify-center border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={72}
                  className="max-h-16 max-w-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alianza tecnológica */}
      <section className="py-10 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">
              Alianza tecnológica
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trabajamos junto a los mejores
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-6 h-32 w-48 flex items-center justify-center border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <Image
                src="/clientes/logo-tomra.avif"
                alt="Tomra logo"
                width={120}
                height={72}
                className="max-h-16 max-w-28 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">
            Especialización
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Industrias que atendemos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Nuestro foco principal está en{' '}
            <strong>cerezas, manzanas, ciruelas y uvas</strong>, donde Daia ERP ha sido
            especialmente diseñado para gestionar los desafíos únicos de estos cultivos.
            También trabajamos con peras, cítricos y paltas, en general, con cualquier
            especie de fruta fresca producida para exportar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industrias.map((item) => (
              <span
                key={item}
                className="px-5 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium text-sm shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">
              Resultados comprobados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Lo que nuestros clientes experimentan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((b, index) => (
              <BenefitCard
                key={index}
                title={b.title}
                description={b.description}
                icon={b.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Únete a las empresas que ya están transformando sus operaciones con Daia Systems.
            </p>
            <Link href="/contacto?interes=demostracion">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#0057B8]"
              >
                Solicitar demo personalizada
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
