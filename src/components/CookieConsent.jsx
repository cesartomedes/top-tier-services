import { useState, useEffect } from 'react';
import { FaCookie, FaTimes } from 'react-icons/fa';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookieAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookieAccepted) {
      // Mostrar el aviso después de 1 segundo
      setTimeout(() => setShowConsent(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container-custom">
        <div className="bg-secondary text-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="bg-primary px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaCookie className="text-yellow-400 text-2xl" />
              <h3 className="text-white font-bold text-lg">Cookie Consent</h3>
            </div>
            <button 
              onClick={declineCookies}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 text-sm mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, 
              and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              <button
                onClick={declineCookies}
                className="px-6 py-2 rounded-lg text-sm font-semibold border border-gray-500 text-gray-300 hover:bg-gray-700 transition-all duration-200"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;