import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <Image
                src="/iconoblancodaia.png"
                alt="Daia Systems"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold">Daia Systems</span>
            </div>
            <p className="text-gray-400 text-sm">
              Especialistas en sistemas de gestión frutícola y agroindustria.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="font-semibold mb-4">Sitio</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="text-gray-400 hover:text-white transition-colors">
                  Nuestra empresa
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-400 hover:text-white transition-colors">
                  Nuestros productos
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-gray-400 hover:text-white transition-colors">
                  Nuestros clientes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/productos/daia-erp" className="text-gray-400 hover:text-white transition-colors">
                  Daia ERP
                </Link>
              </li>
              <li>
                <Link href="/productos/daia-hub" className="text-gray-400 hover:text-white transition-colors">
                  Daia HUB
                </Link>
              </li>
              <li>
                <Link href="/productos/daia-calidad" className="text-gray-400 hover:text-white transition-colors">
                  Daia Calidad
                </Link>
              </li>
              <li>
                <Link href="/productos/daia-agent" className="text-gray-400 hover:text-white transition-colors">
                  Daia Agent
                </Link>
              </li>
              <li>
                <Link href="/productos/daia-instruments" className="text-gray-400 hover:text-white transition-colors">
                  Daia Instruments
                </Link>
              </li>
              <li>
                <a href="https://centinela.daia.cl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Centinela
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Comunícate con nosotros</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: info@daia.cl</p>
              <p>Teléfono: +56227603491</p>
              <div className="mt-4">
                <p className="font-medium text-white mb-2">Recursos</p>
                <a
                  href="https://ayuda.daia.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Documentación
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
<a
                href="https://www.linkedin.com/company/daia-systems-spa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCsPU9eO930VzWZBl8zPvewQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © Copyright 2026 Daia Systems. Desarrollado con Next.js
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Image
              src="/flag-chile.svg"
              alt="Chile"
              width={20}
              height={15}
              className="h-4 w-auto"
            />
            <span className="text-sm text-gray-400">Hecho en Chile</span>
          </div>
        </div>
      </div>
    </footer>
  )
}