import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Route, LayoutDashboard, BarChart2, Package, Plug, Cpu } from 'lucide-react'
import Button from '@/components/ui/Button'
import FeatureCard from '@/components/ui/FeatureCard'
import BenefitCard from '@/components/ui/BenefitCard'
import ProductSlider from '@/components/ui/ProductSlider'

export const metadata: Metadata = {
  title: 'Daia ERP - Gestión integral para planta de proceso | Daia Systems',
  description: 'Gestión integral para planta de proceso de fruta fresca. Trazabilidad desde recepción hasta despacho, control de materiales, etiquetado y más.',
}

export default function DaiaERPPage() {
  const features = [
    'Trazabilidad desde recepción en planta hasta despacho',
    'Gestión de materiales con inventario valorizado (FIFO, PMP)',
    'Módulo de calidad con muestreo en recepción y despacho',
    'Etiquetado compatible con Zebra, Bixolon y Datamax',
    'Panel Piloto para supervisión de línea en tiempo real',
    'Gestión de envases por productor ',
    'Módulo de mantenimiento preventivo y correctivo',
    'Integración con software y hardware externo. SAP, Softland, Odoo, Tomra, Aweta, Unitec, etc.'
  ]

  const benefits = [
    {
      icon: Route,
      title: 'Trazabilidad total',
      description: 'Llevamos la trazabilidad de tus productos desde la recepción hasta su despacho. Siempre tendrás información segura y no alterable.'
    },
    {
      icon: LayoutDashboard,
      title: 'Plataforma centralizada',
      description: 'Nuestra plataforma centraliza los datos de todos tus procesos con una interfaz simple y amigable para un acceso sencillo.'
    },
    {
      icon: BarChart2,
      title: 'Reportes personalizables',
      description: 'Diseñamos reportes personalizables y actualizables para presentar tus propios indicadores y tomar decisiones basadas en datos.'
    },
    {
      icon: Package,
      title: 'Gestión de materiales integrada',
      description: 'Una gestión de materiales vinculada con tu producción, para automatizar rebajas masivas por consumo con reportes exportables para integración contable.'
    },
    {
      icon: Plug,
      title: 'Integración con tu ecosistema',
      description: 'Interfaces de automatización compatibles con los líderes del mercado: Tomra, Aweta, Unitec, SAP B1, Softland, HubCrop, Odoo y más.'
    }
  ]

  const slides = [
    {
      src: '/daiaerp/DaiaERPinicio.png',
      alt: 'Daia ERP - Pantalla de inicio',
      caption: 'Pantalla de Inicio',
      desc: 'Acceso unificado a todos los módulos del sistema desde el menú principal.'
    },
    {
      src: '/daiaerp/ordendeproceso.png',
      alt: 'Daia ERP - Orden de proceso',
      caption: 'Orden de Proceso',
      desc: 'Gestión completa de órdenes de proceso para el control de operaciones de planta.'
    },
    {
      src: '/daiaerp/ordendecompra.png',
      alt: 'Daia ERP - Orden de compra',
      caption: 'Orden de Compra',
      desc: 'Administración de órdenes de compra integrada al flujo de abastecimiento.'
    },
    {
      src: '/daiaerp/RolesUsuarios.png',
      alt: 'Daia ERP - Roles y usuarios',
      caption: 'Roles y Usuarios',
      desc: 'Control de acceso por roles para una gestión segura y ordenada del sistema.'
    },
    {
      src: '/daiaerp/diseñadoretiquetas.png',
      alt: 'Daia ERP - Diseñador de etiquetas',
      caption: 'Diseñador de Etiquetas',
      desc: 'Herramienta integrada para crear y personalizar etiquetas de exportación.'
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
          <span className="text-[#0057B8] font-medium">Daia ERP</span>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-flex items-center text-xs font-bold text-[#0057B8] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Sistema de Gestión Frutícola
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Daia ERP
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Gestión integral para planta de proceso de fruta fresca. El corazón de la gestión empresarial frutícola.
            </p>
            <Link href="/contacto?interes=daia-erp">
              <Button variant="primary" size="lg">
                Solicitar información
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/daiaerp.png"
                alt="Daia ERP Dashboard"
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
            <p className="text-gray-500 text-sm mb-8">Haz clic en cualquier imagen para verla a tamaño completo.</p>
            <ProductSlider slides={slides} />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Por qué elegirnos</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-7">Beneficios para tu empresa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Conectividad</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Integración con tu ecosistema</h2>
            <p className="text-gray-500 text-sm mb-8">Daia ERP se conecta nativamente con los líderes del mercado frutícola. Sin adaptaciones costosas, sin pérdida de datos.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: 'Tomra Sizer', category: 'Clasificador' },
                { label: 'Aweta', category: 'Clasificador' },
                { label: 'Unitec', category: 'Clasificador' },
                { label: 'SAP Business One', category: 'ERP' },
                { label: 'Softland', category: 'ERP' },
                { label: 'Odoo', category: 'ERP' },
                { label: 'HubCrop', category: 'Agrícola' },
                { label: 'Zebra / Bixolon', category: 'Etiquetado' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-150">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Cpu className="text-[#0057B8]" size={16} />
                  </div>
                  <span className="block text-sm font-semibold text-gray-900">{item.label}</span>
                  <span className="block text-xs text-gray-400 mt-0.5">{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Tu planta ya usa Tomra, SAP o Softland. Daia ERP se conecta con todos.</h2>
          <p className="text-lg mb-8 opacity-80">
            Trazabilidad completa desde la recepción hasta el despacho, integrada con el hardware y software que ya tienes.
          </p>
          <Link href="/contacto?interes=daia-erp">
            <Button variant="white" size="lg">
              Agendar reunión
            </Button>
          </Link>
        </section>

      </div>
    </div>
  )
}
