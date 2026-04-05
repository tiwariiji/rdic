// components/Hero.jsx
// Full-screen hero with background image, animated headings, and CTA buttons

import React, { useEffect, useState } from 'react'
import { ChevronDown, Award, Users, BookOpen } from 'lucide-react'

const STATS = [
  { icon: Award,    value: '100%', label: 'Board Results'    },
  { icon: Users,    value: '500+', label: 'Happy Students'   },
  { icon: BookOpen, value: '30+',  label: 'Expert Teachers'  },
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Delay to allow loader to exit first
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
          alt="School building"
          className="w-full h-full object-cover"
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-950/80 to-navy-900/70" />
        {/* Decorative gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-10 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 text-sm font-semibold tracking-wide">
              Admissions Open — 2026 Session
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-4 transition-all duration-700 delay-150 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Shaping{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-300">
              Futures
            </span>
            <br />
            Building Leaders
          </h1>

          {/* Sub heading */}
          <p
            className={`text-xl md:text-2xl text-gray-300 font-light mb-3 transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="font-semibold text-white">Raksha Devi Inter College</span>
          </p>

          <p
            className={`text-gray-400 text-base md:text-lg mb-2 transition-all duration-700 delay-250 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            UP Board (High School &amp; Intermediate) · NIOS Board
          </p>

          <p
            className={`text-gray-400 text-base md:text-lg mb-10 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nursery to 12th · Lothinagar Khimsapur, Farrukhabad, UP
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-[400ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold text-base"
            >
              Apply Now — It's Free
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-base"
            >
              Contact Us
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap gap-6 md:gap-10 transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl leading-none">{value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-400 hover:text-gold-400 transition group"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  )
}
