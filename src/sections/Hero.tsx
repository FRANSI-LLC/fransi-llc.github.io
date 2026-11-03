import { hero } from '../content';

export function Hero() {
  return (
    <section id="top" className="container hero">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 className="hero__title">{hero.title}</h1>
      <p className="hero__lead">{hero.lead}</p>
      <div className="hero__actions">
        <a href="#talk" className="btn btn--primary">
          Start a project
        </a>
        <a href="#what" className="hero__secondary">
          See services
        </a>
      </div>
    </section>
  );
}
