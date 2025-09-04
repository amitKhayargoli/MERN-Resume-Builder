import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <DotLottieReact
        src="https://lottie.host/394a1814-0659-4e44-a67b-cf806a01fcd9/P4xZaDoZUM.lottie"
        loop
        autoplay
        className="w-80 h-80"
      />
    </div>
  );
}
