// Configuración para rutas de imágenes
export const getImageUrl = (path) => {
    // En desarrollo: usa la ruta relativa
    // En producción: también usa ruta relativa porque Vercel sirve desde la raíz
    return path.startsWith('/') ? path : `/${path}`;
  };
  
  // O si necesitas una URL base específica:
  export const BASE_URL = import.meta.env.BASE_URL || '/';