import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function Dashboard() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("Session:", data.session);
    });
  }, []);

  return <div>Dashboard</div>;
}
