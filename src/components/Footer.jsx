// components/Footer.jsx
// Full footer with address, contact, social links, and copyright

import React from 'react'
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery',    href: '#gallery'    },
  { label: 'Admission',  href: '#admission'  },
  { label: 'Contact',    href: '#contact'    },
]

const SOCIALS = [
  { icon: Facebook,  href: '#', label: 'Facebook'  },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube,   href: '#', label: 'YouTube'   },
  { icon: Twitter,   href: '#', label: 'Twitter'   },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-950 text-gray-400">
      {/* Top wave-like separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-navy-950" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white leading-tight">Raksha Devi</p>
                <p className="text-gold-500 text-[11px] tracking-widest uppercase">Inter College</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering students from Nursery to 12th with quality education, modern
              infrastructure, and values-based learning since our founding in Farrukhabad, UP.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-500 border border-white/10 hover:border-gold-500 flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-navy-950 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="flex items-center gap-2 text-sm hover:text-gold-400 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span>Lothinagar Khimsapur,<br />Farrukhabad, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <div>
                  <p>8191948793 (Chairman)</p>
                  <p>9810403287 (Manager)</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:rdic.edu@gmail.com" className="hover:text-gold-400 transition-colors">
                  rdic.edu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Recognition & Hours */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Recognition
            </h4>
            <div className="space-y-3 mb-6">
              {['UP Board — High School & Intermediate', 'NIOS Board', 'Nursery to 12th Standard'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">
              Office Hours
            </h4>
            <p className="text-sm">Mon – Sat: 8:00 AM – 4:00 PM</p>
            <p className="text-sm">Sunday: Closed</p>

            {/* Admission open badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs font-semibold">Admissions Open 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Raksha Devi Inter College, Farrukhabad. All rights reserved.</p>
          <p>
            Designed with ❤️ for{' '}
            <span className="text-gold-400 font-semibold">Raksha Devi Inter College</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
