import { Metadata } from 'next'
import { values } from '@/data/content'
import BenefitCard from '@/components/ui/BenefitCard'

export const metadata: Metadata = {
  title: 'Empresa - Sobre Daia Systems | Líderes en tecnología frutícola',
  description: 'Conoce más sobre Daia Systems, nuestra historia, valores y compromiso con la innovación en la industria frutícola chilena.',
}

export default function EmpresaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      {/* Hero — centrado, consistente con el resto del sitio */}
      <section className="pt-20 pb-8 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-[#0057B8] text-xs font-bold uppercase tracking-widest mb-4">Sobre nosotros</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900">
            Tecnología hecha para la fruta
          </h1>
          <p className="text-2xl italic text-[#0057B8] font-medium mb-6">&ldquo;Simplemente, eficiente&rdquo;</p>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Daia Systems se creó para responder a las necesidades tecnológicas específicas de las plantas
            frutícolas de exportación.
          </p>
        </div>
      </section>

      {/* Cuerpo */}
      <section className="pt-4 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-gray-700 text-lg leading-relaxed">
              Nacimos dentro de la industria frutícola, no desde una oficina de desarrollo. <strong>Conocemos los tiempos de temporada</strong>, <strong>la presión del despacho</strong>, <strong>los requerimientos de exportación</strong> y lo que significa perder trazabilidad en medio de una línea de proceso.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Por esto cada herramienta que desarrollamos responde a <strong>problemas reales de plantas reales</strong>. No adaptamos software genérico, construimos desde la operación hacia arriba, para que el sistema se ajuste a tu trabajo y no al revés.
            </p>
          </div>
        </div>
      </section>

      {/* Values — título centrado con eyebrow label */}
      <section id="values" className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">
              Nuestra cultura
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Valores</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <BenefitCard
                key={value.id}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
