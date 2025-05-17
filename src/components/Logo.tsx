
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2">
        <svg width="40" height="40" viewBox="0 0 146 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M73.5349 0C111.242 0 142.07 27.3537 146 61.3581C140.465 26.749 110.465 0 73.5349 0Z" fill="#96C8DC"/>
          <path d="M73.5349 122C35.8279 122 5 94.6463 0 60.6419C6.60465 95.2509 36.6047 122 73.5349 122Z" fill="#96C8DC"/>
          <path d="M0 60.6419C5 94.6463 35.8279 122 73.5349 122C110.465 122 140.465 95.251 146 60.642C146 60.642 73.5349 122 0 60.6419Z" fill="currentColor"/>
          <path d="M146 61.3581C142.07 27.3537 111.242 0 73.5349 0C36.6047 0 6.60465 26.749 0 61.358C0 61.358 73.5349 0 146 61.3581Z" fill="currentColor"/>
        </svg>
      </div>
      <div className={className || "text-gray-600"}>
        <div className="text-lg font-light">GAONA ZAMBRANO</div>
        <div className="text-xs uppercase">CIRUJANOS PLÁSTICOS</div>
      </div>
    </div>
  );
};

export default Logo;
