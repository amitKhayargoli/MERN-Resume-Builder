import React from "react";
import SignUpCard from "./SignUpCard";

const Signup = () => {
  return (
    <section className="relative overflow-hidden flex-1 h-screen bg-[#F1EAFE] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          Create a new account
        </h1>
      </div>
      {/* Auth card */}
      <SignUpCard />
    </section>
  );
};

export default Signup;
