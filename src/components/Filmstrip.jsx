import { useEffect, useRef, useState } from 'react'

// Horizontal screenshot strip: shows several phone screens at once and
// auto-scrolls one forward on an interval. Pauses on hover/focus, loops back
// at the end, and respects reduced-motion. Users can also swipe/scroll freely.
export default function Filmstrip({ images, interval = 6000, label = 'Gallery' }) {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  const step = (dir) => {
    const track = trackRef.current
    if (!track) return
    const item = track.querySelector('.filmstrip__item')
    if (!item) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 16
    const distance = item.getBoundingClientRect().width + gap
    track.scrollBy({ left: distance * dir, behavior: 'smooth' })
  }

  useEffect(() => {
    if (paused || images.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        step(1)
      }
    }, interval)

    return () => clearInterval(id)
  }, [paused, images.length, interval])

  if (images.length === 0) return null

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
        onClick={() => step(-1)}
        aria-label="Scroll left"
      >
        ‹
      </button>

      <div className="filmstrip__track" ref={trackRef}>
        {images.map((src, i) => (
          <figure className="filmstrip__item" key={src}>
            <img
              src={src}
              alt={`${label}, screen ${i + 1} of ${images.length}`}
              loading="lazy"
              draggable="false"
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="filmstrip__arrow filmstrip__arrow--next"
        onClick={() => step(1)}
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  )
}
