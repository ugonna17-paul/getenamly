import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './Legal.css';

import {
  Check,
  Menu,
  X
} from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel';
import logo from '../src/assets/EnamlyLogo.png'
import Footer from './Footer';
import HowItWorks from './Howitworks';
import DemoSuccessModal from './DemoSuccessModal';
import FeaturesSection from './FeaturesSection';

function LazyYouTube({ url, title, className }) {
  const [loaded, setLoaded] = React.useState(false);
  const videoId = url.match(/\/embed\/([^?&]+)/)?.[1] || "";

  if (loaded) {
    return (
      <iframe
        src={`${url}?autoplay=1`}
        title={title}
        allowFullScreen
        className={className}
        style={{ border: "none" }}
        loading="lazy"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className={className}
      style={{ position: "relative", cursor: "pointer", background: "#000", border: "none", padding: 0 }}
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
        loading="lazy"
      />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
    </button>
  );
}


export default function App() {
  const [currentPMS, setCurrentPMS] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  useEffect(() => {
    if (window.location.hash === '#book-demo' || window.location.pathname === '/demo') {
      setTimeout(() => {
        const el = document.getElementById('book-demo');
        if (el) scrollTo('book-demo');
      }, 300);
    }
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const offset = 120;

    const y = el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="app-root">
      <DemoSuccessModal />
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">

          {/* LOGO */}
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>

          {/* CENTER NAV */}
          <nav className="nav-desktop" aria-label="Main navigation">

            <button
              className="nav-link"
              onClick={() => scrollTo("features")}
            >
              Features
            </button>

            <button
              className="nav-link"
              onClick={() => scrollTo("founder")}
            >
              Why Choose Us
            </button>

            <button
              className="nav-link"
              onClick={() => scrollTo("real-results")}
            >
              Real Results
            </button>

            <button
              className="nav-link"
              onClick={() => scrollTo("how-it-works")}
            >
              How it Works
            </button>

          </nav>

          {/* RIGHT CTA */}
          <button
            className="cta primary"
            onClick={() => scrollTo("book-demo")}
          >
            Book a Demo
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(s => !s)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner container">

              <button onClick={() => scrollTo("features")} className="mobile-link">
                Features
              </button>

              <button onClick={() => scrollTo("founder")} className="mobile-link">
                Why Choose Us
              </button>

              <button onClick={() => scrollTo("real-results")} className="mobile-link">
                Real Results
              </button>

              <button onClick={() => scrollTo("how-it-works")} className="mobile-link">
                How it Works
              </button>

              <button
                className="cta primary block"
                onClick={() => scrollTo("book-demo")}
              >
                Book a Demo
              </button>

            </div>
          </div>
        )}
      </header>


      <main>
        <div className="hero-wrapper">
        <section className="hero" id="hero-section">

          {/* TEXT SIDE */}
          <div className="hero-top">
            <span className="hero-mini">Book A Demo</span>

            <h2 className="hero-title">
              Turn Missed Calls Into <span className="hero-accent">New Patients</span> On Autopilot
            </h2>

            <div className="hero-checks">
              <div><Check /> <p>Never Miss a Lead</p></div>
              <div><Check /> <p>Books Appointment on Autopilot</p></div>
              <div><Check /> <p>24/7 AI Availability</p></div>
              <div><Check /> <p>Smart Call Routing</p></div>
            </div>
          </div>

          {/* VIDEO SIDE */}
          <div className="video-card">
            <LazyYouTube
              url="https://www.youtube.com/embed/u5zY4d5Hg-M"
              title="Demo"
            />
          </div>



        </section>


        <div className='book-form' id="book-demo">
          <div className='book-form-inner'>
          <h2>Book A <span className="teal">Demo</span></h2>
          <p className="book-form-sub">Fill out the form below and we'll get you scheduled.</p>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/Kw3nQ2ZYmngKS06aDVNA"
            style={{
              width: "100%",
              height: "450px",
              border: "none",
              borderRadius: "12px"
            }}
            title="GetEnamly Demo Form"
          />

          {/* A2P Consent Checkboxes */}
          <div className="consent-section">
            <label className="consent-label">
              <input type="checkbox" />
              <span>
                I Consent to Receive SMS Notifications and Alerts from Enamly Inc. Message frequency varies. Message &amp; data rates may apply. Text HELP to 346-637-2352 for assistance. You can reply STOP to unsubscribe at any time.
              </span>
            </label>
            <label className="consent-label">
              <input type="checkbox" />
              <span>
                By checking this box I agree to receive occasional marketing messages from Enamly Inc. Message frequency varies. Message &amp; data rates may apply. Text HELP to 346-637-2352 for assistance. You can reply STOP to unsubscribe at any time.
              </span>
            </label>
            <div className="consent-legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            </div>
          </div>
          </div>
        </div>
        </div>

        {/* HOW IT WORKS — right after Book a Demo */}
        <HowItWorks />

        {/* SCROLLING PMS LOGO STRIP */}
        <section className="pms-strip">
          <p className="pms-strip-label">WORKS WITH YOUR PRACTICE MANAGEMENT SYSTEM</p>
          <div className="pms-strip-track">
            <div className="pms-strip-scroll">
              {/* First set */}
              <img src="https://enamly.ai/images/pms/dentrix.svg" alt="Dentrix" />
              <img src="https://enamly.ai/images/pms/open-dental.svg" alt="Open Dental" />
              <img src="https://enamly.ai/images/pms/eaglesoft.svg" alt="Eaglesoft" />
              <img src="https://enamly.ai/images/pms/curve.svg" alt="Curve Hero" />
              <img src="https://enamly.ai/images/pms/cloud9.svg" alt="Cloud9" />
              <img src="https://enamly.ai/images/pms/dentrix-ascend.svg" alt="Dentrix Ascend" />
              {/* Duplicate for seamless loop */}
              <img src="https://enamly.ai/images/pms/dentrix.svg" alt="Dentrix" />
              <img src="https://enamly.ai/images/pms/open-dental.svg" alt="Open Dental" />
              <img src="https://enamly.ai/images/pms/eaglesoft.svg" alt="Eaglesoft" />
              <img src="https://enamly.ai/images/pms/curve.svg" alt="Curve Hero" />
              <img src="https://enamly.ai/images/pms/cloud9.svg" alt="Cloud9" />
              <img src="https://enamly.ai/images/pms/dentrix-ascend.svg" alt="Dentrix Ascend" />
            </div>
          </div>
        </section>


        {/* FEATURES GRID */}

        <FeaturesSection />


        <TestimonialCarousel />


        {/* RESULTS */}
        <section className="container results" data-aos="fade-up">
          <h2 className="results-title">Real Results From Practices Like Yours</h2>
          <p className="results-subtitle">Measurable impact from day one — here's what Enamly delivers.</p>

          <div className="results-grid">
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">More After-Hours Calls Captured</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">40%</div>
              <div className="stat-label">Increase in New Patients</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">50%</div>
              <div className="stat-label">Less Work for Your Staff</div>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="founder-section" id='founder'>

          <div className="founder-grid">

            {/* LEFT SIDE */}
            <div className="founder-left">

              <span className="tag">WHY PRACTICES CHOOSE ENAMLY</span>

              <h2>
                Phones rang, staff churned, and
                <span className="teal"> after-hours </span>
                calls slipped through. I was done losing patients to voicemail so I
                <span className="teal"> built Enamly.</span>
              </h2>

              {/* <p className="subtext">
                After running a seven-figure practice, I left clinical practice to
                create a scheduling-first voice AI to turn every inquiry into a
                booked appointment, not another missed call. — Dr. Ozumba, DDS
              </p> */}

              {/* <div className="bullet-grid">

                <div>
                  <h4>The problems I couldn’t ignore</h4>

                  <div className="pill">Missed/after-hours calls: New patients chose the next practice that picked up.</div>
                  <div className="pill">Admin overload: Staff juggled FAQs, reschedules, and insurance questions.</div>
                  <div className="pill">Inconsistent follow-ups: Voicemails and sticky notes—no tasks, no tags.</div>
                </div>

                <div>
                  <h4>What Enamly does differently</h4>

                  <div className="pill">Scheduling-first: Answers 24/7 and confirms appointments.</div>
                  <div className="pill">Tasks & routing: Auto follow-ups and escalations.</div>
                  <div className="pill">Built for Dental Ops: HIPAA-aligned and PMS integrations.</div>
                </div>

              </div> */}

            </div>


            {/* RIGHT SIDE */}
            <div className="founder-right">

              <img
                src="https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/c-PersonalBethelOzumba__Premier009_1673539928982-1000x600-1.jpg"
                alt="Dr Bethel Ozumba"
                loading="lazy"
              />

              <h3>Dr. Bethel Ozumba, DDS</h3>
              <p className="role">Dentist & Founder, Enamly</p>

              <button
                className="demo-btn"
                onClick={() => {
                  const el = document.getElementById("book-demo");

                  const offset = 130;
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset -
                    offset;

                  window.scrollTo({
                    top: y,
                    behavior: "smooth"
                  });
                }}
              >
                Book a Demo →
              </button>


            </div>

          </div>

        </section>

        <Footer />


      </main>
    </div >
  );
}
