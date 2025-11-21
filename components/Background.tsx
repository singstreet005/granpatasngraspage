import React from 'react';

interface BackgroundProps {
  imageUrl: string;
}

export const Background: React.FC<BackgroundProps> = ({ imageUrl }) => {
  return (
    <div className="fixed inset-0 z-0 h-full w-full">
      {/* Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Overlay Layer - Darkens the image for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]" />
      
      {/* Optional: Gradient mesh for aesthetic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
    </div>
  );
};