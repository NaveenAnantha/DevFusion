import React from 'react';

interface PartnerLogoProps {
  name: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name }) => {
  return (
    <div className="w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-100">
      <span className="text-gray-600 font-semibold">{name}</span>
    </div>
  );
};

export default PartnerLogo;