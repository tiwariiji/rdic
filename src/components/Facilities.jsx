// components/Facilities.jsx
// Grid of facility cards with icons and hover effects

import React from 'react'
import {
  Monitor,
  UserCheck,
  Trophy,
  Languages,
  Bus,
  Droplets,
  Dumbbell,
  BookOpen,
  Shield,
} from 'lucide-react'

// Mapping icon names to Lucide components
const FACILITIES = [
  {
    icon: Monitor,
    title: 'Smart Classrooms',
    desc: 'Technology-powered interactive classrooms enabling engaging, digital-first learning experiences.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
  },
  {
    icon: UserCheck,
    title: 'Experienced Teachers',
    desc: "Highly trained and dedicated faculty committed to nurturing every student's potential.",
    color: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100 hover:border-emerald-300',
  },
  {
    icon: Trophy,
    title: '100% Board Results',
    desc: 'Consistent 100% pass record in UP Board examinations, year after year.',
    color: 'from-gold-500 to-gold-700',
    bg: 'bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
  },
  {
    icon: Monitor,
    title: 'Computer Education',
    desc: 'Dedicated computer lab with hands-on training in modern software and digital literacy.',
    color: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-100 hover:border-violet-300',
  },
  {
    icon: Languages,
    title: 'English Medium',
    desc: 'English-medium teaching ensuring students are prepared for a global competitive world.',
    color: 'from-sky-500 to-sky-700',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
  },
  {
    icon: Bus,
    title: 'Transport Facility',
    desc: 'Safe and reliable transportation covering key routes across Farrukhabad district.',
    color: 'from-orange-500 to-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-100 hover:border-orange-300',
  },
  {
    icon: Droplets,
    title: 'Clean Drinking Water',
    desc: 'RO-purified drinking water and hygienic campus environment for student health.',
    color: 'from-cyan-500 to-cyan-700',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100 hover:border-cyan-300',
  },
  {
    icon: Dumbbell,
    title: 'Sports Facilities',
    desc: 'Well-maintained sports ground offering cricket, football, athletics and indoor games.',
    color: 'from-red-500 to-red-700',
    bg: 'bg-red-50',
    border: 'border-red-100 hover:border-red-300',
  },
  {
    icon: BookOpen,
    title: 'Library',
    desc: 'Extensive collection of textbooks, reference books and periodicals for all classes.',
    color: 'from-teal-500 to-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
  },
  {
    icon: Shield,
    title: 'CCTV Surveillance',
    desc: '24x7 CCTV monitoring ensuring a safe and secure environment for every student.',
    color: 'from-slate-500 to-slate-700',
    bg: 'bg-slate-50',
    border: 'border-slate-100 hover:border-slate-300',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="section-title gold-underline mx-auto w-fit mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6">
            We invest in infrastructure and resources that create the best possible
            learning environment - because every child deserves the best start in life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {FACILITIES.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
            <div
              key={title}
              className={`reveal card p-6 border ${border} ${bg} group`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon circle */}
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-bold text-navy-900 text-base mb-2 leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
