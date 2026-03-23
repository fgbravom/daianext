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
      'Centralización logística completa',
      'Comunicación transparente entre equipos',
      'Optimización financiera avanzada',
      'Gestión documental automatizada'
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
      'Envio de reportes automatizado',
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
    description: 'Cada producto está diseñado para maximizar la comodidad y facilidad de uso, mejorando la productividad.',
    icon: '🎯'
  },
  {
    id: 'responsibility',
    title: 'Responsabilidad',
    description: 'Somos responsables en cada paso, ofreciendo soluciones fiables y duraderas que impulsen tu éxito.',
    icon: '🛡️'
  },
  {
    id: 'transparency',
    title: 'Transparencia',
    description: 'Utilizamos tecnología de punta para ofrecerte herramientas transparentes con datos precisos en tiempo real.',
    icon: '🔍'
  },
  {
    id: 'efficiency',
    title: 'Eficiencia',
    description: 'Conocemos los procesos productivos y sabemos qué información necesitas y cuándo la necesitas.',
    icon: '⚡'
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