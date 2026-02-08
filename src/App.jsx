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
            onClick={() => scrollTo("hero-section")}
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

              <button onClick={() => scrollTo("why-us")} className="mobile-link">
                Why Choose Us
              </button>

              <button onClick={() => scrollTo("how-it-works")} className="mobile-link">
                How it Works
              </button>

              <button
                className="cta primary block"
                onClick={() => scrollTo("hero-section")}
              >
                Book a Demo
              </button>

            </div>
          </div>
        )}
      </header>


      <main>
        <section className="hero" id="hero-section">

          {/* TEXT SIDE */}
          <div className="hero-top">
            <span className="hero-mini">Book A Demo</span>

            <h2 className="hero-title">
              Turn Missed Calls Into New <br />
              Patients On Autopilot
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


        <div className='book-form'>
          <h2>Book A <span style={{color: "#1cc7c1"}}>Demo</span></h2>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/RUliCXLKWBUPfwStp6h1"
            style={{
              width: "100%",
              height: "500px",
              border: "none",
              borderRadius: "20px"
            }}
            title="GetEnamly Demo Form"
          />
        </div>

        {/* support section */}

        <section className="support-section">
          <div className="support-logos">
            <div className="logo-pill">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4_CuuFaVER8Nnh_4C0yVIiX3GxOT5bvUDg&s" alt="Integration 1" />
            </div>

            <div className="logo-pill">
              <img src="https://1000logos.net/wp-content/uploads/2021/04/Dentrix-logo.png" alt="Integration 2" />
            </div>

            <div className="logo-pill">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7J-f7RjRWB55L3Al8wDH0g9xCQ5TDh9dvtw&s" alt="Integration 3" />
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
                  const el = document.getElementById("hero-section");

                  const offset = 130; // adjust this number
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
