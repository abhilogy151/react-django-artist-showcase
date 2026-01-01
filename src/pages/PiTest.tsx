import { useEffect, useState } from "react";

declare global {
  interface Window {
    Pi?: any;
  }
}

const PiTest = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "error"
  >("idle");

  useEffect(() => {
    // If SDK already exists (Pi Browser reload case)
    if (window.Pi) {
      initPi();
      return;
    }

    // Load Pi SDK
    const script = document.createElement("script");
    script.src = "https://sdk.minepi.com/pi-sdk.js";
    script.async = true;

    script.onload = () => initPi();
    script.onerror = () => {
      console.error("Failed to load Pi SDK");
      setStatus("error");
    };

    document.body.appendChild(script);
  }, []);

  const initPi = () => {
    try {
      window.Pi.init({
        version: "2.0",
        sandbox: false // ✅ REQUIRED for Pi Browser
      });
      setSdkReady(true);
    } catch (err) {
      console.error("Pi init error", err);
      setStatus("error");
    }
  };

  const payWithPi = () => {
    if (!window.Pi) {
      alert("Open this page in Pi Browser");
      return;
    }

    setStatus("processing");

    window.Pi.createPayment(
      {
        amount: 0.01,
        memo: "Portfolio app verification",
        metadata: {
          purpose: "pi-checklist"
        }
      },
      {
        onReadyForServerApproval: () => {
          // No backend needed for checklist
        },

        onReadyForServerCompletion: () => {
          setStatus("success");
        },

        onCancel: () => {
          setStatus("idle");
        },

        onError: (err: any) => {
          console.error("Payment error", err);
          setStatus("error");
        }
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-center">
        <h1 className="text-xl font-semibold mb-2">
          Pi App Verification
        </h1>

        <p className="text-gray-600 mb-6">
          Complete one Pi transaction to finish the Pi checklist.
        </p>

        {!sdkReady && (
          <p className="text-sm text-gray-500 mb-4">
            Initializing Pi SDK…
          </p>
        )}

        {status === "success" ? (
          <div className="text-green-600 font-medium">
            ✅ Transaction successful  
            <br />
            You can close this page now.
          </div>
        ) : (
          <button
            onClick={payWithPi}
            disabled={!sdkReady || status === "processing"}
            className={`w-full py-2 rounded-lg text-white font-medium transition
              ${
                !sdkReady || status === "processing"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {status === "processing"
              ? "Processing…"
              : "Support with Pi"}
          </button>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600 mt-4">
            Something went wrong.  
            Make sure <b>payments</b> scope is enabled and you are using Pi Browser.
          </p>
        )}
      </div>
    </div>
  );
};

export default PiTest;
