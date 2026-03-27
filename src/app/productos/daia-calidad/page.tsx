import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, ShieldAlert, Zap, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import FeatureCard from '@/components/ui/FeatureCard'
import BenefitCard from '@/components/ui/BenefitCard'
import ProductSlider from '@/components/ui/ProductSlider'

export const metadata: Metadata = {
  title: 'Daia Calidad - Sistema de gestión de calidad frutícola | Daia Systems',
  description: 'Sistema especializado en gestión de calidad para la industria frutícola. Control de procesos, cumplimiento normativo y certificaciones de calidad.',
}

export default function DaiaCalidadPage() {
  const features = [
    'Trazabilidad de calidad',
    'Control de puntos críticos',
    'Gestión de no conformidades',
    'Dashboards de calidad en tiempo real'
  ]

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Cumplimiento garantizado',
      description: 'Asegura el cumplimiento de todas las normativas y estándares de calidad nacionales e internacionales.'
    },
    {
      icon: ShieldAlert,
      title: 'Reducción de riesgos',
      description: 'Identifica y mitiga riesgos de calidad antes de que afecten tu producción y exportación.'
    },
    {
      icon: Zap,
      title: 'Eficiencia operacional',
      description: 'Optimiza los procesos de control de calidad reduciendo tiempos y costos operacionales.'
    },
    {
      icon: Award,
      title: 'Certificaciones ágiles',
      description: 'Facilita la obtención y mantenimiento de certificaciones de calidad con documentación automática.'
    }
  ]

  const slides = [
    {
      src: '/daiacalidad.png',
      alt: 'Daia Calidad - Dashboard de control de calidad',
      caption: 'Dashboard de Calidad',
      desc: 'Panel de control con indicadores de calidad en tiempo real para toda la operación.'
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
          <span className="text-[#0057B8] font-medium">Daia Calidad</span>
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
              Control de Calidad
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Daia Calidad
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Sistema especializado en gestión de calidad para la industria frutícola con control integral de procesos y cumplimiento normativo.
            </p>
            <Link href="/contacto?interes=daia-calidad">
              <Button variant="primary" size="lg">
                Solicitar información
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/daiacalidad.png"
                alt="Daia Calidad Dashboard"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-7">Beneficios para tu empresa</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para asegurar la calidad de tu producción?</h2>
          <p className="text-lg mb-8 opacity-80">
            Descubre cómo Daia Calidad puede garantizar los más altos estándares de calidad en tu operación.
          </p>
          <Link href="/contacto?interes=daia-calidad">
            <Button variant="white" size="lg">
              Agendar reunión
            </Button>
          </Link>
        </section>

      </div>
    </div>
  )
}
