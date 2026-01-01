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
      const sandbox = import.meta.env.MODE === "development";

      window.Pi.init({
        version: "2.0",
        sandbox,
      });

      // ✅ REQUIRED FOR STEP 10
      window.Pi.authenticate(["username"], () => {})
        .then((auth: any) => {
          console.log("Pi authenticated:", auth.user.username);
          onReady();
        })
        .catch((err: any) => {
          console.error(err);
          onError("Pi authentication failed");
        });

    } catch (e) {
      console.error(e);
      onError("Pi SDK error");
    }
  }, []);

  return null;
};

export default PiTest;
