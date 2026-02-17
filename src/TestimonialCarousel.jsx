import { useState, useEffect } from "react";
import {
    ChevronLeft,
    ChevronRight,
    BarChart3,
    BadgeCheck,
    Clock,
    DollarSign
} from "lucide-react";

import "./Testimonial.css";

const slides = [
    {
        text: "After rolling out Enamly, missed calls dropped 78% and we save 3 hours a day on phones. it books directly in our PMS with clean summarizes, so those calls now turn into confirmed visits.",
        author: "Dr. Loc Tong",
        img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-11.39.35_73115547.jpg",
        stats: [
            { icon: <BadgeCheck />, title: "Results", desc: "+31 Bookings" },
            { icon: <DollarSign />, title: "Impact", desc: "$168k" },
            { icon: <BarChart3 />, title: "After Hours", desc: "+100%" }
        ]
    },
    {
        text: "The difference is outcomes: Enamly keeps our answer rate around 99%, cuts no-shows by 27%, and reduces time-to-book by 41%. It’s the first ‘AI’ that actually books, not just talks.",
        author: "Dr. Justin Sanders — Sanders Dental Studio",
        img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-11.39.41_451997db.jpg",
        stats: [
            { icon: <BarChart3 />, title: "Answer Rate", desc: "99% Live Answer Coverage" },
            { icon: <BadgeCheck />, title: "No-Shows", desc: "–27% Fewer No-Shows" },
            { icon: <Clock />, title: "Time to Book", desc: "41% Faster Booking Time" }
        ]
    },
    {
        text: "We started unintegrated and saw an immediate lift in after-hours bookings. After integrating, new patient bookings up 35% and we reclaimed 8 hrs/weekly of front desk time.",
        author: "Dr. Jonathan Rodney",
        img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-11.39.52_39aebe4a.jpg",
        stats: [
            { icon: <BadgeCheck />, title: "Results", desc: "+35%" },
            { icon: <Clock />, title: "Time Saved", desc: "8 hrs" },
            { icon: <DollarSign />, title: "Impact", desc: "$118k" }
        ]
    },
    {
        text: "We tried many AI receptionists but this one beats them all. No-shows down 23% and production up 17%. That translated to a 20% profit lift in the first quarter.",
        author: "Maria Alvarez — Office Manager",
        img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/13-1.jpg",
        stats: [
            { icon: <BadgeCheck />, title: "No-Shows", desc: "–23% Missed" },
            { icon: <BarChart3 />, title: "Production", desc: "+17% Growth" },
            { icon: <DollarSign />, title: "Profit", desc: "+20% Lift" }
        ]
    }
];


/* CLONES FOR INFINITE LOOP */
const extended = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
];

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const next = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex(i => i + 1);
    };

    const prev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex(i => i - 1);
    };

    /* AUTO SLIDE */
    useEffect(() => {
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [isAnimating]);

    /* CLEAN LOOP RESET */
    const handleTransitionEnd = () => {
        setIsAnimating(false);

        if (index === slides.length + 1) {
            setTransition(false);
            setIndex(1);
        }

        if (index === 0) {
            setTransition(false);
            setIndex(slides.length);
        }
    };

    /* RE-ENABLE TRANSITION */
    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => setTransition(true));
        }
    }, [transition]);

    return (
        <section className="testimonial-section" id="real-results">
            <div className="testimonial-header">
                <h2>Hear From Real Practices</h2>
                <p>Real results from dental practices that switched to Enamly.</p>
            </div>
            <div className="carousel">

                <div
                    className="carousel-track"
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: transition ? "transform .45s ease" : "none"
                    }}
                >
                    {extended.map((s, i) => (
                        <div className="slide" key={i}>
                            <div className="left">
                                <div className="quote">“</div>

                                <button
                                    className="demo-btn"
                                    onClick={() => {
                                        const el = document.getElementById("book-demo");
                                        const y =
                                            el.getBoundingClientRect().top +
                                            window.pageYOffset - 130;

                                        window.scrollTo({ top: y, behavior: "smooth" });
                                    }}
                                >
                                    Book a Demo
                                </button>

                                <p className="text">{s.text}</p>
                                <h4>{s.author}</h4>

                                <div className="stats">
                                    {s.stats.map((stat, j) => (
                                        <div className="stat" key={j}>
                                            <div className="icon">{stat.icon}</div>
                                            <div>
                                                <strong>{stat.title}</strong>
                                                <p>{stat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="right">
                                <img src={s.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ARROWS */}
                <button onClick={prev} className="arrow leftA">
                    <ChevronLeft />
                </button>

                <button onClick={next} className="arrow rightA">
                    <ChevronRight />
                </button>

                {/* DOTS */}
                <div className="dots">
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={i === index - 1 ? "dot active" : "dot"}
                            onClick={() => setIndex(i + 1)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
