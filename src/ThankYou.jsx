import { useEffect } from "react";

export default function ThankYou() {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 5000);
    }, []);

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "#f7fbfb"
        }}>
            <h1>✅ Demo Scheduled!</h1>
            <p>Thanks for booking your demo.</p>
            <p>Redirecting you home...</p>
        </div>
    );
}
