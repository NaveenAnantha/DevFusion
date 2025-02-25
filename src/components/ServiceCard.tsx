import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
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
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1500}
      className="service-card-tilt"
    >
      <div
        ref={cardRef}
        className={`relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
          index % 2 === 0 ? 'even:mt-8' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden opacity-10"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />

        {/* Number Badge */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-110 z-20">
          {index + 1}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-4xl mb-4 transform transition-all duration-300 hover:scale-110">
            {icon}
          </div>
          <div className="relative h-8 mb-3 overflow-hidden">
            <h3
              className={`text-xl font-bold absolute transition-transform duration-300 ${
                isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              {title}
            </h3>
            <div
              className={`text-xl font-bold text-blue-600 absolute transition-transform duration-300 ${
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              0{index + 1}
            </div>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
          >
            <span className="mr-2">View More</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>
    </Tilt>
  );
};

export default ServiceCard;