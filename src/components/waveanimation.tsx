import React from "react";

const WaveAnimation: React.FC = () => {
  const waveCount = 100;

  return (
    <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
      <div className="flex filter drop-shadow-md blur-sm contrast-200">
        {Array.from({ length: waveCount }).map((_, i) => (
          <div
            key={i}
            className="relative w-[10px] h-[10px] bg-gradient-to-b from-[#96dcff80] to-[#96dcff33] 
            animate-fade animate-skew animate-translate"
            style={{
              animationDelay: `${(i * -2000) / waveCount}ms`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WaveAnimation;
