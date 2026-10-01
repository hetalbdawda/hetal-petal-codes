import { useCallback, useEffect, useState } from 'react'

// Auto-advancing image carousel. Pauses on hover/focus and respects the
// user's reduced-motion preference.
export default function Carousel({ images, interval = 6000, label = 'Gallery' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    if (paused || count <= 1) return
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduce) return
    const id = setInterval(() => setIndex((p) => (p + 1) % count), interval)
    return () => clearInterval(id)
  }, [paused, count, interval, index])

  if (count === 0) return null

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              className="carousel__slide"
              key={src}
              aria-hidden={i !== index}
            >
              <img
                src={src}
                alt={`${label}, screen ${i + 1} of ${count}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable="false"
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={prev}
              aria-label="Previous screen"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={next}
              aria-label="Next screen"
            >
              ›
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="carousel__dots">
          {images.map((src, i) => (
            <button
              type="button"
              key={src}
              className={`carousel__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to screen ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
