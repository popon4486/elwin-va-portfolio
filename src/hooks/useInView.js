import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element has scrolled into view, using the browser's
 * native IntersectionObserver (no extra dependency needed).
 *
 * Fires once and stops observing — the animation plays the first time
 * you scroll to it, and doesn't replay if you scroll past and back.
 *
 * Usage:
 *   const [ref, isInView] = useInView()
 *   <div ref={ref} className={isInView ? 'is-visible' : ''}>
 */
export function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(node)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView]
}
