import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("Session:", data.session);
    });
  }, []);

  return (
    <div>
      <iframe src="https://lottie.host/embed/394a1814-0659-4e44-a67b-cf806a01fcd9/P4xZaDoZUM.lottie"></iframe>
    </div>
  );
}
