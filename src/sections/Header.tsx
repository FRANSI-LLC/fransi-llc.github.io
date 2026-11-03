import { nav, site } from '../content';

export function Header() {
  return (
    <header className="container header">
      <a href="#top" className="brand">
        {site.name}
      </a>
      <nav aria-label="Main" className="nav">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="nav__link">
            {item.label}
          </a>
        ))}
        <a href="#talk" className="btn btn--dark">
          Contact
        </a>
      </nav>
    </header>
  );
}
