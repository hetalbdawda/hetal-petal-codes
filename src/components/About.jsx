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
            I&apos;m a full-stack software engineer focused on React Native and
            React, backed by a Node.js/TypeScript BFF layer. At Vivid Seats I
            helped lead the move to React Native for apps that power over $1
            billion in annual GOV, shipping core flows to millions of customers
            from onboarding and ticket details to internationalization across 10
            countries, and I care about the details that make an app feel fast,
            reliable, and accessible.
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
