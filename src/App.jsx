import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

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


export default function App() {
  const [currentPMS, setCurrentPMS] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
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
            <iframe
              src="https://www.youtube.com/embed/u5zY4d5Hg-M"
              title="Demo"
              allowFullScreen
            />
          </div>



        </section>


        <div className='book-form' id="book-demo">
          <div className='book-form-inner'>
          <h2>Book A <span className="teal">Demo</span></h2>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/RUliCXLKWBUPfwStp6h1"
            style={{
              width: "100%",
              height: "390px",
              border: "none",
              borderRadius: "12px"
            }}
            title="GetEnamly Demo Form"
          />
          </div>
        </div>
        </div>

        {/* support section */}

        <section className="support-section">
          <div className="support-inner">
          <h3>Trusted Integrations</h3>
          <h2>Works With Your Practice Management System</h2>
          <div className="support-logos">
            <div className="logo-pill">
              <img src="https://1000logos.net/wp-content/uploads/2021/04/Dentrix-logo.png" alt="Dentrix" />
            </div>

            <div className="logo-pill">
              <svg viewBox="0 0 220 40" className="pms-logo" aria-label="Open Dental">
                <text x="110" y="28" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="22" fontWeight="700"><tspan fill="#2563eb">Open</tspan><tspan fill="#1e40af"> Dental</tspan></text>
              </svg>
            </div>

            <div className="logo-pill">
              <svg viewBox="0 0 200 40" className="pms-logo" aria-label="Eaglesoft">
                <text x="100" y="28" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#1e3a5f">Eaglesoft</text>
              </svg>
            </div>

            <div className="logo-pill">
              <svg viewBox="0 0 200 40" className="pms-logo" aria-label="Curve Hero">
                <text x="100" y="28" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="22" fontWeight="700"><tspan fill="#e85d26">Curve</tspan><tspan fill="#4a4a4a"> Hero</tspan></text>
              </svg>
            </div>

            <div className="logo-pill">
              <svg viewBox="0 0 180 40" className="pms-logo" aria-label="Cloud 9">
                <text x="90" y="28" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="22" fontWeight="700"><tspan fill="#0ea5e9">Cloud</tspan><tspan fill="#6366f1">9</tspan></text>
              </svg>
            </div>
          </div>
          </div>
        </section>


        {/* FEATURES GRID */}

        <FeaturesSection />


        <TestimonialCarousel />

        {/* HOW IT WORKS */}
        <HowItWorks />


        {/* RESULTS */}
        <section className="container results" data-aos="fade-up">
          <h2 className="results-title">Real Results From Practices Like Yours</h2>

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
