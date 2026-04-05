// components/About.jsx
// About section with college intro, recognition badges, and leadership

import React from 'react'
import { CheckCircle2, Award, Shield, BookOpen } from 'lucide-react'

const HIGHLIGHTS = [
  'Established with a vision of quality education for all',
  'Recognized by UP Board (High School & Intermediate)',
  'Affiliated with NIOS Board for flexible learning',
  'Classes from Nursery through to 12th Standard',
  'Located in Lothinagar Khimsapur, Farrukhabad, UP',
  'Dedicated to academic excellence & character building',
]

const RECOGNITION = [
  { icon: Award,    title: 'UP Board',   sub: 'High School & Intermediate' },
  { icon: Shield,   title: 'NIOS Board', sub: 'National Institute Open Schooling' },
  { icon: BookOpen, title: 'Nursery–12', sub: 'Complete School Education' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image collage */}
          <div className="reveal relative">
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating inset image */}
            <div className="absolute -bottom-6 -right-6 w-48 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80"
                alt="Library"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-gold-500 to-gold-600 text-navy-950 rounded-2xl p-4 shadow-xl shadow-gold-500/30">
              <p className="font-serif font-bold text-2xl leading-none">30+</p>
              <p className="text-xs font-semibold mt-0.5 uppercase tracking-wider">Years of<br/>Trust</p>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="reveal">
              <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-3">
                About Our College
              </p>
              <h2 className="section-title gold-underline mb-6">
                A Legacy of<br />
                <span className="text-gold-600">Academic Excellence</span>
              </h2>
            </div>

            <p className="reveal text-gray-600 text-lg leading-relaxed mb-6">
              Raksha Devi Inter College has been a pillar of quality education in Farrukhabad,
              Uttar Pradesh. Our institution nurtures young minds from Nursery through 12th
              standard, blending traditional values with modern pedagogy to produce
              well-rounded, confident individuals ready for tomorrow's challenges.
            </p>

            <p className="reveal text-gray-600 leading-relaxed mb-8">
              Guided by experienced educators and a committed management, we offer an enriched
              learning environment backed by smart classrooms, a comprehensive library,
              sports facilities, and a safe campus under CCTV surveillance — all at an
              affordable cost, making quality education accessible to every family.
            </p>

            {/* Highlights */}
            <ul className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Recognition cards */}
            <div className="reveal grid grid-cols-3 gap-3">
              {RECOGNITION.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="text-center p-4 rounded-xl bg-navy-50 border border-navy-100 hover:border-gold-400 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-gold-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-navy-900 text-sm leading-tight">{title}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5 leading-tight">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership strip */}
        <div className="reveal mt-20 grid sm:grid-cols-2 gap-6">
          {[
            { role: 'Chairman',  name: 'Gaurav Rajput',          mob: '8191948793', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
            { role: 'Manager',   name: 'Shivkumar Singh (Advocate)', mob: '9810403287', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
          ].map(({ role, name, mob, img }) => (
            <div
              key={role}
              className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-navy-950 to-navy-800 shadow-xl"
            >
              <img
                src={img}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold-500"
              />
              <div>
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest">{role}</p>
                <p className="text-white font-serif text-lg font-semibold mt-0.5">{name}</p>
                <p className="text-gray-400 text-sm mt-0.5">📞 {mob}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
