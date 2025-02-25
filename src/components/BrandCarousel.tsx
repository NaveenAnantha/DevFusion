import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandCarousel = ({ brands }) => {
  const brandRefs = useRef([]);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    brandRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Infinite scrolling effect
    animationRef.current = gsap.to(carouselRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1
    });

    return () => {
      animationRef.current?.kill(); // Cleanup on unmount
    };
  }, []);

  // Pause animation & set hovered card
  const handleMouseEnter = (index) => {
    animationRef.current?.pause();
    setHoveredIndex(index);
  };

  // Resume animation & reset blur
  const handleMouseLeave = () => {
    animationRef.current?.play();
    setHoveredIndex(null);
  };

  // Track mouse movement for interactive parallax effect
  const handleMouseMove = (e, index) => {
    if (hoveredIndex !== index) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // Tilt range (-10 to 10)
    const y = ((e.clientY - top) / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <div className="relative overflow-hidden py-8">
      <div ref={carouselRef} className="flex w-max">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            ref={(el) => (brandRefs.current[index] = el)}
            className={`relative w-40 h-40 bg-gray-900 text-white font-bold flex items-center justify-center rounded-xl overflow-hidden group shadow-lg mx-4 transition-all duration-300 ease-in-out 
              ${hoveredIndex === index ? "scale-110 z-10 shadow-2xl" : "blur-sm opacity-50"}
            `}
            style={{
              backgroundColor: brand.color,
              transform:
                hoveredIndex === index
                  ? `perspective(500px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg) scale(1.3)`
                  : "scale(1)",
              transition: "transform 0.3s ease-out",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            {/* Partner Name */}
            <span
              className={`absolute text-xl transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-0" : "opacity-100"
              }`}
            >
              {brand.name}
            </span>

            {/* Background Logo */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ backgroundImage: `url(${brand.logo})` }}
            />

            {/* Animated Border */}
            <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-gradient-border"></div>

            {/* Glow Effect on Hover */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-white opacity-10 blur-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
