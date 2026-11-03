import { site } from '../content';

export function Footer() {
  return (
    <footer className="container footer">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p>
        {site.city} · <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </footer>
  );
}
