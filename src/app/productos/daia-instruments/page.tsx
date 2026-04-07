import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, MessageCircle, Cloud, MonitorPlay, Lock, Settings2, BarChart2, ScanLine, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import FeatureCard from '@/components/ui/FeatureCard'
import BenefitCard from '@/components/ui/BenefitCard'
import ProductSlider from '@/components/ui/ProductSlider'

export const metadata: Metadata = {
  title: 'Daia Instruments - Termometría con alarmas en tiempo real | Daia Systems',
  description: 'Plataforma IoT de monitoreo de temperatura con sensores inalámbricos para la agroindustria. Alarmas por WhatsApp, trazabilidad de folios, gráficos exportables y perfiles de usuario.',
}

export default function DaiaInstrumentsPage() {
  const features = [
    'Monitoreo de temperatura en tiempo real desde cualquier dispositivo',
    'Alarmas automáticas por WhatsApp sin apps adicionales',
    'Trazabilidad de folios con historial de entrada y salida',
    'Exportación de datos históricos a CSV',
    'Perfiles de usuario con niveles de acceso diferenciados',
    'Configuración de umbrales y contactos de alerta por sensor',
    'Gráficos integrados para detectar anomalías de temperatura',
    'Sensores inalámbricos sin instalaciones invasivas',
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Instalación rápida y de bajo costo',
      description: 'Sin necesidad de cableado ni instalaciones invasivas. Nuestros sensores inalámbricos se instalan en minutos y se conectan de forma inmediata a la plataforma.'
    },
    {
      icon: MessageCircle,
      title: 'Alarmas y reportes por WhatsApp',
      description: 'Recibe alertas en tiempo real directamente en tu teléfono cuando los valores superen los umbrales definidos. Sin apps adicionales, solo WhatsApp.'
    },
    {
      icon: Cloud,
      title: 'Plataforma cloud siempre disponible',
      description: 'Accede a todos tus sensores desde cualquier dispositivo, en cualquier momento. Una plataforma profesional disponible desde tu computador o celular.'
    }
  ]

  const funcionalidades = [
    {
      icon: MonitorPlay,
      title: 'Tablero central',
      items: [
        'Vista rápida de todos los sensores conectados',
        'Definición de umbrales y contacto de emergencia por dispositivo',
        'Actualización en vivo de valores actuales',
        'Exportación de datos a CSV',
      ]
    },
    {
      icon: Lock,
      title: 'Acceso controlado',
      items: [
        'Diferentes perfiles de usuarios para manejar niveles de acceso',
        'Plataforma profesional disponible desde computador o celular',
        'Gestión segura de usuarios y permisos',
      ]
    },
    {
      icon: Settings2,
      title: 'Configuración sencilla',
      items: [
        'Nombre personalizado para cada sensor',
        'Valor actual en vivo',
        'Configuración de umbrales y contactos de alerta',
        'Gestión de los folios almacenados',
      ]
    },
    {
      icon: BarChart2,
      title: 'Gráficos y datos exportables',
      items: [
        'Gráficos integrados para detectar anomalías',
        'Lectura simplificada con umbrales a la vista',
        'Histórico de temperatura exportable',
      ]
    },
  ]

  const slides = [
    {
      src: '/daiainstruments/Imagen1.png',
      alt: 'Pantalla de acceso a Daia Instruments',
      caption: 'Acceso controlado',
      desc: 'Plataforma profesional con login seguro y perfiles de usuario.'
    },
    {
      src: '/daiainstruments/Imagen2.png',
      alt: 'Tablero central con todos los sensores',
      caption: 'Tablero central',
      desc: 'Vista en tiempo real de todos los sensores conectados con exportación a CSV.'
    },
    {
      src: '/daiainstruments/Imagen3.png',
      alt: 'Configuración de sensor con umbrales y folios',
      caption: 'Configuración sencilla',
      desc: 'Umbrales de alarma, contactos de alerta por WhatsApp y gestión de folios por dispositivo.'
    },
    {
      src: '/daiainstruments/Imagen4.png',
      alt: 'Gráfico histórico de temperatura',
      caption: 'Gráficos y datos exportables',
      desc: 'Histórico de temperatura con umbrales a la vista para detectar anomalías.'
    },
    {
      src: '/daiainstruments/Imagen5.png',
      alt: 'Trazabilidad de folios',
      caption: 'Trazabilidad de folios',
      desc: 'Historial de entrada y salida por folio con estado actual en cada cámara o túnel.'
    }
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
          <span className="text-[#0057B8] font-medium">Daia Instruments</span>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-flex items-center text-xs font-bold text-[#0057B8] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Monitoreo IoT
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 leading-tight">
              Daia Instruments
            </h1>
            <p className="text-xl text-[#0057B8] font-semibold mb-5">
              Termometría con alarmas en tiempo real
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Plataforma de monitoreo IoT con sensores inalámbricos diseñada para la agroindustria.
              Sin cableado, sin apps adicionales, con alertas directas a WhatsApp.
            </p>
            <Link href="/contacto?interes=daia-instruments">
              <Button variant="primary" size="lg">
                Solicitar información
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/daiainstruments/Imagen2.png"
                alt="Daia Instruments - Tablero central de sensores"
                width={600}
                height={400}
                className="w-full h-full object-cover"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">La plataforma en acción</h2>
            <p className="text-gray-500 text-sm mb-8">Capturas reales de Daia Instruments. Haz clic en cualquier imagen para ampliarla.</p>
            <ProductSlider slides={slides} />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Por qué elegirnos</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-7">Beneficios para tu operación</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </section>

        {/* Funcionalidades detalladas */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Módulos</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-7">Todo lo que incluye</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {funcionalidades.map((func, index) => (
                <div key={index} className="group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-[#0057B8] rounded-lg flex items-center justify-center group-hover:bg-[#003865] transition-colors duration-200">
                      <func.icon className="text-white" size={18} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{func.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {func.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="text-[#0057B8] flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trazabilidad de folios - full width */}
            <div className="mt-5 group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#0057B8] rounded-lg flex items-center justify-center group-hover:bg-[#003865] transition-colors duration-200">
                  <ScanLine className="text-white" size={18} />
                </div>
                <h3 className="text-base font-bold text-gray-900">Trazabilidad de folios</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Busca folios y revisa los horarios de entrada y salida',
                  'Seguimiento de cuántas veces fue ingresado y dónde está actualmente',
                  'Ingreso de folios desde dispositivos móviles de forma sencilla',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-[#0057B8] flex-shrink-0 mt-0.5" size={14} />
                    <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Sabes exactamente qué temperatura tiene tu cámara ahora mismo?</h2>
          <p className="text-lg mb-8 opacity-80">
            Instala Daia Instruments en minutos y recibe alertas en WhatsApp antes de que un problema afecte tu producción.
          </p>
          <Link href="/contacto?interes=daia-instruments">
            <Button variant="white" size="lg">
              Agendar reunión
            </Button>
          </Link>
        </section>

      </div>
    </div>
  )
}
