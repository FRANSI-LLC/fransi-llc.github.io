import { principles } from '../content';

export function HowWeWork() {
  return (
    <section id="how" className="section--bordered">
      <div className="container section">
        <h2 className="h2" style={{ maxWidth: '20ch' }}>
          How we work
        </h2>
        <div className="principles">
          {principles.map((p, i) => (
            <div key={p.title}>
              <p className="principle__num">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="principle__title">{p.title}</h3>
              <p className="muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
