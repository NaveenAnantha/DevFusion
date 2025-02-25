import React from "react";

const ButtonAnimation: React.FC = () => {
  return (
    <div className="voltage-button relative flex items-center justify-center">
      <button className="relative z-10 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
        Button
      </button>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 234.6 61.3"
        preserveAspectRatio="none"
        xmlSpace="preserve"
      >
        <filter id="glow">
          <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="2" />
          <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" result="displace" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="displace" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path className="voltage line-1" d="M216.3 51.2c-3.7 0-..." fill="transparent" stroke="#fff" />
        <path className="voltage line-2" d="M216.3 52.1c-3 0-..." fill="transparent" stroke="#fff" />
      </svg>
      <div className="dots absolute flex space-x-1">
        <div className="dot w-2 h-2 bg-white rounded-full" />
        <div className="dot w-2 h-2 bg-white rounded-full" />
        <div className="dot w-2 h-2 bg-white rounded-full" />
        <div className="dot w-2 h-2 bg-white rounded-full" />
        <div className="dot w-2 h-2 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default ButtonAnimation;
