
import React, { ReactNode } from "react";

interface WizardContainerProps {
  children: ReactNode;
}

const WizardContainer = ({ children }: WizardContainerProps) => {
  return (
    <section id="valoracion" className="bg-white py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-2 md:px-4">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default WizardContainer;
