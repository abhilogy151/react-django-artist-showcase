import { useEffect } from "react";

declare global {
  interface Window {
    Pi: any;
  }
}

export default function PiTest() {

  useEffect(() => {
    // Load Pi SDK dynamically
    const script = document.createElement("script");
    script.src = "https://sdk.minepi.com/pi-sdk.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      window.Pi.init({
        version: "2.0",
        sandbox: true // ✅ enough for checklist
      });
    };
  }, []);

  const payWithPi = () => {
    window.Pi.createPayment(
      {
        amount: 0.01,
        memo: "Portfolio app verification",
        metadata: { purpose: "pi-checklist" }
      },
      {
        onReadyForServerApproval: () => {},
        onReadyForServerCompletion: () => {
          alert("✅ Transaction successful!");
        },
        onCancel: () => alert("❌ Payment cancelled"),
        onError: (err: any) => {
          console.error(err);
          alert("⚠️ Payment failed");
        }
      }
    );
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Pi App Verification</h2>
      <p>Complete one Pi transaction to finish checklist</p>
      <button onClick={payWithPi} style={{ padding: "10px 16px" }}>
        Support with Pi
      </button>
    </div>
  );
}
