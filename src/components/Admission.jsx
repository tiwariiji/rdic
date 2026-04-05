// components/Admission.jsx
// Admission process steps + highlight benefits + CTA

import React from 'react'
import { FileText, UserPlus, BookCheck, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: FileText,
    title: 'Collect Application Form',
    desc: 'Visit the college office or contact us to collect the admission form. Forms are also available digitally — just fill out the contact form below.',
  },
  {
    num: '02',
    icon: UserPlus,
    title: 'Submit Documents',
    desc: 'Submit the filled form along with required documents: Aadhaar card, previous class marksheet, passport photo, and birth certificate.',
  },
  {
    num: '03',
    icon: BookCheck,
    title: 'Entrance Assessment',
    desc: 'A simple, friendly interaction/assessment is conducted for classes 6 and above to help us understand the student\'s current level.',
  },
  {
    num: '04',
    icon: GraduationCap,
    title: 'Confirm Admission',
    desc: 'Once accepted, complete fee payment and receive your admission kit, uniform details, and timetable. Your journey begins!',
  },
]

const BENEFITS = [
  'Affordable fee structure for every family',
  'English medium instruction from Day 1',
  'Dedicated subject-expert teachers',
  'Regular parent-teacher meetings',
  'Monthly progress reports',
  'Co-curricular activities included',
  'Safe, CCTV-monitored campus',
  'Zero-tolerance bullying policy',
]

export default function Admission() {
  return (
    <section id="admission" className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Join Our Family
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Admission Process
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Enrolling your child at Raksha Devi Inter College is simple and straightforward.
            Follow these four easy steps to secure your seat for the 2026 session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {STEPS.map(({ num, icon: Icon, title, desc }, i) => (
              <div
                key={num}
                className="reveal flex gap-5 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-navy-950" />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold-500/40 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-gold-500/60 text-xs font-bold tracking-widest uppercase">{num}</span>
                  <h3 className="text-white font-bold text-lg mt-0.5 mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits + CTA */}
          <div className="reveal">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Why Choose RDIC?
              </h3>
              <ul className="space-y-3 mb-8">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Admission open badge */}
              <div className="bg-gradient-to-r from-gold-500 to-gold-400 rounded-2xl p-5 mb-6 text-center">
                <p className="text-navy-950 font-bold text-xl">🎓 Admissions Open</p>
                <p className="text-navy-900 text-sm mt-1 font-medium">2026 Session · Nursery to 12th</p>
                <p className="text-navy-800 text-xs mt-1">Limited Seats — Apply Early!</p>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-xl group"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-gray-500 text-xs text-center mt-3">
                Or call us directly: <span className="text-gold-400 font-semibold">8191948793</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
