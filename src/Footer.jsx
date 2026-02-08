import { Mail } from "lucide-react";
import { Instagram, Music2 } from "lucide-react";
import "./Footer.css";
import white from '../src/assets/all white enamly logo.png'
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import enam from '../src/assets/hippa compliant.png'

export default function Footer() {
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
                            {/* <span>HIPAA<br />COMPLIANT</span> */}
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
                    <a href="#">How It Works</a>
                    <a href="#">Why Choose us</a>
                    <a href="#">ROI Calculator</a>
                    <a href="#">FAQs</a>
                </div>

                {/* RIGHT */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>

                    <div className="email">
                        <Mail size={18} />
                        <span>info@getenamly.com</span>
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
                Copyright © 2025 enamly, All rights reserved.
            </div>

        </footer>
    );
}
