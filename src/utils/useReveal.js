// utils/useReveal.js
// Adds the 'visible' class to elements with class 'reveal'
// when they enter the viewport using CSS-driven scroll animations.

import { useEffect } from 'react'

export function useReveal(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (!elements.length) return undefined

    // Fall back to showing content immediately if observers are unavailable.
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [enabled])
}
