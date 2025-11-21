import React from 'react';
import { BRAND_NAME, SLOGAN_TEXT } from '../constants';

interface ProfileHeaderProps {
  image: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ image }) => {
  return (
    <div className="mb-8 flex flex-col items-center text-center animate-fade-in">
      <div className="relative mb-4 h-32 w-32 rounded-full p-1 ring-2 ring-white/30">
        <img
          src={image}
          alt={BRAND_NAME}
          className="h-full w-full rounded-full object-cover shadow-2xl transition-all duration-500"
        />
      </div>
      <h1 className="mb-1 text-3xl font-bold tracking-tight text-white drop-shadow-lg">
        {BRAND_NAME}
      </h1>
      <p className="mb-2 text-base font-semibold text-white drop-shadow-md">
        {SLOGAN_TEXT}
      </p>
    </div>
  );
};