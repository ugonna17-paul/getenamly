import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Legal.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <strong>Enamly</strong>
            </Link>
          </div>
          <Link to="/" className="cta primary">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="legal-page">
        <h1>Privacy Policy</h1>
        <p className="legal-date">Last updated: February 17, 2026</p>

        <h2>1. Who We Are</h2>
        <p>
          Enamly Inc. ("Enamly," "we," "us," or "our") provides AI-powered
          virtual receptionist services for dental practices. Our registered
          business address is in the United States. You can reach us at{" "}
          <a href="mailto:support@enamly.ai">support@enamly.ai</a> or by phone
          at <a href="tel:3466372352">(346) 637-2352</a>.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Contact information</strong> — name, email address, phone
            number, and practice name provided through our website forms.
          </li>
          <li>
            <strong>Communications data</strong> — records of calls, messages,
            and interactions processed through our AI receptionist platform on
            behalf of dental practices.
          </li>
          <li>
            <strong>Usage data</strong> — information about how you interact
            with our website, including pages visited, browser type, and device
            information.
          </li>
          <li>
            <strong>Business information</strong> — practice management system
            type, practice size, and other details relevant to providing our
            services.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services.</li>
          <li>Respond to your inquiries and schedule demos or appointments.</li>
          <li>
            Send SMS notifications, alerts, and service-related communications.
          </li>
          <li>
            Send occasional marketing messages (only with your explicit
            consent).
          </li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>

        <h2>4. SMS / Text Message Communications</h2>
        <p>
          By providing your phone number and opting in on our website or through
          our services, you consent to receive SMS/text messages from Enamly
          Inc. These may include:
        </p>
        <ul>
          <li>
            <strong>Transactional messages</strong> — appointment confirmations,
            reminders, scheduling links, and service-related notifications.
          </li>
          <li>
            <strong>Marketing messages</strong> — occasional promotional
            messages about our services (only if you opt in separately).
          </li>
        </ul>
        <p>
          <strong>Message frequency varies.</strong> Message and data rates may
          apply. Carriers are not liable for delayed or undelivered messages.
        </p>
        <p>
          <strong>To opt out:</strong> Reply <strong>STOP</strong> to any
          message to unsubscribe. After opting out, you will receive a one-time
          confirmation message. You will no longer receive SMS messages from us
          unless you re-subscribe.
        </p>
        <p>
          <strong>For help:</strong> Reply <strong>HELP</strong> to any message
          or contact us at <a href="tel:3466372352">(346) 637-2352</a> or{" "}
          <a href="mailto:support@enamly.ai">support@enamly.ai</a>.
        </p>
        <p>
          We do not sell, rent, or share your phone number or any information
          collected through SMS opt-in with third parties for their marketing
          purposes.
        </p>

        <h2>5. HIPAA Compliance</h2>
        <p>
          Enamly processes certain protected health information (PHI) on behalf
          of dental practices in the course of providing our AI receptionist
          services. We maintain administrative, technical, and physical
          safeguards to protect PHI in compliance with the Health Insurance
          Portability and Accountability Act (HIPAA). This includes encrypted
          data storage, access controls, and Business Associate Agreements
          (BAAs) with covered entities.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          information, including:
        </p>
        <ul>
          <li>Encrypted storage using AWS S3 with KMS encryption at rest.</li>
          <li>Secure HTTPS connections for all data transmission.</li>
          <li>
            Row-level security and access controls on our database systems.
          </li>
          <li>Regular security audits and monitoring.</li>
        </ul>

        <h2>7. Third-Party Services</h2>
        <p>
          We use trusted third-party service providers to operate our platform.
          These providers are bound by contractual obligations to protect your
          data. Categories of third-party services include:
        </p>
        <ul>
          <li>Cloud hosting and infrastructure providers.</li>
          <li>SMS and communication delivery services.</li>
          <li>Practice management system integration middleware.</li>
          <li>Analytics and performance monitoring tools.</li>
          <li>Payment processing services.</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>

        <h2>8. Cookies and Tracking</h2>
        <p>
          Our website may use cookies and similar tracking technologies to
          improve your experience, analyze site traffic, and understand usage
          patterns. You can control cookie settings through your browser
          preferences.
        </p>

        <h2>9. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Opt out of marketing communications at any time.</li>
          <li>Withdraw consent for SMS messages by replying STOP.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:support@enamly.ai">support@enamly.ai</a>.
        </p>

        <h2>10. Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 18. We
          do not knowingly collect personal information from children.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Last updated" date. We
          encourage you to review this policy periodically.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@enamly.ai">support@enamly.ai</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:3466372352">(346) 637-2352</a>
          </li>
        </ul>

        <hr className="legal-divider" />
        <p className="legal-crosslink">
          See also:{" "}
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
