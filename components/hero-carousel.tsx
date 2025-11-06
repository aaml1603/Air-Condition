"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/gallery/header2.jpg",
  "/gallery/onestop.jpg",
  "/gallery/showroomdp.jpg",
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Carousel Images - No overlay on images */}
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Hero Content with Blue Overlay only on left side */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative h-full flex items-center w-full md:w-2/3 lg:w-3/5">
            {/* Blue overlay covering left portion */}
            <div className="absolute inset-0 bg-blue-900/80" />
            
            {/* Text Content - Left Aligned */}
            <div className="relative text-white z-10 px-8 md:px-12 py-8 md:py-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Deplus AC Supply
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4">The best HVAC brands</p>
              <p className="text-lg md:text-xl mb-6 md:mb-8">Come and visit us. Delivery available.</p>
              <a
                href="/contacts"
                className="inline-block px-6 md:px-8 py-2 md:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base md:text-lg"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

