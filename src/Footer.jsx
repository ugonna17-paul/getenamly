import { Mail } from "lucide-react";
import { Instagram, Music2 } from "lucide-react";
import "./Footer.css";
import white from '../src/assets/all white enamly logo.png'
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import enam from '../src/assets/hippa compliant.png'

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 120;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <footer className="footer">

            <div className="footer-inner">

                {/* LEFT */}
                <div className="footer-left">
                    <div className="brand-row">
                        <img src={white} alt="" />
                    </div>

                    <div className="tag-row">
                        <span>Answer Every Smile</span>

                        <div className="hipaa">
                            <img src={enam} alt="HIPAA" />
                        </div>
                    </div>

                    <p className="footer-desc">
                        Trusted by hundreds of private practices, DSOs, and
                        dental groups across the U.S.
                    </p>
                </div>

                {/* CENTER */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo("features"); }}>Features</a>
                    <a href="#founder" onClick={(e) => { e.preventDefault(); scrollTo("founder"); }}>Why Choose Us</a>
                    <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo("how-it-works"); }}>How It Works</a>
                </div>

                {/* RIGHT */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>

                    <div className="email">
                        <Mail size={18} />
                        <a href="mailto:support@enamly.ai" style={{ color: 'white', textDecoration: 'none' }}>support@enamly.ai</a>
                    </div>

                    <div className="socials">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/enamly.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn"
                        >
                            <FaInstagram />
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@enamly.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn"
                        >
                            <SiTiktok />
                        </a>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
                Copyright © 2026 enamly, All rights reserved.
            </div>

        </footer>
    );
}
