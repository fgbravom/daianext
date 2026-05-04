'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'

interface Slide {
  src: string
  alt: string
  caption: string
  desc?: string
}

export default function ProductSlider({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>('[data-slide-item]')
    const target = items[index]
    if (target) {
      el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: 'smooth' })
    }
    setActiveIndex(index)
  }

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-slide-item]'))
    const containerLeft = el.getBoundingClientRect().left
    let closest = 0
    let minDist = Infinity
    items.forEach((item, i) => {
      const dist = Math.abs(item.getBoundingClientRect().left - containerLeft)
      if (dist < minDist) { minDist = dist; closest = i }
    })
    setActiveIndex(closest)
  }, [])

  const lightboxPrev = () => setLightboxIndex(i => i !== null ? Math.max(0, i - 1) : i)
  const lightboxNext = () => setLightboxIndex(i => i !== null ? Math.min(slides.length - 1, i + 1) : i)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') lightboxPrev()
      if (e.key === 'ArrowRight') lightboxNext()
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  const lightboxSlide = lightboxIndex !== null ? slides[lightboxIndex] : null

  return (
    <>
      <div className="relative group/slider">
        {/* Prev arrow */}
        <button
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          className={`absolute left-0 top-1/3 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-150 ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Anterior"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => scrollToIndex(Math.min(slides.length - 1, activeIndex + 1))}
          className={`absolute right-0 top-1/3 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-150 ${activeIndex === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Siguiente"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              data-slide-item
              onClick={() => setLightboxIndex(index)}
              className="group flex-shrink-0 w-[82%] md:w-[47%] lg:w-[31%] snap-start text-left"
              aria-label={`Ver ${slide.caption}`}
            >
              <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                  <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={28} />
                </div>
              </div>
              <div className="mt-3 px-1">
                <p className="font-semibold text-gray-900 text-sm">{slide.caption}</p>
                {slide.desc && (
                  <p className="text-gray-500 text-xs mt-0.5 line-clamp-2 leading-relaxed">{slide.desc}</p>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Dot indicators */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-[#0057B8] w-6' : 'bg-gray-300 w-1.5 hover:bg-gray-400'
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSlide && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={lightboxPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors ${lightboxIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={lightboxNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors ${lightboxIndex === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={24} />
            </button>

            <Image
              src={lightboxSlide.src}
              alt={lightboxSlide.alt}
              width={1400}
              height={900}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold text-lg">{lightboxSlide.caption}</p>
              {lightboxSlide.desc && <p className="text-gray-400 text-sm mt-1 max-w-2xl mx-auto">{lightboxSlide.desc}</p>}
              <p className="text-gray-600 text-xs mt-2">{lightboxIndex + 1} / {slides.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
