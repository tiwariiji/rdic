// components/StatsBar.jsx
// Full-width dark stats bar with animated counters

import React, { useEffect, useRef, useState } from 'react'

const STATS = [
  { end: 500,  suffix: '+',  label: 'Students Enrolled'    },
  { end: 30,   suffix: '+',  label: 'Expert Educators'     },
  { end: 100,  suffix: '%',  label: 'Board Pass Rate'      },
  { end: 10,   suffix: '+',  label: 'Curricular Activities'},
]

function Counter({ end, suffix, duration = 1800 }) {
  const [count, setCount]   = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(({ end, suffix, label }, i) => (
            <div
              key={label}
              className={`text-center ${i < STATS.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={end} suffix={suffix} />
              </p>
              <p className="text-gold-400 text-sm font-semibold tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
