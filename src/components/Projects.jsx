import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section__eyebrow">Selected work</p>
        <h2 className="section__title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="project-card__context">{project.context}</p>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip chip--sm">
                    {tag}
                  </li>
                ))}
              </ul>
              {project.links?.length > 0 && (
                <div className="project-card__links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      className="project-card__link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
