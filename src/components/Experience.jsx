import { experience } from '../data/resume'
import Carousel from './Carousel'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="section__eyebrow">Career</p>
        <h2 className="section__title">Work experience</h2>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <article
                className={`job-card ${
                  job.gallery?.length > 0 ? 'job-card--gallery' : ''
                }`}
              >
                <div className="job-card__main">
                  <header className="job-card__head">
                    <div>
                      <h3 className="job-card__role">{job.role}</h3>
                      <p className="job-card__company">
                        {job.company} <span className="job-card__sep">·</span>{' '}
                        {job.location}
                      </p>
                    </div>
                    <span className="job-card__period">{job.period}</span>
                  </header>
                  <ul className="job-card__points">
                    {job.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {job.links?.length > 0 && (
                    <div className="job-card__links">
                      {job.links.map((link) => (
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
                </div>

                {job.gallery?.length > 0 && (
                  <aside className="job-card__gallery">
                    <Carousel
                      images={job.gallery}
                      interval={6000}
                      label={`${job.company} mobile app`}
                    />
                    <p className="job-card__gallery-caption">
                      {job.company} mobile app
                    </p>
                  </aside>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
