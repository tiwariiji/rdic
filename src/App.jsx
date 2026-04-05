// App.jsx
// Root component — orchestrates loader, all sections, and global utilities

import React, { useState, useEffect } from 'react'
import Loader       from './components/Loader'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import MarqueeBar   from './components/MarqueeBar'
import About        from './components/About'
import StatsBar     from './components/StatsBar'
import Facilities   from './components/Facilities'
import Gallery      from './components/Gallery'
import Testimonials from './components/Testimonials'
import Admission    from './components/Admission'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import ScrollToTop  from './components/ScrollToTop'
import { useReveal } from './utils/useReveal'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Show loader for 2 seconds on first visit
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  // Activate scroll-reveal animations after the loader has finished.
  useReveal(!loading)

  if (loading) return <Loader />

  return (
    <div className="min-h-screen font-sans">
      {/* ── Navigation ─────────────────────────── */}
      <Navbar />

      {/* ── Hero ───────────────────────────────── */}
      <Hero />

      {/* ── Announcement ticker ────────────────── */}
      <MarqueeBar />

      {/* ── About the college ──────────────────── */}
      <About />

      {/* ── Animated stats counter bar ─────────── */}
      <StatsBar />

      {/* ── Facilities grid ────────────────────── */}
      <Facilities />

      {/* ── Photo gallery ──────────────────────── */}
      <Gallery />

      {/* ── Parent/student testimonials ────────── */}
      <Testimonials />

      {/* ── Admission process ──────────────────── */}
      <Admission />

      {/* ── Contact form + map ─────────────────── */}
      <Contact />

      {/* ── Footer ─────────────────────────────── */}
      <Footer />

      {/* ── Scroll-to-top FAB ──────────────────── */}
      <ScrollToTop />
    </div>
  )
}
