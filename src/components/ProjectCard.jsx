import ProjectMedia from './ProjectMedia'

export default function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
    >
      <p className="project-card__context">{project.context}</p>
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__desc">{project.description}</p>

      {project.media?.length > 0 && <ProjectMedia media={project.media} />}

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
  )
}
