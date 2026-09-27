import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <p className="section__eyebrow">Background</p>
        <h2 className="section__title">Education</h2>

        <article className="edu-card">
          <div className="edu-card__body">
            <h3 className="edu-card__school">{education.school}</h3>
            <p className="edu-card__degree">
              {education.degree}, {education.program}
            </p>
          </div>
          <span className="edu-card__grad">{education.graduation}</span>
        </article>
      </div>
    </section>
  )
}
