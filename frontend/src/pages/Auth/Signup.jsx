import React from "react";
import SignUpCard from "./SignUpCard";

const Signup = () => {
  return (
    <section className="relative overflow-hidden flex-1 min-h-screen bg-[#F1EAFE] flex flex-col items-center">
      {/* Auth card */}
      <SignUpCard />
    </section>
  );
};

export default Signup;
