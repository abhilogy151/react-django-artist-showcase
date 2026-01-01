import { useEffect } from "react";

declare global {
  interface Window {
    Pi?: any;
  }
}

type Props = {
  onReady: () => void;
  onError: (msg: string) => void;
};

const PiTest = ({ onReady, onError }: Props) => {
  useEffect(() => {
    if (!window.Pi) {
      onError("Please open this app in Pi Browser");
      return;
    }

    try {
      // Use sandbox only in development
      const sandbox = import.meta.env.MODE === "development";

      window.Pi.init({
        version: "2.0",
        sandbox,
      });

      // ✅ REQUIRED for checklist
      // ❌ No payments scope
      window.Pi.authenticate([], () => {})
        .then(() => {
          console.log("Pi authentication successful");
          onReady();
        })
        .catch((err: any) => {
          console.error(err);
          onError("Pi authentication failed");
        });

    } catch (e) {
      console.error(e);
      onError("Pi SDK initialization error");
    }
  }, []);

  return null; // renders nothing
};

export default PiTest;
