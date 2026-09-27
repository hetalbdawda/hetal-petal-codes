import { profile } from '../data/resume'

export default function Hero() {
  const { name, title, tagline, email, phone, location, links } = profile

  // Only show social links that have a real URL set in resume.js.
  const socials = [
    { label: 'GitHub', href: links.github },
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'Devpost', href: links.devpost },
  ].filter((s) => s.href && s.href !== '#')

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__hello">Hi, I&apos;m</p>
        <h1 className="hero__name">
          {name}
          <span className="gradient-text">.</span>
        </h1>
        <p className="hero__title">
          {title} <span className="hero__dot">•</span> {location}
        </p>
        <p className="hero__tagline">{tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${email}`}>
            Get in touch
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              className="btn btn--ghost"
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>

        <ul className="hero__contact">
          <li>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
