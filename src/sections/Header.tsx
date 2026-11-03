import { nav, site } from '../content';

export function Header() {
  return (
    <header className="container header">
      <a href="#top" className="brand">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt=""
          className="brand__logo"
        />
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
