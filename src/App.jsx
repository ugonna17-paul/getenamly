import './App.css';
import { Link } from 'react-router-dom';

const GHL_FORM = "https://api.leadconnectorhq.com/widget/form/Kw3nQ2ZYmngKS06aDVNA";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/enamlyai", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", href: "https://www.instagram.com/enamly.ai/", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "TikTok", href: "https://www.tiktok.com/@enamly.ai", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48 6.3 6.3 0 001.86-4.49V8.75a8.26 8.26 0 004.72 1.48V6.79a4.83 4.83 0 01-1-.1z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/enamly", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export default function App() {
  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="ge">
      {/* HEADER — stripped: logo + one CTA */}
      <nav className="ge-nav">
        <div className="ge-wrap ge-nav-in">
          <div className="ge-brand">
            <img src="/assets/enamly-logo-dark.png" alt="Enamly" />
            <span className="ge-pill">AI receptionist for dental practices</span>
          </div>
          <button className="ge-btn ge-btn-primary" onClick={scrollToBook}>Book a demo</button>
        </div>
      </nav>

      {/* HERO — form-forward */}
      <header className="ge-hero">
        <div className="ge-wrap ge-hero-in">
          <div>
            <span className="ge-eyebrow">You&apos;re one step away</span>
            <h1>See Enamly book a patient, <b>live.</b></h1>
            <p className="ge-sub">Grab a 15-minute walkthrough. We&apos;ll show you the exact calls your practice is missing, then book a real call straight into a sandbox schedule while you watch.</p>
            <div className="ge-checks">
              <div><span className="ge-ic"><svg viewBox="0 0 24 24" fill="none" stroke="#0D8C7E" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg></span>Books directly into your PMS</div>
              <div><span className="ge-ic"><svg viewBox="0 0 24 24" fill="none" stroke="#0D8C7E" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg></span>Answers every call, 24/7, in English &amp; Spanish</div>
              <div><span className="ge-ic"><svg viewBox="0 0 24 24" fill="none" stroke="#0D8C7E" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg></span>HIPAA compliant, built by a dentist</div>
            </div>
            <div className="ge-miniproof">
              <span>Trusted by</span>
              <img src="/assets/logos-mono/gentle.png" alt="Gentle Dentistry" />
              <img src="/assets/logos-mono/ge.png" alt="GeDental Wellness" />
              <img src="/assets/logos-mono/steele.png" alt="Steele Creek Smiles" />
              <img src="/assets/logos-mono/ja.png" alt="JA Dental Group" />
            </div>
          </div>
          <div className="ge-formcard" id="book">
            <h3>Book your demo</h3>
            <p className="ge-fh-sub">15 minutes. No slides. We show you your missed-call revenue live.</p>
            <iframe
              src={GHL_FORM}
              title="Book a Demo - Enamly"
              style={{ width: "100%", height: "720px", border: "none", borderRadius: "12px", background: "transparent" }}
            />
            <p className="ge-consent">
              By submitting, you agree to receive messages from Enamly Inc. Msg &amp; data rates may apply. Reply STOP to opt out.{" "}
              <Link to="/privacy-policy">Privacy</Link> · <Link to="/terms-and-conditions">Terms</Link>
            </p>
          </div>
        </div>
      </header>

      {/* PROOF BAR */}
      <div className="ge-proofbar">
        <div className="ge-wrap ge-proofbar-in">
          <div className="ge-pstat"><div className="ge-n">$53,020</div><div className="ge-l">in added production, tracked through checkout</div></div>
          <div className="ge-pdiv" />
          <div className="ge-pstat"><div className="ge-n">27</div><div className="ge-l">new patients, their best month on record</div></div>
          <div className="ge-pdiv" />
          <div className="ge-pquote">
            <img src="/assets/dr-loc.png" alt="Dr. Loc Tong" />
            <div>
              <p>&quot;Every missed call is a patient who books somewhere else. Enamly answers them.&quot;</p>
              <span>Dr. Loc Tong · Gentle Dentistry</span>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section>
        <div className="ge-wrap">
          <div className="ge-sec-head"><span className="ge-eyebrow">How it works</span><h2>Live in days, <b>not months.</b></h2></div>
          <div className="ge-steps">
            <div className="ge-step"><div className="ge-num">1</div><h3>15-minute demo</h3><p>We show you the calls you&apos;re missing and book one live into a sandbox schedule.</p></div>
            <div className="ge-step"><div className="ge-num">2</div><h3>We connect your PMS</h3><p>Open Dental, Dentrix, Eaglesoft, Oryx, and more. Setup in days, not weeks.</p></div>
            <div className="ge-step"><div className="ge-num">3</div><h3>It answers every call</h3><p>Day or night, Enamly picks up, answers questions, and books the appointment.</p></div>
          </div>
        </div>
      </section>

      {/* WATCH IT WORK */}
      <section className="ge-band-white">
        <div className="ge-wrap ge-watch">
          <div className="ge-sched">
            <div className="ge-sched-head"><span className="ge-sched-title">Today&apos;s schedule</span><span className="ge-pms"><span className="ge-d" />Open Dental · synced</span></div>
            <div className="ge-row ge-filled"><span className="ge-t">8:00</span><span className="ge-c">Cleaning · Maria S.</span></div>
            <div className="ge-row ge-new"><span className="ge-t">9:00</span><span className="ge-c"><b>New patient</b> · booked by Enamly</span><span className="ge-tick"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg></span></div>
            <div className="ge-row ge-open"><span className="ge-t">10:00</span><span className="ge-c">Open</span></div>
            <div className="ge-row ge-filled"><span className="ge-t">11:00</span><span className="ge-c">Crown seat · David R.</span></div>
          </div>
          <div>
            <span className="ge-eyebrow">Not a message-taker</span>
            <h2 style={{ marginTop: "12px" }}>It answers, then it <b>actually books.</b></h2>
            <p>A patient calls at 9 PM. Enamly answers, checks your live availability, and writes a confirmed appointment into your schedule before they hang up. No voicemail, no callback, no lost patient.</p>
            <button className="ge-btn ge-btn-ghost" onClick={scrollToBook}>▶ See it in your demo</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="ge-wrap">
          <div className="ge-sec-head"><span className="ge-eyebrow">Real dentists</span><h2>Don&apos;t take our word for it.</h2></div>
          <div className="ge-tgrid">
            <div className="ge-vcard"><img src="/assets/poster-loc.jpg" alt="Dr. Loc Tong" /><div className="ge-play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span></div></div>
            <div className="ge-vcard"><img src="/assets/poster-sanders.jpg" alt="Dr. Justin Sanders" /><div className="ge-play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span></div></div>
            <div className="ge-vcard"><img src="/assets/poster-john.jpg" alt="Dr. John Bushrod" /><div className="ge-play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span></div></div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="ge-band-white">
        <div className="ge-wrap ge-founder">
          <div className="ge-fphoto"><img src="/assets/founder.jpg" alt="Dr. Bethel Ozumba" /></div>
          <div>
            <span className="ge-eyebrow">Built by a dentist</span>
            <h2 style={{ marginTop: "12px" }}>I ran a seven-figure practice. The phone was always the leak, <b>so I built Enamly.</b></h2>
            <p className="ge-sig">Dr. Bethel Ozumba <span>· Founder, Enamly · Howard University, DDS</span></p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="ge-wrap">
          <div className="ge-final">
            <h2>See what Enamly books <b>for your practice.</b></h2>
            <p>15 minutes. We&apos;ll show you the exact dollars sitting on the other side of your missed calls.</p>
            <button className="ge-btn ge-btn-primary" style={{ fontSize: "17px", padding: "16px 30px" }} onClick={scrollToBook}>Book my demo</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ge-footer">
        <div className="ge-wrap">
          <div className="ge-foot-top">
            <div className="ge-foot-brand">
              <img src="/assets/enamly-logo-white-trim.png" alt="Enamly" />
              <p className="ge-foot-tagline">Answer Every Smile</p>
              <p className="ge-foot-sub">The AI front desk built by a dentist.</p>
            </div>
            <div className="ge-foot-contact">
              <h4>Contact</h4>
              <a href="mailto:team@getenamly.com">team@getenamly.com</a>
              <a href="tel:3466089855">(346) 608-9855</a>
              <div className="ge-socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="ge-foot-bot">
            <span>© 2026 Enamly, Inc.</span>
            <span>HIPAA compliant <span className="ge-dot">·</span> <Link to="/privacy-policy">Privacy</Link> <span className="ge-dot">·</span> <Link to="/terms-and-conditions">Terms</Link></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
