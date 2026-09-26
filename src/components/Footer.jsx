import { profile } from '../data/resume'

export default function Footer() {
  const { name, email, links } = profile
  const year = new Date().getFullYear()

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
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.devpost} target="_blank" rel="noreferrer">
            Devpost
          </a>
        </nav>
      </div>
      <p className="footer__copy">
        © {year} {name}. Built with React &amp; Vite.
      </p>
    </footer>
  )
}
