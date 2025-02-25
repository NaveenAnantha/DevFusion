import React, { useRef, useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';

interface InsightCardProps {
  title: string;
  date: string;
  image: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, date, image }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 30
        });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1500}
      scale={1.02}
      transitionSpeed={2000}
      className="h-full"
    >
      <div
        ref={cardRef}
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full transform hover:-translate-y-2"
      >
        <div className="relative h-48 overflow-hidden">
          {/* Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              transform: `scale(1.1) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
          {/* Overlay Layer */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        </div>
        <div className="p-6 relative">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
          >
            Read More
            <svg
              className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </Tilt>
  );
};

export default InsightCard;