import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  // If the visitor prefers reduced motion, show everything straight away
  const [visible, setVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    // Very old browsers: skip the animation
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    // Fires once, when the block is close to entering the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div ref={ref} className={`reveal${visible ? ' reveal-visible' : ''}`}>
      {children}
    </div>
  )
}