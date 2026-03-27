import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Ship, Bell, TrendingUp, FileText, BarChart2, Landmark } from 'lucide-react'
import Button from '@/components/ui/Button'
import FeatureCard from '@/components/ui/FeatureCard'
import BenefitCard from '@/components/ui/BenefitCard'
import ProductSlider from '@/components/ui/ProductSlider'

export const metadata: Metadata = {
  title: 'Daia HUB - Plataforma de exportación e importación | Daia Systems',
  description: 'Plataforma que simplifica y optimiza cada aspecto de la exportación e importación de fruta. Centralización logística, comunicación transparente y gestión documental.',
}

export default function DaiaHubPage() {
  const features = [
    'Seguimiento en tiempo real de embarques',
    'Portal de clientes integrado',
    'Reportes de rentabilidad por embarque',
    'Integración con agentes de carga'
  ]

  const benefits = [
    {
      icon: Ship,
      title: 'Logística simplificada',
      description: 'Centraliza todas las operaciones logísticas en una sola plataforma, reduciendo errores y mejorando la eficiencia.'
    },
    {
      icon: Bell,
      title: 'Comunicación eficiente',
      description: 'Mantén a todos los stakeholders informados en tiempo real con comunicación transparente y automatizada.'
    },
    {
      icon: TrendingUp,
      title: 'Control financiero',
      description: 'Optimiza la rentabilidad de cada embarque con análisis financieros detallados y proyecciones precisas.'
    },
    {
      icon: FileText,
      title: 'Gestión documental',
      description: 'Automatiza la generación y gestión de documentos de exportación, cumpliendo con todas las normativas.'
    }
  ]

  const integrations = [
    {
      icon: Ship,
      label: 'Agentes de Carga',
      description: 'Conecta directamente con tus agentes de carga preferidos'
    },
    {
      icon: BarChart2,
      label: 'Sistemas ERP',
      description: 'Integración nativa con Daia ERP y otros sistemas'
    },
    {
      icon: Landmark,
      label: 'Sistemas Bancarios',
      description: 'Conecta con bancos para gestión financiera automática'
    }
  ]

  const slides = [
    {
      src: '/daiahub.png',
      alt: 'Daia HUB Dashboard - Vista principal',
      caption: 'Dashboard Principal',
      desc: 'Vista centralizada de todos los embarques activos, documentos y estado logístico en tiempo real.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#0057B8] transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-[#0057B8] transition-colors">Productos</Link>
          <span>/</span>
          <span className="text-[#0057B8] font-medium">Daia HUB</span>
        </nav>

        {/* Back button */}
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0057B8] transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Volver a productos</span>
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-flex items-center text-xs font-bold text-[#0057B8] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Plataforma de Exportación
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Daia HUB
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Plataforma que simplifica y optimiza cada aspecto de la exportación e importación de fruta.
            </p>
            <Link href="/contacto?interes=daia-hub">
              <Button variant="primary" size="lg">
                Solicitar información
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/daiahub.png"
                alt="Daia HUB Dashboard"
                width={600}
                height={400}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Funcionalidades</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-7">Características principales</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} text={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Slider */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Vista del sistema</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Capturas del sistema</h2>
            <p className="text-gray-500 text-sm mb-8">Haz clic en la imagen para verla a tamaño completo.</p>
            <ProductSlider slides={slides} />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Por qué elegirnos</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-7">Beneficios para tu operación</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Conectividad</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-7">Integración completa</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {integrations.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-12 h-12 bg-[#0057B8] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para simplificar tu logística de exportación?</h2>
          <p className="text-lg mb-8 opacity-80">
            Descubre cómo Daia HUB puede optimizar cada embarque y maximizar tu rentabilidad.
          </p>
          <Link href="/contacto?interes=daia-hub">
            <Button variant="white" size="lg">
              Agendar reunión
            </Button>
          </Link>
        </section>

      </div>
    </div>
  )
}
