import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Legal.css";

export default function TermsAndConditions() {
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
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-date">Last updated: February 17, 2026</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using any website, application, or service operated by
          Enamly Inc. ("Enamly," "we," "us," or "our"), including{" "}
          <a href="https://enamly.ai">enamly.ai</a> and{" "}
          <a href="https://getenamly.com">getenamly.com</a>, you agree to be
          bound by these Terms &amp; Conditions. If you do not agree to these
          terms, do not use our services.
        </p>

        <h2>2. Description of Services</h2>
        <p>
          Enamly provides AI-powered virtual receptionist services designed for
          dental practices. Our services include automated call answering,
          patient scheduling, appointment management, and integration with
          practice management systems. We also provide related communications
          including SMS notifications and email communications.
        </p>

        <h2>3. Eligibility</h2>
        <p>
          You must be at least 18 years old and have the legal capacity to enter
          into a binding agreement to use our services. If you are using our
          services on behalf of a business entity, you represent that you have
          the authority to bind that entity to these terms.
        </p>

        <h2>4. User Accounts</h2>
        <p>
          Certain features of our services require you to create an account. You
          are responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account. You
          agree to notify us immediately of any unauthorized use of your
          account.
        </p>

        <h2>5. SMS / Text Message Terms</h2>
        <p>
          By opting in to receive SMS/text messages from Enamly Inc., you agree
          to the following:
        </p>
        <ul>
          <li>
            <strong>Consent:</strong> You consent to receive SMS messages from
            Enamly Inc. at the phone number you provide. Consent is not a
            condition of purchase or service.
          </li>
          <li>
            <strong>Message types:</strong> Messages may include appointment
            confirmations, scheduling reminders, service notifications, and (if
            separately opted in) marketing communications.
          </li>
          <li>
            <strong>Message frequency:</strong> Message frequency varies based
            on your interactions and service usage.
          </li>
          <li>
            <strong>Costs:</strong> Message and data rates may apply. Contact
            your wireless carrier for details about your text plan.
          </li>
          <li>
            <strong>Opt-out:</strong> You may opt out at any time by replying{" "}
            <strong>STOP</strong> to any message. You will receive a one-time
            confirmation of your opt-out.
          </li>
          <li>
            <strong>Help:</strong> For assistance, reply <strong>HELP</strong>{" "}
            to any message, call{" "}
            <a href="tel:3466372352">(346) 637-2352</a>, or email{" "}
            <a href="mailto:support@enamly.ai">support@enamly.ai</a>.
          </li>
          <li>
            <strong>Carrier liability:</strong> Carriers are not liable for
            delayed or undelivered messages.
          </li>
          <li>
            <strong>No sharing:</strong> We will not sell, rent, or share your
            phone number or opt-in information with third parties for their
            marketing purposes.
          </li>
        </ul>

        <h2>6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services for any unlawful or unauthorized purpose.</li>
          <li>Interfere with or disrupt the operation of our services.</li>
          <li>
            Attempt to gain unauthorized access to any part of our systems.
          </li>
          <li>
            Use our services to transmit harmful, abusive, or objectionable
            content.
          </li>
          <li>
            Reverse-engineer, decompile, or attempt to extract the source code
            of our software.
          </li>
        </ul>

        <h2>7. HIPAA and Patient Data</h2>
        <p>
          Enamly processes protected health information (PHI) on behalf of
          dental practice clients. Such processing is governed by Business
          Associate Agreements (BAAs) between Enamly and the dental practice. If
          you are a dental practice client, the BAA supplements these terms with
          respect to PHI handling. Enamly maintains HIPAA-compliant safeguards
          for all patient data.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and intellectual property displayed on
          our websites and services are the property of Enamly Inc. or its
          licensors. You may not reproduce, distribute, or create derivative
          works from our content without prior written consent.
        </p>

        <h2>9. Disclaimers</h2>
        <p>
          Our services are provided "as is" and "as available" without
          warranties of any kind, express or implied. Enamly does not guarantee
          that our services will be uninterrupted, error-free, or completely
          secure. Enamly does not provide medical, dental, or clinical advice.
          Our AI receptionist facilitates scheduling and administrative tasks
          only.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Enamly Inc. shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or relating to your use of our
          services, regardless of the theory of liability.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Enamly Inc., its officers,
          employees, and agents from any claims, damages, or expenses arising
          from your use of our services or violation of these terms.
        </p>

        <h2>12. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our
          services at any time, with or without notice, for conduct that we
          believe violates these terms or is harmful to other users, us, or
          third parties.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the
          laws of the State of Texas, without regard to its conflict of laws
          provisions.
        </p>

        <h2>14. Changes to These Terms</h2>
        <p>
          We may revise these Terms &amp; Conditions at any time by updating
          this page. Your continued use of our services after any changes
          constitutes acceptance of the revised terms.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have any questions about these Terms &amp; Conditions, please
          contact us:
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
          See also: <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
