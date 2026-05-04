import Image from 'next/image'

const partners = [
  { src: '/clientes/logo-tomra.avif', alt: 'Tomra' },
  { src: '/clientes/logo-aweta-white.svg', alt: 'Aweta' },
  { src: '/clientes/maf-roda-agrobotic.svg', alt: 'MAF Roda Agrobotic' },
  { src: '/clientes/unitec-logo.jpg', alt: 'Unitec' },
  { src: '/clientes/LOGO IPLA LATAM Oscuro(2).png', alt: 'IPLA Latam' },
]

export default function TechPartners() {
  return (
    <section className="py-10 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-[#0057B8] uppercase tracking-widest mb-4">
            Alianza tecnológica
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trabajamos junto a los mejores
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map(({ src, alt }) => (
            <div key={alt} className="bg-white rounded-xl p-6 h-32 w-48 flex items-center justify-center border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <Image
                src={src}
                alt={alt}
                width={120}
                height={72}
                className="max-h-16 max-w-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
