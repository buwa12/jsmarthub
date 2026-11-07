import { Link } from "react-router-dom";
import usePageTitle from "../usePageTitle";

export default function About() {
  usePageTitle("About");

  const values = [
    ["Quality", "Work and training that meet clear standards."],
    ["Honesty", "We say plainly what we can and cannot do."],
    ["Practical value", "Useful results over impressive words."],
    ["Empowerment", "Helping people build real capabilities."],
    ["Security awareness", "Responsible, safe use of technology."],
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>About Jsmarthub</h1>
          <p>
            A technology company building digital solutions and developing tech
            talent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow center">
          <h2 className="section-title">Our story</h2>
          <p className="section-sub" style={{ marginBottom: 16 }}>
            Jsmarthub started with a simple idea: technology should be useful,
            understandable and within reach. We build websites and web
            applications that solve real problems, and we teach practical skills
            that help people take part in the digital economy.
          </p>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            We are a founder-led company in its early stages, and we’re building
            it carefully, one honest step at a time.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="cards">
            <div className="card card-dark">
              <p className="tag">Our mission</p>
              <p style={{ marginBottom: 0, fontSize: 19 }}>
                To solve real-world problems through technology, help businesses
                build and improve their digital presence, and empower people
                with practical technology knowledge and skills.
              </p>
            </div>
            <div className="card card-light">
              <p className="tag">Our vision</p>
              <p style={{ marginBottom: 0, fontSize: 19 }}>
                To become a respected technology company in Nigeria and across
                Africa, with two equally important sides: Solutions that serve
                clients, and an Academy that develops talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 36 }}>
            What we stand for
          </h2>
          <div className="care-grid">
            {values.map(([title, text]) => (
              <div className="care-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container founder">
          <figure className="founder-photo">
            <img src="/founder.jpg" alt="Jsmart, founder of Jsmarthub" />
            <figcaption>Jsmart, Founder, Jsmarthub</figcaption>
          </figure>
          <div className="founder-text">
            <p className="eyebrow">Meet the founder</p>
            <h2>Jsmart</h2>
            <p>
              Nwabuwa Chisom the founder of JSmartHub and JSmart Tech,
			  We specializes in web development,
			  software development, AI automation, and digital marketing.
			  We build secure, modern, tech-driven solutions that protect,
			  grow, and transform businesses today and beyond for clients.
            </p>
            <p>
              We lead both Jsmarthub Solutions and Jsmarthub Academy, and are
              passionate about making technology clear, useful and accessible,
              especially for beginners.
            </p>
            <a
              href="https://jsmarthub9-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              See the founder’s portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="section cta center">
        <div className="container">
          <h2>Let’s build something useful together</h2>
          <p>
            Whether you need a website or want to learn a new skill, we’d love
            to hear from you.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link to="/solutions" className="btn btn-red">
              Work with us
            </Link>
            <Link to="/academy" className="btn btn-navy">
              Learn with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
