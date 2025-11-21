import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface ActionButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  label, 
  icon, 
  onClick, 
  href,
  isExternal = false 
}) => {
  
  const content = (
    <>
      <div className="flex items-center gap-4">
        <div className="text-white/90 group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className="font-semibold text-white/90 group-hover:text-white tracking-wide text-sm sm:text-base">
          {label}
        </span>
      </div>
      <div className="text-white/60 group-hover:text-white transition-colors">
        {isExternal ? <ExternalLink size={18} /> : <ChevronRight size={20} />}
      </div>
    </>
  );

  const baseClasses = "group relative w-full flex items-center justify-between p-4 mb-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden";

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={baseClasses}
      type="button"
    >
      {content}
    </button>
  );
};