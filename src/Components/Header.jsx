import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/solutions", "Solutions"],
  ["/academy", "Academy"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={close}>
          <img src="/logo.png" alt="Jsmarthub" />
        </Link>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={close}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-red" onClick={close}>
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
