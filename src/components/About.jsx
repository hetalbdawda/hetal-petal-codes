import { education } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title">
          Building consumer apps people actually use.
        </h2>
        <div className="about__grid">
          <p className="about__lead">
            I&apos;m a front-end software engineer focused on React Native and
            React. At Vivid Seats I ship core mobile flows to millions of users,
            from onboarding and ticket details to internationalization across 10
            countries, and I care about the details that make an app feel fast,
            reliable, and pleasant to use.
          </p>
          <p className="about__body">
            My background is in Mechatronics Engineering from the{' '}
            {education.school}, so I&apos;m equally comfortable debugging a native
            bridge, wiring up a PCB, or running an A/B test. I like owning a
            feature end to end: design system to deploy, unit tests to on-call.
          </p>
        </div>
      </div>
    </section>
  )
}
