import React from "react";
import WaveAnimation from "./waveanimation";

const LandingPage: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/your-landing-image.jpg')" }}
    >
      {/* Landing content */}
      <h1 className="text-white text-5xl font-bold z-10">Welcome to Our Site</h1>

      {/* Wave Animation (Overlay) */}
      <WaveAnimation />
    </div>
  );
};

export default LandingPage;
