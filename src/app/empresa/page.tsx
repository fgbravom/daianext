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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section id="about" className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sobre Daia Systems
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Daia Systems SpA se creó para responder a las necesidades tecnológicas específicas de las plantas frutícolas.
            Estamos convencidos que hoy en día, los sistemas de información son una parte clave de los procesos productivos
            de cada empresa y el buen diseño de estos, tal como su correcto manejo es esencial a su éxito.
          </p>
          <p className="text-xl italic text-[#0057B8] font-medium max-w-2xl mx-auto">
            &ldquo;Simplemente, eficiente&rdquo;
          </p>
        </section>

        {/* About Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra empresa</h2>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              Gracias a nuestra <strong>experiencia en este rubro</strong>, creamos herramientas digitales
              para modernizar y agilizar la gestión de los sitios de producción.
            </p>
            <p>
              Nuestra finalidad es ayudarles a manejar las diferentes facetas de sus negocios mediante{' '}
              <strong>herramientas flexibles y fácil de utilizar</strong>, entregándole informaciones claves
              para acompañarle en su toma de decisión y lograr sus objetivos.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada decisión y desarrollo en Daia Systems
            </p>
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
        </section>


      </div>
    </div>
  )
}