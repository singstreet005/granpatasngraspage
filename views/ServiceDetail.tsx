import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Lock, X } from 'lucide-react';
import { ServiceDetails } from '../types';

interface ServiceDetailProps {
  onBack: () => void;
  data: ServiceDetails;
  onImageUpdate?: (index: number, file: File) => void;
  onPriceUpdate?: (newPrice: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ onBack, data, onImageUpdate, onPriceUpdate }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Handle file selection (supports multiple files to fill slots)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && onImageUpdate) {
      const files = Array.from(e.target.files);
      // Loop through selected files and update corresponding gallery indices
      files.forEach((file, index) => {
        // Limit to 3 images as per the grid layout
        if (index < 3) {
          onImageUpdate(index, file);
        }
      });
    }
  };

  // Handle price text update
  const handlePriceEdit = () => {
    if (onPriceUpdate) {
      const currentPrice = data.priceTag || "";
      const newPrice = window.prompt("Ingresa el nuevo valor del producto:", currentPrice);
      
      // Allow saving even if empty string to clear it, but check for null (cancel)
      if (newPrice !== null) {
        onPriceUpdate(newPrice);
      }
    }
  };

  return (
    <>
      <div className="flex w-full flex-col animate-slide-up">
        {/* Back Button Header */}
        <div className="mb-6 flex items-center">
          <button 
            onClick={onBack}
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
            aria-label="Volver"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
          </button>
          <span className="ml-4 text-sm font-medium text-white/60 uppercase tracking-wider">Volver al inicio</span>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
          
          {/* Header Section */}
          <div className="mb-6 border-b border-white/10 pb-6 text-center relative">
            <div className="relative inline-flex items-center justify-center gap-2">
              
              {/* Price Edit Button - Invisible/Secret (Left of Title) */}
              {onPriceUpdate && (
                <button 
                  onClick={handlePriceEdit}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 p-4 opacity-0 z-30 cursor-pointer"
                  title="Editar precio (Secreto)"
                />
              )}

              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl relative z-10 select-none">
                {data.title}
              </h2>
              
              {/* Image Upload Button - Invisible/Secret (Right of Title) */}
              {onImageUpdate && data.gallery && (
                <label className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 opacity-0 z-20 cursor-pointer">
                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                  <div className="h-full w-full" title="Cambiar imágenes (Secreto)" />
                </label>
              )}
            </div>

            <div className="mt-2">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {data.subtitle}
              </span>
            </div>
          </div>

          {/* Description Content */}
          {data.description && (
            <div className="mb-8 space-y-4 text-white/90">
              {data.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-sm sm:text-base font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Optional Gallery Section (for Products) */}
          {data.gallery && data.gallery.length > 0 && (
            <div className="mb-6 grid grid-cols-3 gap-3">
              {data.gallery.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/20 transition-all hover:ring-white/50"
                  onClick={() => setSelectedImage(imgUrl)}
                >
                  <img 
                    src={imgUrl} 
                    alt={`Producto ${idx + 1}`} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Price Tag Display */}
          {data.priceTag && (
            <div className="mb-6 flex items-center justify-center">
              <div 
                className="text-lg font-bold text-white bg-white/10 px-4 py-2 rounded-lg border border-white/10 shadow-inner backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors"
                onClick={handlePriceEdit} // Alternative way to edit if the invisible button is missed
              >
                {data.priceTag}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-auto flex flex-col gap-3">
            {data.buttons.map((btn, idx) => (
              <a 
                key={idx}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-center font-bold text-black shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{btn.text}</span>
                <CheckCircle size={18} className="text-green-600" />
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 blur-sm" />
              </a>
            ))}
            
            {/* Bottom Text Message */}
            {data.bottomText && (
              <p className="mt-4 text-center text-sm font-medium text-white/80 animate-fade-in">
                {data.bottomText}
              </p>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/50">
              <Lock size={12} />
              <span>PAGO SEGURO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Full screen preview" 
            className="max-h-full max-w-full rounded-md object-contain shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};