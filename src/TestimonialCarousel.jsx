import React, { useState, useEffect } from "react";
import {
    ChevronLeft,
    ChevronRight,
    BarChart3,
    BadgeCheck,
    Clock,
    DollarSign,
    TrendingUp
} from "lucide-react";

import "./Testimonial.css";

function LazyYouTube({ url, title }) {
    const [loaded, setLoaded] = useState(false);
    const videoId = url.match(/\/embed\/([^?&]+)/)?.[1] || "";

    if (loaded) {
        return (
            <iframe
                src={`${url}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="testimonial-video-iframe"
                style={{ border: "none" }}
            />
        );
    }

    return (
        <button
            onClick={() => setLoaded(true)}
            className="testimonial-video-thumb"
            aria-label={`Play ${title}`}
        >
            <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                loading="lazy"
            />
            <div className="testimonial-play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
            </div>
        </button>
    );
}

const slides = [
    {
        text: "On the weekends and after hours, I was probably missing about 10 to 12 calls a week, which means that\u2019s 10 to 12 potential patients for your office. They would return those phone calls only to find out the patient has already scheduled at a different office. Now Enamly solves that problem.",
        author: "Dr. Loc Tong",
        title: "Gentle Dentistry Tampa",
        img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-11.39.35_73115547.jpg",
        videoUrl: "https://www.youtube.com/embed/EhZu6L7RGjk",
        stats: [
            { icon: <TrendingUp />, title: "Bookings", desc: "+21/mo" },
            { icon: <DollarSign />, title: "Revenue Impact", desc: "$78k" },
            { icon: <BarChart3 />, title: "After-Hours Answer", desc: "+100%" }
        ]
    },
    {
        text: "Before Enamly, I had a lot of missed calls, dropped calls, lost opportunity. Now I\u2019m able to follow people and track it. It frees up the front desk staff and allows you to track what they do. In dentistry, things are evolving and you need to use it.",
        author: "Dr. John Bushrod",
        title: "National Orthodontics & Pediatrics",
        img: "/images/dr-bushrod.png",
        videoUrl: "https://www.youtube.com/embed/L5t4KgIP-cA",
        stats: [
            { icon: <BarChart3 />, title: "Calls Captured", desc: "95%" },
            { icon: <Clock />, title: "Staff Time Freed", desc: "~5 hrs/wk" },
            { icon: <TrendingUp />, title: "Follow-Up Rate", desc: "100%" }
        ]
    },
    {
        text: "When we reached out to patients later on, a lot of them were already booked at another office. It\u2019s very rare now that we lose any patient. At any moment you call, I\u2019m either going to pick up or Enamly is going to pick up. Every practice should go through a trial.",
        author: "Dr. Jonathan Rodney",
        title: "Pure Dentistry, NYC",
        img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-11.39.52_39aebe4a.jpg",
        videoUrl: "https://www.youtube.com/embed/R5ak16dn1AU",
        stats: [
            { icon: <BarChart3 />, title: "Answer Rate", desc: "100%" },
            { icon: <BadgeCheck />, title: "Patients Lost", desc: "Near Zero" },
            { icon: <TrendingUp />, title: "After-Hours Bookings", desc: "+18/mo" }
        ]
    },
    {
        text: "Numbers are hard because I don\u2019t miss calls anymore. I got a two-year-old at home, wife at home. I\u2019m trying to get out of here, but I still want the practice to thrive. Enamly answered, got the info and I was like, this is not just a new patient, this is more than that.",
        author: "Dr. Justin Sanders",
        title: "Sanders Dental Studio",
        img: "https://plum-pelican-648777.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-11.39.41_451997db.jpg",
        videoUrl: "https://www.youtube.com/embed/LnfTnzArxdY",
        stats: [
            { icon: <BarChart3 />, title: "Answer Rate", desc: "100%" },
            { icon: <Clock />, title: "After-Hours Coverage", desc: "24/7" },
            { icon: <TrendingUp />, title: "Response Time", desc: "<1 min" }
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
                                <div className="quote">"</div>

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

                                <div className="testimonial-author">
                                    <img src={s.img} alt={s.author} className="author-avatar" loading="lazy" />
                                    <div>
                                        <h4>{s.author}</h4>
                                        {s.title && <p className="author-title">{s.title}</p>}
                                    </div>
                                </div>

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
                                {s.videoUrl ? (
                                    <div className="testimonial-video-wrapper">
                                        <LazyYouTube url={s.videoUrl} title={`${s.author} testimonial`} />
                                    </div>
                                ) : (
                                    <img src={s.img} alt={s.author} loading="lazy" />
                                )}
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
