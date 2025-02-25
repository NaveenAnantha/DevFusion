import React, { useEffect, useRef, useState } from "react";
import Splitting from "splitting";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

gsap.registerPlugin(ScrollTrigger);

interface DiagonalRevealProps {
  imageUrl: string;
  altText?: string;
}

const DiagonalReveal: React.FC<DiagonalRevealProps> = ({ imageUrl, altText = "Revealing Image" }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!imageRef.current) return;

    // Apply Splitting.js only once
    Splitting({ target: imageRef.current, by: "cells", image: true, rows: 6, columns: 6 });

    const cells = imageRef.current.querySelectorAll(".cell");

    // GSAP Scroll Animation
    gsap.fromTo(
      cells,
      { x: 200, y: 100, opacity: 0 }, // Start position
      {
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        stagger: 0.08,
        duration: 0.4,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Handle hover movement effect with requestAnimationFrame for optimization
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setHoverPosition({ x, y });
    });
  };

  return (
    <div
      ref={imageRef}
      onMouseMove={handleMouseMove}
      data-splitting="cells"
      className="relative overflow-hidden w-full h-auto"
    >
      {/* Image */}
      <img className="w-full h-auto" src={imageUrl} alt={altText} />

      {/* Hover Layer */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full bg-white/10 pointer-events-none transition-all duration-200"
        style={{
          background: `radial-gradient(circle at ${hoverPosition.x}% ${hoverPosition.y}%, rgba(255,255,255,0.2), transparent)`,
        }}
      />
    </div>
  );
};

export default DiagonalReveal;
