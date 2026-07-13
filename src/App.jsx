import './App.css';
import { Link } from 'react-router-dom';

const GHL_FORM = "https://api.leadconnectorhq.com/widget/form/Kw3nQ2ZYmngKS06aDVNA";

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
          <div className="ge-foot-in">
            <div>
              <div className="ge-brand"><img src="/assets/enamly-logo-white-trim.png" alt="Enamly" /></div>
              <p className="ge-foot-contact">info@enamly.ai · (346) 608-9855</p>
            </div>
            <div className="ge-foot-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms</Link>
            </div>
          </div>
          <div className="ge-foot-bot"><span>© 2026 Enamly, Inc.</span><span>HIPAA compliant</span></div>
        </div>
      </footer>
    </div>
  );
}
