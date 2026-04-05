// components/Loader.jsx
// Full-screen loader shown on initial page load

import React from 'react'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950">
      {/* Animated crest */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full border-4 border-navy-700 loader-ring" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-2xl font-bold text-gold-500">RD</span>
        </div>
      </div>

      <p className="font-serif text-lg text-white tracking-widest uppercase">
        Raksha Devi
      </p>
      <p className="text-gold-500 text-xs tracking-[0.3em] uppercase mt-1">
        Inter College
      </p>
    </div>
  )
}
