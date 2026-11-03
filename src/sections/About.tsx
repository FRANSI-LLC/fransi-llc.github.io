import { about, team } from '../content';

export function About() {
  return (
    <section id="about" className="container section section--flush-bottom">
      <div className="split">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h2">{about.title}</h2>
        </div>
        <div className="about__body">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>

      <div className="grid strengths">
        {about.strengths.map((s) => (
          <div key={s.title} className="strength">
            <h3 className="strength__title">{s.title}</h3>
            <p className="muted">{s.body}</p>
          </div>
        ))}
      </div>

      <h3 className="team__heading">The team</h3>
      <div className="grid team">
        {team.map((m) => (
          <div key={m.name} className="card member">
            <div aria-hidden="true" className={`avatar avatar--${m.tone}`}>
              {m.initials}
            </div>
            <div>
              <h4 className="member__name">{m.name}</h4>
              <p className="member__role">{m.role}</p>
              <p className="muted">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
