import { Target, Shield, Search, Zap } from 'lucide-react'
import { Product, Client, Value } from '@/types'

export const products: Product[] = [
  {
    id: 'daia-erp',
    name: 'Daia ERP',
    description: 'Gestión integral para planta de proceso de fruta fresca. El corazón de la gestión empresarial frutícola.',
    features: [
      'Gestión integral desde recepción hasta exportación',
      'Control de inventarios optimizado',
      'Interfaz intuitiva y moderna',
      'Reportes en tiempo real'
    ],
    image: '/images/daia-erp.png',
    demoUrl: 'https://demo.daia.cl'
  },
  {
    id: 'daia-hub',
    name: 'Daia HUB',
    description: 'Plataforma que simplifica y optimiza cada aspecto de la exportación e importación de fruta.',
    features: [
      'Embarques, documentos y liquidaciones en un solo lugar',
      'Clientes y agentes informados automáticamente',
      'Rentabilidad real por embarque, con detalle de costos',
      'Packing lists, certificados y BL generados automáticamente'
    ],
    image: '/images/daia-hub.gif',
    demoUrl: 'https://hub.daia.cl'
  },
  {
    id: 'daia-calidad',
    name: 'Daia Calidad',
    description: 'Sistema especializado en gestión de calidad para la industria frutícola con control integral de procesos.',
    features: [
      'Control de procesos de calidad',
      'Recepción, producto terminado, consolidación de despacho',
      'Envío de reportes automatizado',
      'Dashboards de calidad en tiempo real'
    ],
    image: '/images/daia-calidad.png',
    demoUrl: 'https://calidad.daia.cl'
  },
  {
    id: 'daia-agent',
    name: 'Daia Agent',
    description: 'Intermediario que conecta tu ERP con las líneas de empaquetado y calibración mediante APIs genéricas. Elimina ingresos manuales y garantiza trazabilidad total en tiempo real.',
    features: [
      'Integración con clasificadores Tomra/Compac, MAF, Unitec y más.',
      'Control de salidas PLC en tiempo real',
      'Sistema de etiquetado automático ZPL',
      'Gestión de paletizado y trazabilidad'
    ],
    image: '/daiaagent/operador_con_datos.png'
  },
  {
    id: 'daia-instruments',
    name: 'Daia Instruments',
    description: 'Termometría con alarmas en tiempo real. Plataforma IoT con sensores inalámbricos diseñada para la agroindustria.',
    features: [
      'Sensores inalámbricos sin cableado invasivo',
      'Alarmas y reportes automáticos por WhatsApp',
      'Plataforma cloud siempre disponible',
      'Trazabilidad de folios por cámara'
    ],
    image: '/daiainstruments/Imagen2.png'
  }
]

export const clients: Client[] = [
  { id: 'andinexia', name: 'Andinexia', logo: '/clientes/andinexia.jpg' },
  { id: 'roquefort', name: 'Roquefort', logo: '/clientes/roquefort.png' },
  { id: 'meena-farms', name: 'Meena Farms', logo: '/clientes/meenafarms.png' },
  { id: 'erfrut', name: 'Erfrut', logo: '/clientes/erfrut.png' },
  { id: 'naturesouth', name: 'Nature South', logo: '/clientes/naturesouth.png' },
  { id: 'provagro', name: 'Provagro', logo: '/clientes/provagro.png' },
  { id: 'huelpack', name: 'Huelpack', logo: '/clientes/huelpack.png' },
  { id: 'provex', name: 'Provex', logo: '/clientes/provex.png' },
  // { id: 'westfalia', name: 'Westfalia', logo: '/clientes/westfalia.svg' },
  { id: 'pps', name: 'PPS', logo: '/clientes/pps.png' },
  { id: 'prize', name: 'Prize', logo: '/clientes/prize.jpg' }
]

export const values: Value[] = [
  {
    id: 'simplicity',
    title: 'Simplicidad',
    description: 'Solo el set de funcionalidades que necesita una planta de proceso de fruta fresca. Sin módulos que nunca usarás, sin licencias por función.',
    icon: Target
  },
  {
    id: 'responsibility',
    title: 'Responsabilidad',
    description: 'Soporte con opción 24/7 y SLA con garantías reales. Cuando la línea está parada en plena temporada, alguien responde, y ese alguien ya sabe lo que significa un despacho urgente.',
    icon: Shield
  },
  {
    id: 'transparency',
    title: 'Transparencia',
    description: 'Un solo precio. Una sola mensualidad para todo el sistema. Sin costos extras escondidos, sin sorpresas en la factura.',
    icon: Search
  },
  {
    id: 'efficiency',
    title: 'Eficiencia',
    description: 'Automatizado para reducir los ingresos manuales. Menos tipeo, menos errores, más atención en la operación que importa.',
    icon: Zap
  }
]

export const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    {
      name: 'Empresa',
      href: '/empresa',
      submenu: [
        { name: 'Sobre nosotros', href: '/empresa#about' },
        { name: 'Nuestros valores', href: '/empresa#values' }
      ]
    },
    {
      name: 'Productos',
      href: '/productos',
      submenu: [
        { name: 'Daia ERP', href: '/productos/daia-erp' },
        { name: 'Daia HUB', href: '/productos/daia-hub' },
        { name: 'Daia Calidad', href: '/productos/daia-calidad' },
        { name: 'Daia Agent', href: '/productos/daia-agent' },
        { name: 'Daia Instruments', href: '/productos/daia-instruments' }
      ]
    },
    { name: 'Clientes', href: '/clientes' },
    { name: 'Contacto', href: '/contacto' }
  ],
  external: [
    { name: 'Portal cliente', href: 'https://clientes.daia.cl/web/login' },
    { name: 'Soporte', href: 'https://clientes.daia.cl/soporte' }
  ]
}