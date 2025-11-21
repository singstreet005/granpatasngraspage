import React from 'react';
import { Youtube, Briefcase, Heart, ShoppingBag } from 'lucide-react';
import { ServiceDetails, ServiceId } from './types';

// --- IMAGES ---
// ⚠️ IMPORTANTE: Reemplaza esta URL con el link directo de la imagen que acabas de subir.
// Como soy una IA de texto, no puedo alojar el archivo, pero he preparado todo para que funcione
// en cuanto pegues el link aquí abajo.
export const BRAND_IMAGE_URL = "https://i.postimg.cc/6QRxpR03/Whisk-d59077067cf3e668e8449ef6896a0d29dr.jpg"; 

export const BACKGROUND_IMAGE_URL = BRAND_IMAGE_URL;
export const PROFILE_IMAGE_URL = "https://i.postimg.cc/bNj7mspW/Whisk-0cdnkldomndo4udztymzwktljfzm00iy1mdmtem.jpg";

// --- TEXTS ---
export const BRAND_NAME = "Gran Patas Negras";
export const SLOGAN_TEXT = "Un gran abrazo por atrás...";
export const WELCOME_TEXT = ""; // Content removed
export const FOOTER_TEXT = "© 2025 Patas Negras. Todos los derechos reservados.";

// --- SERVICES DATA ---
export const SERVICES_DATA: Record<ServiceId, ServiceDetails> = {
  saludos: {
    title: "SALUDOS PERSONALIZADOS",
    subtitle: "VIDEO DEDICADO",
    description: ` Hola Weon@s...

Los saludos que subo al perfil son creados por mi (los saco de mi raja), y algunos que puedo seleccionar de los que me piden ustedes. 

Si quieres Molestar, Felicitar o solo Saludar a alguien puedes hacerlo acá de forma PERSONALIZADA con el Toque del Gran Patas Negras (Un Caballero).

¿Webiamos o Saludamos a alguien hijo de la diuca? `,
    buttons: [
      { text: "Saludo: 8s - $2.390", url: "https://mpago.la/17LJC94" },
      { text: "Saludo: 16segundos - $3.390", url: "https://mpago.la/21hyLcX" }
    ],
    bottomText: "ENVIAME EL MENSAJE Y COMPROBANTE AL DM mi amor"
  },
  colabs: {
    title: "COLABS / NEGOCIOS",
    subtitle: "TRABAJEMOS JUNTOS",
    description: `¿Tienes un negocio, empresa o emprendimiento y te gustaría crear algo diferente, dinámico y entretenido? 🚀
Ofrezco servicios de:
• Creación de contenido 
• Embajadora de marca a largo plazo 
• Promoción de productos y marcas en historias y posts 
Cuéntame tu idea y creemos algo diferente juntos. ¡Hagamos que tu marca destaque!
Contáctanos por Mensaje o E-Mail = kecope09@gmail.com`,
    buttons: [
      { text: "kecope09@gmail.com", url: "https://mail.google.com/" }
    ]
  },
  productos: {
    title: "MIS PRODUCTOS",
    subtitle: "TIENDA OFICIAL",
    description: `Aún nada weón!
Como consuelo te mando un gran abrazo por atrás y una fotos mias.
🚚 Envíos a todo Chile
📦 Edición limitada.`,
    // Aquí están los 3 cuadros para imagenes.
    gallery: [
      BRAND_IMAGE_URL, // La imagen que enviaste
      "https://i.postimg.cc/1zvXgJfm/Whisk-c9c9b05267eb4e8887249f36af3197acdr.jpg",
      "https://i.postimg.cc/HnywHVTL/Whisk-5e366b5a129796cbb5648cb487ea2bf2dr.jpg"
    ],
    priceTag: "Valor: Invaluable",
    buttons: [
      { text: "Enviame un Mensaje Directo", url: "https://www.instagram.com/direct" }
    ]
  }
};

// --- ICONS MAPPING ---
export const ICONS = {
  Youtube: <Youtube className="h-6 w-6" />,
  Colabs: <Briefcase className="h-6 w-6" />,
  Saludos: <Heart className="h-6 w-6" />,
  Productos: <ShoppingBag className="h-6 w-6" />,
};
