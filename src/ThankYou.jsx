import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ThankYou.css';
import logo from '../src/assets/EnamlyLogo.png';

export default function ThankYou() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(8);

    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
            window.fbq("track", "CompleteRegistration");
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="thankyou-page">
            <div className="thankyou-card">
                <img src={logo} alt="Enamly" className="thankyou-logo" />

                <div className="thankyou-icon">✓</div>

                <h1>Demo <span>Scheduled!</span></h1>

                <p className="thankyou-msg">
                    Thanks for booking your demo with Enamly. We'll send you a
                    confirmation email with all the details shortly.
                </p>

                <p className="thankyou-redirect">
                    Redirecting you home in {countdown}s…
                </p>

                <button className="demo-btn" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}
