// components/Navbar.jsx
// Sticky navbar with smooth scroll navigation + mobile hamburger menu

import React, { useState, useEffect } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',      href: '#home'      },
  { label: 'About',     href: '#about'     },
  { label: 'Facilities',href: '#facilities' },
  { label: 'Gallery',   href: '#gallery'   },
  { label: 'Admission', href: '#admission' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('#home')

  // Shadow nav on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => sections.forEach((s) => s && observer.unobserve(s))
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur-md shadow-2xl shadow-navy-950/50' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-lg shadow-gold-500/30">
              <GraduationCap className="w-5 h-5 text-navy-950" />
            </div>
            <div className="text-left">
              <p className="font-serif text-base font-bold text-white leading-tight">
                Raksha Devi
              </p>
              <p className="text-gold-500 text-[10px] tracking-widest uppercase font-medium leading-tight">
                Inter College
              </p>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === href
                      ? 'bg-gold-500/20 text-gold-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA (desktop) */}
          <button
            onClick={() => handleNav('#admission')}
            className="hidden md:inline-flex items-center gap-2 btn-gold text-sm"
          >
            Apply Now
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 flex flex-col gap-1 border-t border-white/10">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  active === href
                    ? 'bg-gold-500/20 text-gold-400'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#admission')}
              className="btn-gold mt-2 text-sm text-center"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
