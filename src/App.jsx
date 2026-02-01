import { useEffect } from "react";
import RequestForm from "./RequestForm";
import logo from "./assets/Germinator.jpg";
import heroBg from "./assets/cleaningsite.jpg";
import "./App.css";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand">
            <img src={logo} alt="Germinator Cleaning logo" className="nav-logo" />
            <span className="brand-name">Germinator Cleaning</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#request">Contact</a>
            <a href="#request" className="nav-btn">
              Request Cleaning
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-kicker">OTTAWA • COMMERCIAL & DEEP CLEANING</p>
          <h1>Killing Germs. Elevating Clean.</h1>
          <p className="hero-sub">
            Clean spaces. Professional results.
          </p>

          <div className="hero-actions">
            <a href="#request" className="btn btn-primary">
              Request Cleaning
            </a>
            <a href="#about" className="btn btn-ghost">
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container card">
          <h2>About Us</h2>
          <p className="muted">
            With over a combined 20 years of experience, our family-owned cleaning company
            has been dedicated to providing exceptional residential and commercial cleaning
            services with a personal touch. Founded on the values of honesty, reliability,
            and hard work, we have built a strong reputation in the community for our
            consistent quality and attention to detail. From small apartments to large
            office spaces, our experienced team treats every job with the same level of care
            and professionalism that has kept our customers coming back for two decades.
            <br /><br />
            As a family-run business, we understand the importance of trust and take pride in
            creating clean, healthy environments for our clients. Our hands-on approach ensures
            that every member of our team is trained to meet our high standards, using eco-friendly
            products and proven techniques. Whether it’s a one-time deep clean or routine maintenance,
            we’re committed to making your space shine—just like we would our own.
          </p>
        </div>
      </section>

      {/* REQUEST */}
      <section id="request" className="section">
        <div className="container card">
          <h2>Request a Cleaning</h2>
          <p className="muted">
            Tell us what you need. We’ll reply with pricing and available times.
          </p>

          <RequestForm />
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Germinator Cleaning — All rights reserved.</div>
      </footer>
    
    </div>
  );
  
}
