import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FeaturesSection.css";

const FeaturesSection = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const cards = [
        {
            img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/Untitled-400-x-400-px.jpg",
            title: "Calls & Conversations",
            text: "AI receptionist handles calls and texts with natural conversations. Never miss a patient inquiry. Our AI receptionist handles both calls and texts, offering natural, comfortable conversations that boost patient satisfaction."
        },
        {
            img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/Untitled-design-18.jpg",
            title: "Appointment Scheduling",
            text: "Automated scheduling that books, reschedules, and confirms appointments across channels, syncing with calendars and PMS systems for seamless clinic workflow."
        },
        {
            img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/1-7-1.jpg",
            title: "Integrations",
            text: "Effortlessly integrates with all major dental practice management systems including Open Dental, Dentrix, Eaglesoft and many others."
        },
        {
            img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/Untitled-400-x-400-px-3.jpg",
            title: "Call Routing & Notifications",
            text: "Smart call routing prioritizes emergencies and directs calls to the right team instantly, with real time alerts to avoid missed opportunities."
        },
        {
            img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/image-1.png",
            title: "Analytics & Call Logs",
            text: "Get detailed insights on every interaction, including call summaries, missed calls, and conversion tracking, helping you refine operations and grow revenue."
        },
        {
            img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/Untitled-400-x-400-px-6.jpg",
            title: "Security & Compliance",
            text: "HIPAA compliant encryption and audit logs ensure every call and message stays private while meeting all healthcare data protection standards."
        }
    ];

    return (
        <section className="features" id="features">

            <h2 className="features-title">
                Features and <span>Integrations</span>
            </h2>

            <p className="features-subtitle">
                Everything your practice needs to capture leads, book patients, and streamline operations — powered by AI.
            </p>

            <div className="features-grid">

                {cards.map((card, i) => (
                    <div
                        className="feature-card"
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={i * 120}
                    >

                        {/* IMAGE WRAP FOR INNER SPACE */}
                        <div className="img-wrap">
                            <img src={card.img} alt={card.title} />
                        </div>

                        <div className="feature-content">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default FeaturesSection;
