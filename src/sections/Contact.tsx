import { FormEvent, useState } from 'react';
import { projectTypes, site } from '../content';

// GitHub Pages has no server, so the form opens the visitor's email app
// with the message pre-filled instead of posting anywhere.
export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const type = String(data.get('type') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = `${type} project enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="talk" className="contact">
      <div className="container section split contact__grid">
        <div>
          <h2 className="contact__title">Let's talk.</h2>
          <p className="contact__lead">We reply within {site.responseTime}.</p>
          <p className="contact__email">
            Or email <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="f-name">Your name</label>
            <input id="f-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="f-email">Email</label>
            <input id="f-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="f-type">Project type</label>
            <select id="f-type" name="type">
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-msg">Message</label>
            <textarea id="f-msg" name="message" rows={4} required />
          </div>
          <button type="submit" className="btn btn--primary">
            Send
          </button>
          {sent && (
            <p className="form__note" role="status">
              Your email app should open with the message ready to send. If it
              doesn't, write to us at {site.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
