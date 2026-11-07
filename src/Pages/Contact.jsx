import { useState } from "react";
import SocialIcons from "../Components/SocialIcons";
import usePageTitle from "../usePageTitle";

export default function Contact() {
  usePageTitle("Contact");

  // Paste your own Formspree address here
  const FORM_ENDPOINT = "https://formspree.io/f/mdeavwyj";

  const interests = [
    "Website",
    "Web application",
    "Website maintenance and support",
    "Academy training",
    "Something else",
  ];

  const next = [
    ["You send your enquiry", "Tell us what you need."],
    ["We reply", "We ask a few questions to understand your needs."],
    [
      "We agree the next steps",
      "A project plan or programme details, whichever fits.",
    ],
  ];

  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Get in Touch</h1>
          <p>
            Tell us about your project or the skills you want to learn. We’ll
            reply as soon as we can.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="phone">
                Phone number <span className="optional">(optional)</span>
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="interest">I’m interested in</label>
              <select id="interest" name="interest" defaultValue={interests[0]}>
                {interests.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" required />
            </div>

            {/* Hidden spam trap: real visitors never see or fill this */}
            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              className="btn btn-red"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>

            {status === "success" && (
              <p className="form-msg success" role="status">
                Thank you. We’ve received your message and will get back to you
                soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-msg error" role="alert">
                Something went wrong. Please try again, or contact us by phone
                or email.
              </p>
            )}
          </form>

          <aside className="contact-info">
            <h3>Contact details</h3>
            <p>
              <span className="label">Phone</span>+2348066804067
            </p>
            <p>
              <span className="label">Email</span>jsmarthub@gmail.com
            </p>
            <p>
              <span className="label">Location</span>Owerri, Imo State, Nigeria
            </p>
            <a
              href="https://wa.me/2348066804067"
              target="_blank"
              rel="noreferrer"
              className="btn btn-navy"
            >
              Chat with us on WhatsApp
            </a>
            <p>
              <span className="label">Follow us</span>
            </p>
            <SocialIcons />
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 36 }}>
            What happens next
          </h2>
          <div className="process">
            {next.map(([title, text], i) => (
              <div className="process-item" key={title}>
                <div className="step-num">{i + 1}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
