import { useState } from 'react'

// Lightweight YouTube "facade": shows the thumbnail until clicked, then
// swaps in the real iframe. Keeps the page fast (no YouTube JS up front).
function YouTubeFacade({ id, label }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        className="media-item media-item--frame"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      className="media-item media-item--facade"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${label} on YouTube`}
    >
      <img
        className="media-item__thumb"
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => {
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
        }}
        alt=""
        loading="lazy"
      />
      <span className="media-item__play" aria-hidden="true">
        ▶
      </span>
    </button>
  )
}

export default function ProjectMedia({ media }) {
  return (
    <div className="media-grid">
      {media.map((item) => (
        <figure key={item.label} className="media-figure">
          {item.type === 'youtube' ? (
            <YouTubeFacade id={item.id} label={item.label} />
          ) : (
            <video
              className="media-item media-item--video"
              src={item.src}
              poster={item.poster}
              controls
              preload="metadata"
            />
          )}
          <figcaption className="media-figure__caption">{item.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
