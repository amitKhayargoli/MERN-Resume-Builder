import LoginCard from "./LoginCard";

export default function Login() {
  return (
    <section className="relative overflow-hidden flex-1 min-h-screen bg-[#F1EAFE] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          Sign in to your account
        </h1>
      </div>
      {/* Auth card */}
      <LoginCard />
    </section>
  );
}
