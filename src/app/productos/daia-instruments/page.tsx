import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, MessageCircle, Cloud, MonitorPlay, Lock, Settings2, BarChart2, ScanLine, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import BenefitCard from '@/components/ui/BenefitCard'
import ProductSlider from '@/components/ui/ProductSlider'

export const metadata: Metadata = {
  title: 'Daia Instruments - Termometría con alarmas en tiempo real | Daia Systems',
  description: 'Plataforma IoT de monitoreo de temperatura con sensores inalámbricos para la agroindustria. Alarmas por WhatsApp, trazabilidad de folios, gráficos exportables y perfiles de usuario.',
}

export default function DaiaInstrumentsPage() {
  const differentials = [
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
      title: 'Una plataforma cloud siempre disponible',
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
              Monitoreo IoT
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 leading-tight">
              Daia Instruments
            </h1>
            <p className="text-xl text-[#0057B8] font-semibold mb-5">
              Termometría con alarmas en tiempo real
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Plataforma de monitoreo IoT con sensores inalámbricos, diseñada específicamente
              para las necesidades de la agroindustria.
            </p>
            <Link href="/contacto?interes=daia-instruments">
              <Button variant="primary" size="lg">
                Solicitar información
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-[#0057B8] to-[#003865] rounded-2xl p-8 text-white shadow-2xl">
            <h2 className="text-xl font-bold mb-4">¿Por qué Daia Instruments?</h2>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <p>
                Daia Instruments nace para complementar y potenciar la oferta actual del mercado en
                soluciones IoT aplicadas al control de temperatura y recursos estratégicos.
              </p>
              <p>
                Ponemos a disposición de nuestros clientes una plataforma de monitoreo con sensores
                inalámbricos, fácil de usar y diseñada específicamente para las necesidades de la agroindustria.
              </p>
              <p>
                Sin necesidad de cableado ni instalaciones invasivas, nuestra solución permite integrar
                alarmas inteligentes, automatizar controles y sumar funcionalidades avanzadas a sistemas
                existentes de termometría y gestión de recursos críticos.
              </p>
            </div>
          </div>
        </div>

        {/* Differentials Section */}
        <section className="mb-16">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Diferenciales</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-7">Nuestras diferencias</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {differentials.map((item, index) => (
              <BenefitCard key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
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

        {/* Funcionalidades Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-3">Funcionalidades</span>
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
          <h2 className="text-3xl font-bold mb-4">¿Listo para monitorear tu cadena de frío?</h2>
          <p className="text-lg mb-8 opacity-80">
            Ayudamos a las empresas a optimizar sus procesos, reducir riesgos operativos
            y tomar decisiones basadas en datos en tiempo real.
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
