import { useEffect, useState } from "react";
import './Demo.css'

export default function DemoSuccessModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.get("demo") === "success") {
            setOpen(true);

            setTimeout(() => {
                window.location.href =
                    "https://api.leadconnectorhq.com/widget/booking/iPJNvfxz8pdianTAmAu2";
            }, 3000);
        }
    }, []);

    if (!open) return null;

    return (
        <div className="demo-modal-overlay">
            <div className="demo-modal">

                <div className="checkmark">✓</div>

                <h2>Request Received!</h2>

                <p>
                    We’re redirecting you to book your demo.
                    This will only take a moment.
                </p>

                <div className="loader"></div>

            </div>
        </div>
    );
}
