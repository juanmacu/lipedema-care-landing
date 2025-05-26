
import { Button } from "@/components/ui/button";

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 28 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2C6.48 2 2 6.48 2 12C2 13.9 2.5 15.6 3.35 17.05L2.05 21.9L7 20.65C8.35 21.4 10.1 21.9 12 21.9C17.52 21.9 22 17.42 22 11.9C22 6.38 17.52 2 12 2ZM17 15.5C16.8 16.1 15.9 16.6 15.2 16.75C14.7 16.85 14 16.95 11.8 15.95C9.1 14.75 7.3 11.95 7.15 11.75C7 11.55 6 10.2 6 8.8C6 7.4 6.7 6.7 7 6.35C7.25 6.05 7.6 5.95 7.8 5.95C8 5.95 8.2 5.95 8.4 5.95C8.6 5.95 8.9 5.85 9.2 6.55C9.5 7.25 10.2 8.65 10.3 8.75C10.4 8.85 10.5 9.05 10.35 9.25C10.2 9.45 10.15 9.6 10.05 9.7C9.95 9.8 9.75 10.05 9.65 10.15C9.55 10.25 9.45 10.4 9.6 10.7C9.75 11 10.4 12.15 11.45 13.05C12.75 14.15 13.8 14.5 14.15 14.6C14.5 14.7 14.7 14.65 14.8 14.5C14.9 14.35 15.55 13.6 15.7 13.25C15.85 12.9 16 12.95 16.2 13.05C16.4 13.15 17.8 13.85 18 13.95C18.2 14.05 18.35 14.1 18.4 14.2C18.4 14.4 18.2 14.9 17 15.5Z" 
      fill="currentColor"
    />
  </svg>
);

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.link/r10i52";
  
  return (
    <>
      {/* Fixed WhatsApp button - más discreto */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          aria-label="¿Te quedaron dudas? Escríbenos por WhatsApp y te ayudamos"
        >
          <WhatsAppIcon />
        </a>
        
        {/* Tooltip discreto */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
            ¿Te quedaron dudas? Escríbenos por WhatsApp y te ayudamos.
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
