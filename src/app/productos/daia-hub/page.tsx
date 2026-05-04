import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Ship, Bell, TrendingUp, FileText, BarChart2, Landmark, Truck, Globe } from 'lucide-react'
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
    'Seguimiento en tiempo real del estado de cada embarque',
    'Portal de clientes con acceso a documentos y reportes',
    'Liquidaciones y reportes de rentabilidad por embarque',
    'Generación automática de documentos de exportación',
    'Integración directa con agentes de carga y navieras',
    'Alertas automáticas ante cambios de estado logístico',
    'Gestión de contratos y condiciones de venta por cliente',
    'Trazabilidad documental desde packing hasta destino final',
  ]

  const benefits = [
    {
      icon: Ship,
      title: 'Logística centralizada',
      description: 'Centraliza todas las operaciones logísticas en una sola plataforma: embarques, documentos, agentes y navieras en un solo lugar.'
    },
    {
      icon: Bell,
      title: 'Comunicación transparente',
      description: 'Mantén a clientes, agentes y equipos internos informados en tiempo real con alertas automáticas ante cada cambio de estado.'
    },
    {
      icon: TrendingUp,
      title: 'Control financiero por embarque',
      description: 'Analiza la rentabilidad real de cada embarque con liquidaciones detalladas, costos asociados y proyecciones de resultado.'
    },
    {
      icon: FileText,
      title: 'Gestión documental automática',
      description: 'Genera y gestiona documentos de exportación (certificados, packing lists, BL) cumpliendo con normativas nacionales e internacionales.'
    }
  ]

  const modules = [
    {
      name: 'Embarques',
      desc: 'Creación y seguimiento de embarques desde la planta hasta el puerto de destino. Estado en tiempo real, contenedores, navieras y fechas clave.'
    },
    {
      name: 'Portal de Clientes',
      desc: 'Acceso diferenciado para cada cliente con visibilidad de sus embarques, documentos y reportes de liquidación.'
    },
    {
      name: 'Liquidaciones',
      desc: 'Cálculo automático de liquidaciones por embarque con detalle de costos, ventas, rentabilidad y exportación a Excel.'
    },
    {
      name: 'Documentación',
      desc: 'Generación y almacenamiento de documentos de exportación: packing list, certificados fitosanitarios, BL y más.'
    },
    {
      name: 'Alertas y Notificaciones',
      desc: 'Sistema de alertas configurables por evento: llegada al puerto, liberación de carga, cambio de estado de embarque.'
    },
    {
      name: 'Integración con ERP',
      desc: 'Conexión nativa con Daia ERP para sincronizar información de producción, calidad y despacho sin doble ingreso de datos.'
    },
  ]

  const integrations = [
    {
      icon: Truck,
      label: 'Agentes de Carga',
      description: 'Conexión directa con tus agentes de carga preferidos'
    },
    {
      icon: BarChart2,
      label: 'Daia ERP',
      description: 'Integración nativa con producción y despacho'
    },
    {
      icon: Landmark,
      label: 'Sistemas Bancarios',
      description: 'Gestión financiera y pago automático de costos'
    },
    {
      icon: Globe,
      label: 'Navieras',
      description: 'Seguimiento de contenedores y fechas en tiempo real'
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
              Plataforma que centraliza y simplifica cada aspecto de la exportación e importación de fruta: logística, documentación, clientes y rentabilidad en un solo lugar.
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
            <div className="grid md:grid-cols-4 gap-5">
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

        {/* Gallery Slider */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Vista del sistema</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Capturas del sistema</h2>
            <p className="text-sm text-gray-500 mb-7">Haz clic en <span className="text-[#0057B8]">cualquier imagen</span> para verla a tamaño completo.</p>
            <ProductSlider slides={[
              { src: '/hub/login.png', alt: 'Daia HUB - Login', caption: 'Acceso al sistema', desc: 'Ingreso seguro a la plataforma con credenciales diferenciadas por rol y empresa.' },
              { src: '/hub/home.png', alt: 'Daia HUB - Home', caption: 'Panel principal', desc: 'Vista general con resumen de embarques activos, alertas y métricas clave de la operación.' },
              { src: '/hub/DocumentosHome.png', alt: 'Daia HUB - Documentos Home', caption: 'Dashboard de documentos', desc: 'Vista informativa del estado de toda la documentación asociada a los embarques.' },
              { src: '/hub/reservaciones.png', alt: 'Daia HUB - Reservaciones', caption: 'Reservaciones', desc: 'Gestión de reservas de espacio en contenedores y coordinación con navieras.' },
              { src: '/hub/documentacion.png', alt: 'Daia HUB - Documentación', caption: 'Gestión documental', desc: 'Centralización y administración de documentos de exportación: packing list, certificados, BL y más.' },
              { src: '/hub/recursos.png', alt: 'Daia HUB - Recursos', caption: 'Recursos', desc: 'Administración de recursos logísticos y coordinación de equipos operativos.' },
            ]} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Cuánto te cuesta hoy no tener visibilidad sobre tus embarques?</h2>
          <p className="text-lg mb-8 opacity-80">
            Daia HUB centraliza tu operación exportadora: un solo lugar para embarques, documentos, clientes y rentabilidad.
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
