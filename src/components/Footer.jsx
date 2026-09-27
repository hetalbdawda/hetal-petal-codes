import { profile } from '../data/resume'

export default function Footer() {
  const { name, email, links } = profile
  const year = new Date().getFullYear()

  // Only show social links that have a real URL set in resume.js.
  const socials = [
    { label: 'GitHub', href: links.github },
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'Devpost', href: links.devpost },
  ].filter((s) => s.href && s.href !== '#')

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__cta">Let&apos;s build something.</p>
          <a className="footer__email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <nav className="footer__links" aria-label="Social links">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="footer__copy">
        © {year} {name}. Built with React &amp; Vite.
      </p>
    </footer>
  )
}
