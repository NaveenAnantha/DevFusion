import React from 'react';

const MarqueeText = () => {
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  const texts = ['Innovation', 'Technology', 'Solutions', 'Excellence', 'Growth', 'Success'];

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-black bg-opacity-30">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {texts.map((text, index) => (
              <div
                key={`${i}-${index}`}
                className={`${colors[index]} mx-4 px-8 py-2 rounded-full text-white font-semibold`}
              >
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;