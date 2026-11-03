import type { ReactNode } from 'react';
import { services, ServiceIcon } from '../content';

const iconPaths: Record<ServiceIcon, ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6.5" cy="6.5" r="0.5" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </>
  ),
  workflow: (
    <>
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7.5 6h9M6.3 8.2l4.4 7.6M17.7 8.2l-4.4 7.6" />
    </>
  ),
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15" />,
};

export function Services() {
  return (
    <section id="what" className="container section">
      <h2 className="h2" style={{ maxWidth: '16ch' }}>
        What we build
      </h2>
      <div className="grid services">
        {services.map((s) => (
          <div key={s.title} className="card service">
            <svg
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--green)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {iconPaths[s.icon]}
            </svg>
            <h3 className="service__title">{s.title}</h3>
            <p className="muted">{s.body}</p>
            <p className="service__tags">{s.tags}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
