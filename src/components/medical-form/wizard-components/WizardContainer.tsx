
import React, { ReactNode } from "react";

interface WizardContainerProps {
  children: ReactNode;
}

const WizardContainer = ({ children }: WizardContainerProps) => {
  return (
    <section id="valoracion" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default WizardContainer;
