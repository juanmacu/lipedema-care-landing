
import React, { ReactNode } from "react";

interface WizardContainerProps {
  children: ReactNode;
}

const WizardContainer = ({ children }: WizardContainerProps) => {
  return (
    <section id="valoracion" className="bg-white py-2 sm:py-8 md:py-16 lg:py-24 min-h-screen">
      <div className="container mx-auto px-1 sm:px-2 md:px-4">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default WizardContainer;
