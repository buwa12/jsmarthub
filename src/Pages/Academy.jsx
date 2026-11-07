import { Link } from "react-router-dom";
import Check from "../Components/Check";
import usePageTitle from "../usePageTitle";

export default function Academy() {
  usePageTitle("Academy");

  const programmes = [
    [
      "Web Development Foundations",
      "HTML, CSS and JavaScript, and how to build and publish simple websites. Great for complete beginners.",
    ],
    [
      "Frontend and Full-Stack Development",
      "Build modern web apps with React, Node.js, Express and MongoDB, from interface to database.",
    ],
    [
      "Practical IT and Digital Skills",
      "Everyday tools and workflows that help you work confidently with technology.",
    ],
    [
      "Cybersecurity Fundamentals",
      "Core concepts, digital safety, phishing awareness and password security, taught with a defensive, responsible focus.",
    ],
  ];

  const audience = [
    "Beginners",
    "Students and graduates",
    "Career changers",
    "Aspiring developers",
    "Anyone curious about IT",
    "Anyone curious about cybersecurity",
  ];

  const learning = [
    "Clear learning goals for each programme",
    "Hands-on projects and exercises",
    "Feedback on your work",
    "Portfolio building",
    "Online and in-person options as they become available",
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Jsmarthub Academy</p>
          <h1>Jsmarthub Academy</h1>
          <p>
            Practical, project-based technology training for beginners and
            aspiring professionals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow center">
          <h2 className="section-title">Our approach</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            We focus on doing, not just theory. You build real projects,
            practise your skills, get feedback, and finish with work you can
            show.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 36 }}>
            Programmes
          </h2>
          <div className="service-grid">
            {programmes.map(([title, text]) => (
              <div className="service" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="note" style={{ marginTop: 32 }}>
            <h3>Coming later</h3>
            <p>
              Cybersecurity analysis and defensive security, and training for
              organisations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow center">
          <h2 className="section-title">Who it’s for</h2>
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

      <section className="section section-soft">
        <div className="container narrow center">
          <h2 className="section-title">How learning works</h2>
          <div className="check-grid">
            {learning.map((item) => (
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
            <h3>What we promise, honestly</h3>
            <p>
              We teach practical skills and support your progress. We don’t
              promise jobs, income or professional certifications, because
              results depend on your effort and your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta center" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Interested in learning with us?</h2>
          <p>
            Tell us what you’d like to learn, and we’ll share upcoming programme
            details with you.
          </p>
          <Link to="/contact" className="btn btn-red">
            Register your interest
          </Link>
        </div>
      </section>
    </>
  );
}
