import { Link } from "react-router-dom";
import Check from "../Components/Check";
import usePageTitle from "../usePageTitle";

export default function Home() {
  usePageTitle();

  const serve = [
    "Small businesses",
    "Schools",
    "Churches",
    "NGOs",
    "Individuals",
    "Beginners",
  ];

  const care = [
    [
      "Clear scope",
      "We agree what you get, and what it costs, before work begins.",
    ],
    [
      "Works on every screen",
      "Mobile-friendly, accessible design for phones, tablets and computers.",
    ],
    ["Honest timelines", "We say plainly what we can do, and when."],
    ["Plain language", "No confusing jargon, just clear communication."],
  ];

  const steps = [
    ["Tell us what you need", "A website, an app, or a course."],
    ["We talk it through", "We agree scope, timeline and cost clearly."],
    ["We build or begin", "You get regular updates and honest communication."],
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Technology company</p>
            <h1>Building Digital Solutions. Empowering Tech Talent.</h1>
            <p className="lead">
              Jsmarthub builds websites and web applications for businesses and
              organisations, and trains people in practical tech skills.
            </p>
            <div className="btn-row">
              <Link to="/solutions" className="btn btn-navy">
                Explore Solutions
              </Link>
              <Link to="/academy" className="btn btn-outline">
                Explore Academy
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="mock">
              <div className="mock-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="bar title"></div>
              <div className="bar" style={{ width: "85%" }}></div>
              <div className="bar" style={{ width: "70%" }}></div>
              <div className="mock-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two divisions */}
      <section className="section">
        <div className="container">
          <h2 className="section-title center">
            One company, two equal pillars
          </h2>
          <p className="section-sub center">
            Real solutions for clients, and real skills for learners.
          </p>
          <div className="cards">
            <div className="card card-dark">
              <p className="tag">Division one</p>
              <h3>Jsmarthub Solutions</h3>
              <p>
                Websites and web apps that solve real problems, built to work
                well on any device.
              </p>
              <Link to="/solutions" className="btn btn-red">
                See our services
              </Link>
            </div>
            <div className="card card-light">
              <p className="tag">Division two</p>
              <h3>Jsmarthub Academy</h3>
              <p>
                Practical, project-based training in web development, IT skills
                and cybersecurity fundamentals.
              </p>
              <Link to="/academy" className="btn btn-navy">
                See our programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section section-soft">
        <div className="container narrow center">
          <h2 className="section-title">
            Technology that is useful, clear and within reach
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            We help small businesses, schools, churches, NGOs and individuals
            get online and work better with technology. We also help beginners
            learn skills they can use to build real projects.
          </p>
          <div className="check-grid">
            {serve.map((item) => (
              <div className="check-item" key={item}>
                <Check />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built with care */}
      <section className="section">
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 36 }}>
            Built with care
          </h2>
          <div className="care-grid">
            {care.map(([title, text]) => (
              <div className="care-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="section steps-section">
        <div className="container">
          <h2 className="section-title center">How to get started</h2>
          <div className="steps">
            {steps.map(([title, text], i) => (
              <div key={title}>
                <div className="step-num">{i + 1}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="section cta center">
        <div className="container">
          <h2>Ready to start?</h2>
          <p>Tell us about your project or the skills you want to learn.</p>
          <Link to="/contact" className="btn btn-red">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
