// components/MarqueeBar.jsx
// Scrolling announcement ticker

import React from 'react'
import { Bell } from 'lucide-react'

const MESSAGES = [
  '📣 Admissions Open for 2026 Session',
  '🎓 Classes: Nursery to 12th Standard',
  '✅ UP Board & NIOS Recognized School',
  '⭐ 100% Board Result — Session 2024–25',
  '🚌 Transport Facility Available',
  '💻 Computer Education Provided',
  '📚 Limited Seats — Apply Early',
  '📞 Contact: 8191948793 · 9810403287',
]

export default function MarqueeBar() {
  const text = MESSAGES.join('   ·   ')

  return (
    <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-3 overflow-hidden relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

      {/* Icon tag */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 bg-gold-500 px-3 py-1 rounded-full">
        <Bell className="w-3 h-3 text-navy-950" />
        <span className="text-navy-950 font-bold text-xs uppercase tracking-wider">Notice</span>
      </div>

      <div className="pl-32">
        <p className="marquee-track text-gold-400 font-semibold text-sm tracking-wide">
          {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
        </p>
      </div>
    </div>
  )
}
