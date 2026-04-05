// components/Testimonials.jsx
// Parent & student testimonials carousel

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class 8 student',
    text: 'Raksha Devi Inter College has transformed my daughter. The teachers are incredibly dedicated and the smart classroom environment has made learning exciting. Her grades have improved remarkably in just one year.',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&q=80',
    stars: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Parent of Class 11 student',
    text: 'The discipline and academic standards at RDIC are outstanding. My son is now confident in both Hindi and English and has developed excellent study habits. The transport facility is a great convenience too.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    stars: 5,
  },
  {
    name: 'Aarav Mishra',
    role: 'Class 12 Graduate, 2024',
    text: 'I scored 87% in my UP Board exams thanks to the coaching and personal attention from teachers here. The library and computer lab gave me all the resources I needed. I am proud to be a student of RDIC.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    stars: 5,
  },
  {
    name: 'Sunita Devi',
    role: 'Parent of Class 5 student',
    text: 'Very clean, safe, and disciplined environment. The CCTV cameras and regular teacher updates give us parents immense peace of mind. The fees are very affordable for the quality of education provided.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    stars: 5,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = (dir) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
      setAnimating(false)
    }, 300)
  }

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go(1), 5000)
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            What Parents Say
          </p>
          <h2 className="section-title gold-underline mx-auto w-fit mb-4">
            Testimonials
          </h2>
        </div>

        {/* Carousel */}
        <div className="reveal max-w-3xl mx-auto">
          <div
            className={`bg-gradient-to-br from-navy-950 to-navy-800 rounded-3xl p-10 text-center shadow-2xl shadow-navy-900/30 transition-opacity duration-300 ${
              animating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {/* Quote icon */}
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-6">
              <Quote className="w-7 h-7 text-gold-500" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array(t.stars).fill(0).map((_, i) => (
                <span key={i} className="text-gold-400 text-lg">★</span>
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light italic">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
              />
              <div className="text-left">
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-gold-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-navy-950 hover:border-navy-950 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 h-2.5 bg-gold-500' : 'w-2.5 h-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-navy-950 hover:border-navy-950 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
