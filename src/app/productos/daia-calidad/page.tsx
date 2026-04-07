import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, ShieldAlert, Zap, Award, ClipboardList, AlertTriangle, FileCheck } from 'lucide-react'
import Button from '@/components/ui/Button'
import FeatureCard from '@/components/ui/FeatureCard'
import BenefitCard from '@/components/ui/BenefitCard'

export const metadata: Metadata = {
  title: 'Daia Calidad - Sistema de gestión de calidad frutícola | Daia Systems',
  description: 'Sistema especializado en gestión de calidad para la industria frutícola. Muestreo en campo y planta, control de no conformidades, cumplimiento GlobalG.A.P. y certificaciones de calidad.',
}

export default function DaiaCalidadPage() {
  const features = [
    'Muestreo en recepción de campo y planta con formularios digitales',
    'Registro fotográfico de defectos y no conformidades',
    'Control de puntos críticos HACCP por proceso',
    'Dashboards de calidad en tiempo real por línea y productor',
    'Gestión de no conformidades con trazabilidad de resolución',
    'Compatibilidad con estándares GlobalG.A.P., BRC y USDA',
    'Reportes automáticos para auditorías de certificación',
    'Alertas en tiempo real ante parámetros fuera de rango',
  ]

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Cumplimiento garantizado',
      description: 'Asegura el cumplimiento de normativas nacionales e internacionales con registros digitales auditables en todo momento.'
    },
    {
      icon: ShieldAlert,
      title: 'Reducción de riesgos',
      description: 'Identifica y gestiona no conformidades antes de que afecten la producción o el embarque con alertas en tiempo real.'
    },
    {
      icon: Zap,
      title: 'Eficiencia operacional',
      description: 'Reemplaza formularios en papel por formularios digitales que se sincronizan automáticamente con el sistema.'
    },
    {
      icon: Award,
      title: 'Certificaciones ágiles',
      description: 'Facilita auditorías GlobalG.A.P., BRC y USDA con documentación automática y trazabilidad completa.'
    }
  ]

  const modules = [
    {
      name: 'Muestreo en Recepción',
      desc: 'Formularios digitales de muestreo para recepción de campo y planta. Registro de defectos, calibres, coloración y parámetros de calidad por lote.'
    },
    {
      name: 'Control de Procesos',
      desc: 'Puntos de control configurables en cada etapa del proceso. Registro de temperaturas, tiempos y condiciones con alertas automáticas fuera de rango.'
    },
    {
      name: 'No Conformidades',
      desc: 'Registro, clasificación y seguimiento de no conformidades con asignación de responsables, planes de acción y cierre documentado.'
    },
    {
      name: 'Dashboards de Calidad',
      desc: 'Indicadores en tiempo real por línea, turno y productor: tasa de rechazo, defectos frecuentes y evolución de calidad por temporada.'
    },
    {
      name: 'Muestreo en Despacho',
      desc: 'Control de calidad en el punto de despacho con verificación de calibre, color, embalaje y condiciones de temperatura antes de salida.'
    },
    {
      name: 'Reportes para Auditorías',
      desc: 'Generación automática de reportes de trazabilidad, calidad y conformidad normativos para auditorías GlobalG.A.P., BRC y USDA.'
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
              Sistema especializado en gestión de calidad frutícola: muestreo digital, control de puntos críticos, no conformidades y reportes listos para auditorías internacionales.
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

        {/* Modules Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Módulos</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-7">Módulos del sistema</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {modules.map((module, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border-l-4 border-l-[#0057B8] border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
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

        {/* Diferenciación con módulo de calidad de ERP */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Complementariedad</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Daia ERP ya tiene calidad. ¿Para qué Daia Calidad?</h2>
            <p className="text-gray-500 mb-7 leading-relaxed">
              Daia ERP incluye un módulo de calidad integrado a la operación de planta. Daia Calidad es un sistema independiente diseñado para empresas con procesos de calidad más exigentes, equipos de calidad dedicados o requisitos de certificación internacional.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: ClipboardList, title: 'Mayor profundidad', desc: 'Formularios de muestreo personalizados, registro fotográfico y flujos de no conformidades con múltiples responsables.' },
                { icon: AlertTriangle, title: 'Alertas avanzadas', desc: 'Configuración de alertas por parámetro, turno y línea con notificaciones automáticas al jefe de calidad.' },
                { icon: FileCheck, title: 'Listo para auditorías', desc: 'Reportes específicos para GlobalG.A.P., BRC y USDA generados automáticamente con toda la trazabilidad requerida.' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-10 h-10 bg-[#0057B8] rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Estás listo para tu próxima auditoría GlobalG.A.P.?</h2>
          <p className="text-lg mb-8 opacity-80">
            Digitaliza tus procesos de calidad y genera los reportes de certificación en minutos, no en días.
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
