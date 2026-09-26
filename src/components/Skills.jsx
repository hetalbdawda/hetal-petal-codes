import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section__eyebrow">Toolkit</p>
        <h2 className="section__title">Technical skills</h2>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3 className="skill-card__title">{group.category}</h3>
              <ul className="skill-card__tags">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
