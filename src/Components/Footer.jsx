import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Jsmarthub</h4>
            <p>Building Digital Solutions. Empowering Tech Talent.</p>
          </div>
          <div>
            <h4>Pages</h4>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/solutions">Solutions</Link>
            </p>
            <p>
              <Link to="/academy">Academy</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>08066804067</p>
            <p>Jsmarthub@gmail.com</p>
            <p>Owerri, Imo State, Nigeria</p>
          </div>
          <div>
            <h4>Follow us</h4>
            <SocialIcons />
          </div>
        </div>
        <p className="footer-bottom">
          "© 2026 Jsmarthub. All rights reserved."
        </p>
      </div>
    </footer>
  );
}
