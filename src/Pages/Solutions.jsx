import { Link } from "react-router-dom";
import Check from "../Components/Check";
import usePageTitle from "../usePageTitle";

export default function Solutions() {
  usePageTitle("Solutions");

  const services = [
    [
      "Websites",
      "Business, school, church, NGO and personal portfolio websites, plus landing pages. Every site works well on phones, tablets and computers.",
    ],
    [
      "Web applications",
      "Custom tools such as dashboards, admin portals, and task or workflow systems, built around what your organisation actually needs.",
    ],
    [
      "Website care",
      "Updates, bug fixes, speed and usability improvements, and ongoing support, so your site stays working after launch.",
    ],
    [
      "Search-friendly setup",
      "Your site is structured so that people searching online can find it.",
    ],
  ];

  const audience = [
    "Small businesses",
    "Entrepreneurs and startups",
    "Schools",
    "Churches",
    "NGOs",
    "Professionals with personal websites",
  ];

  const process = [
    ["Discuss", "You tell us what you need and who it is for."],
    ["Plan", "We agree the pages or features, timeline and cost in writing."],
    ["Build", "We design and develop, and share progress with you."],
    ["Review", "You check the work and we make agreed changes."],
    ["Launch and support", "We go live and can continue with maintenance."],
  ];

  const commitments = [
    "Plain language, with no confusing jargon",
    "Clear scope and cost before work begins",
    "Honest timelines",
    "Mobile-friendly, accessible design",
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Jsmarthub Solutions</p>
          <h1>Jsmarthub Solutions</h1>
          <p>
            Websites and web applications built to solve real problems, clear to
            use and reliable to run.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 36 }}>
            What we build
          </h2>
          <div className="service-grid">
            {services.map(([title, text]) => (
              <div className="service" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow center">
          <h2 className="section-title">Who this is for</h2>
          <div className="check-grid">
            {audience.map((item) => (
              <div className="check-item" key={item}>
                <Check />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 36 }}>
            How a project works
          </h2>
          <div className="process">
            {process.map(([title, text], i) => (
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

      <section className="section section-soft">
        <div className="container narrow center">
          <h2 className="section-title">Our commitments</h2>
          <div className="check-grid">
            {commitments.map((item) => (
              <div className="check-item" key={item}>
                <Check />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="note">
            <h3>Coming later</h3>
            <p>
              Digital safety and cybersecurity awareness support, as our
              capabilities grow.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta center" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Have a project in mind?</h2>
          <p>
            Tell us what you need, and we’ll respond with a clear way forward.
          </p>
          <Link to="/contact" className="btn btn-red">
            Send an enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
