// components/Gallery.jsx
// Masonry-style photo gallery using Unsplash school images

import React, { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',  alt: 'School building',         span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',  alt: 'Classroom',              span: '' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',  alt: 'Library',               span: '' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',  alt: 'Science lab',           span: '' },
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',  alt: 'Students learning',     span: '' },
  { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80',     alt: 'Art class',             span: '' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80',  alt: 'Sports day',            span: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80',  alt: 'Computer lab',          span: '' },
  { src: 'https://images.unsplash.com/photo-1453906971074-ce568cccbc63?w=600&q=80',  alt: 'School corridor',       span: '' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Campus Life
          </p>
          <h2 className="section-title gold-underline mx-auto w-fit mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-6">
            A glimpse into the vibrant daily life, events, and infrastructure of
            Raksha Devi Inter College.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {PHOTOS.map(({ src, alt, span }, i) => (
            <div
              key={i}
              className={`${span} relative overflow-hidden rounded-2xl cursor-pointer group`}
              onClick={() => setLightbox(src)}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-950/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium capitalize">{alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
