import { useState, useEffect } from 'react';
import { FaSearchPlus, FaImages, FaStar } from 'react-icons/fa';
import { getImageUrl } from '../config';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  // Generar array de 16 imágenes con la ruta correcta usando getImageUrl
  const images = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: getImageUrl(`images/gallery/${i + 1}.jpg`),
    title: `Project ${i + 1} - Premium Gutter Guard Installation`,
    description: 'Professional installation with top-quality materials'
  }));

  // Verificar qué imágenes se cargan correctamente
  useEffect(() => {
    const checkImages = async () => {
      const loaded = [];
      for (let i = 0; i < images.length; i++) {
        const img = new Image();
        img.src = images[i].src;
        await new Promise((resolve) => {
          img.onload = () => {
            loaded.push(images[i].id);
            resolve();
          };
          img.onerror = () => {
            console.log(`Image ${i + 1} not found at ${images[i].src}`);
            resolve();
          };
        });
      }
      setLoadedImages(loaded);
      console.log('Loaded images IDs:', loaded);
    };
    
    checkImages();
  }, []);

  return (
    <div>
      {/* Hero Section with Overlay */}
      <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        <div className="relative container-custom text-center z-10">
          <div className="flex justify-center mb-6">
            <FaImages className="text-5xl md:text-6xl" />
          </div>
          <h1 className="mb-4 animate-fadeInDown">Our Premium Work</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto animate-fadeInUp">
            Excellence in Every Detail
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              Discover the quality and craftsmanship we bring to every home. 
              Our professional gutter guard installations ensure long-lasting 
              protection and peace of mind for years to come.
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="ml-2 text-white/90">Trusted by 1000+ Happy Customers</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Installations Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at our recent projects and see why homeowners trust us 
              for their gutter protection needs. Each installation is completed 
              with precision, care, and attention to detail.
            </p>
          </div>

          {/* Gallery Grid - 16 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.log(`Failed to load: ${image.src}`);
                      e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                      e.target.onerror = null;
                    }}
                    onLoad={() => console.log(`Loaded: ${image.src}`)}
                  />
                  {/* Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <FaSearchPlus className="text-3xl mx-auto mb-2" />
                      <p className="font-semibold text-sm">Click to enlarge</p>
                    </div>
                  </div>
                </div>
                {/* Image Caption */}
                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold text-primary mb-1">
                    Project #{image.id}
                  </p>
                  <p className="text-xs text-gray-500">
                    Premium Gutter Guard Installation
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Ready to protect your home with the same quality installation?
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Request Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Full Screen View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full w-full">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  Professional gutter guard installation with premium materials for lasting protection
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;