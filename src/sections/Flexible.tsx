import { audiences, flexible } from '../content';

export function Flexible() {
  return (
    <>
      <section id="flexible" className="container section section--flush-bottom">
        <div className="split">
          <div>
            <p className="eyebrow">{flexible.eyebrow}</p>
            <h2 className="h2">{flexible.title}</h2>
          </div>
          <p className="lead">{flexible.lead}</p>
        </div>
        <div className="grid flex-cards">
          {flexible.cards.map((c) => (
            <div key={c.title} className="card">
              <h3 className="card__title">{c.title}</h3>
              <p className="muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="split" style={{ gap: 48 }}>
          <h2 className="h2">Built for</h2>
          <ul className="audiences">
            {audiences.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
