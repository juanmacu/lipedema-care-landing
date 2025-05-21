
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { WhatsApp } from "lucide-react";

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupDisplayed, setPopupDisplayed] = useState(false);
  const whatsappLink = "https://wa.link/r10i52";
  
  // Show the popup after a delay when the user has scrolled a bit
  useEffect(() => {
    if (popupDisplayed) return;
    
    const handleScroll = () => {
      if (window.scrollY > 300 && !popupDisplayed && !showPopup) {
        setTimeout(() => {
          setShowPopup(true);
          setPopupDisplayed(true);
        }, 3000);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupDisplayed, showPopup]);
  
  const handleClose = () => {
    setShowPopup(false);
  };
  
  return (
    <>
      {/* Fixed WhatsApp button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Contáctanos por WhatsApp"
      >
        <WhatsApp size={28} />
      </a>
      
      {/* WhatsApp popup */}
      {showPopup && (
        <div className="fixed bottom-40 right-6 z-40 bg-white rounded-lg shadow-xl max-w-xs animate-fade-in border border-gray-100">
          <div className="flex justify-between items-center p-3 bg-green-500 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <WhatsApp size={20} />
              <h3 className="font-medium">¿Tienes dudas?</h3>
            </div>
            <button 
              onClick={handleClose}
              className="text-white hover:bg-green-600 rounded-full p-1"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-3">
              Chatea directamente con nosotros para resolver tus dudas sobre el lipedema o agendar una consulta.
            </p>
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
              asChild
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp size={18} />
                <span>Contactar ahora</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
