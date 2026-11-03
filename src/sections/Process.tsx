import { process } from '../content';

export function Process() {
  return (
    <section id="process" className="process">
      <div className="container section">
        <h2 className="h2" style={{ maxWidth: '18ch' }}>
          {process.title}
        </h2>
        <p className="process__lead">{process.lead}</p>
        <ol className="steps">
          {process.steps.map((step, i) => (
            <li key={step.title} className="step">
              <h3 className="step__title">
                {i + 1}. {step.title}
              </h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
