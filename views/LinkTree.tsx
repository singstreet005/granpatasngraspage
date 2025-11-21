import React from 'react';
import { ActionButton } from '../components/ActionButton';
import { ProfileHeader } from '../components/ProfileHeader';
import { ICONS, FOOTER_TEXT } from '../constants';
import { ServiceId } from '../types';

interface LinkTreeProps {
  onNavigate: (id: ServiceId) => void;
  profileImage: string;
  onUpdateProfileImage: (file: File) => void;
  onUpdateBackgroundImage: (file: File) => void;
}

export const LinkTree: React.FC<LinkTreeProps> = ({ 
  onNavigate, 
  profileImage, 
  onUpdateProfileImage, 
  onUpdateBackgroundImage 
}) => {

  const handleFileSelect = (callback: (file: File) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      callback(e.target.files[0]);
    }
  };

  return (
    <div className="relative flex w-full flex-col animate-slide-up">
      
      {/* INVISIBLE BUTTON: Top Left - Change Background */}
      <label className="absolute -top-10 -left-6 z-50 h-24 w-24 cursor-pointer opacity-0">
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleFileSelect(onUpdateBackgroundImage)}
        />
      </label>

      {/* INVISIBLE BUTTON: Top Right - Change Profile Picture */}
      <label className="absolute -top-10 -right-6 z-50 h-24 w-24 cursor-pointer opacity-0">
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleFileSelect(onUpdateProfileImage)}
        />
      </label>

      <ProfileHeader image={profileImage} />

      <div className="w-full space-y-2">
        {/* External Link */}
        <ActionButton 
          label="YOUTUBE!" 
          icon={ICONS.Youtube}
          href="https://www.youtube.com/@banditadelcerroficial"
          isExternal
        />
        
        {/* Internal Navigation Links */}
        <ActionButton 
          label="COLABS / NEGOCIOS" 
          icon={ICONS.Colabs}
          onClick={() => onNavigate('colabs')}
        />

        <ActionButton 
          label="SALUDOS PERSONALIZADOS" 
          icon={ICONS.Saludos}
          onClick={() => onNavigate('saludos')}
        />

        <ActionButton 
          label="PRODUCTOS" 
          icon={ICONS.Productos}
          onClick={() => onNavigate('productos')}
        />
      </div>

      <footer className="mt-12 text-center text-xs text-white/40">
        <p>{FOOTER_TEXT}</p>
      </footer>
    </div>
  );
};