import { projects } from '../data/resume'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section__eyebrow">Selected work</p>
        <h2 className="section__title">Projects</h2>

        {featured.length > 0 && (
          <div className="projects__featured">
            {featured.map((project) => (
              <ProjectCard key={project.name} project={project} featured />
            ))}
          </div>
        )}

        <div className="projects__grid">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
