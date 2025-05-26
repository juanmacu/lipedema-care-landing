
import React, { ReactNode } from "react";

interface WizardContainerProps {
  children: ReactNode;
}

const WizardContainer = ({ children }: WizardContainerProps) => {
  return (
    <section id="valoracion" className="bg-white py-4 sm:py-8 md:py-16 lg:py-24 min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default WizardContainer;
