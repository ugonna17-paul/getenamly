import { useState } from "react";
import { Phone, Calendar, Database, X } from "lucide-react";
import './Howitworks.css'
// import demoVideo from '../src/assets/Updated Final.mp4'

export default function HowItWorks() {
    const [open, setOpen] = useState(false);

    return (
        <section className="container how-wrap" id="how-it-works">
            {/* LEFT TEXT SIDE */}
            <div className="how-left">
                <h3 className="how-right-titles">
                    See How <span style={{ color: "#14b8a6" }}>ENAMLY</span> Works
                </h3>

                <h2>
                    Call Our Demo Line <br />
                    Or <span>Watch Enamly</span> In Action
                </h2>

                <p className="contact">
                    CONTACT: (346) 608-9855
                </p>

                <p className="desc">
                    This demo shows how our AI receptionist answers calls,
                    gathers patient info, and books appointments instantly.
                    Every interaction is real, recorded, and HIPAA-safe.
                </p>

                <button
                    className="demo-btn"
                    onClick={() => setOpen(true)}
                >
                    See Enamly In Action →
                </button>
            </div>

            {/* RIGHT SIDE (STEPS CONTAINER) */}
            <div className="how-box">

                <div className="how-step">
                    <div className="icon-circle"><Phone /></div>
                    <p><strong>1.</strong> Enamly Answers Calls 24/7</p>
                </div>

                <div className="how-step">
                    <div className="icon-circle"><Calendar /></div>
                    <p><strong>2.</strong> Schedules Appointments Instantly</p>
                </div>

                <div className="how-step">
                    <div className="icon-circle"><Database /></div>
                    <p><strong>3.</strong> Syncs with your Practice Software</p>
                </div>

            </div>

            {/* VIDEO MODAL */}
            {open && (
                <div className="modal-overlay" onClick={() => setOpen(false)}>
                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <X
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <video
                            src="https://res.cloudinary.com/ugocode/video/upload/v1770576853/Updated_final_1_jwdbcy.mp4"
                            controls
                            poster="/thumbnail.jpg"
                        />


                    </div>
                </div>
            )}

        </section>
    );
}
