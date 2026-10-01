import { useEffect, useRef, useState } from 'react'
import { asset } from '../utils/asset'

// Horizontal screenshot strip: shows several phone screens at once and
// auto-scrolls one forward on an interval. Dot buttons indicate and control
// position. Pauses on hover/focus, loops at the end, respects reduced-motion.
export default function Filmstrip({ images, interval = 5000, label = 'Gallery' }) {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const [active, setActive] = useState(0)
  const count = images.length

  const stepSize = () => {
    const track = trackRef.current
    const item = track?.querySelector('.filmstrip__item')
    if (!track || !item) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap) || 16
    return item.getBoundingClientRect().width + gap
  }

  const goTo = (i) => {
    const track = trackRef.current
    if (!track) return
    const clamped = ((i % count) + count) % count
    track.scrollTo({ left: clamped * stepSize(), behavior: 'smooth' })
  }

  // Keep the active dot in sync with the scroll position.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const atEnd =
          track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
        const step = stepSize() || 1
        setActive(atEnd ? count - 1 : Math.round(track.scrollLeft / step))
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [count])

  // Auto-advance.
  useEffect(() => {
    if (paused || count <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: stepSize(), behavior: 'smooth' })
      }
    }, interval)

    return () => clearInterval(id)
  }, [paused, count, interval])

  if (count === 0) return null

  return (
    <div
      className="filmstrip"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <button
        type="button"
        className="filmstrip__arrow filmstrip__arrow--prev"
        onClick={() => goTo(active - 1)}
        aria-label="Scroll left"
      >
        ‹
      </button>

      <div className="filmstrip__track" ref={trackRef}>
        {images.map((src, i) => (
          <figure className="filmstrip__item" key={src}>
            <img
              src={asset(src)}
              alt={`${label}, screen ${i + 1} of ${count}`}
              loading="lazy"
              draggable="false"
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="filmstrip__arrow filmstrip__arrow--next"
        onClick={() => goTo(active + 1)}
        aria-label="Scroll right"
      >
        ›
      </button>

      {count > 1 && (
        <div className="filmstrip__dots">
          {images.map((src, i) => (
            <button
              type="button"
              key={src}
              className={`filmstrip__dot ${i === active ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to screen ${i + 1}`}
              aria-current={i === active}
            />
          ))}
        </div>
      )}
    </div>
  )
}
