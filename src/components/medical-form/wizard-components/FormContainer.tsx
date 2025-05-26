
import React, { ReactNode, FormEvent } from "react";

interface FormContainerProps {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
}

const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
  return (
    <div id="form-wizard" className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden mx-2 md:mx-0">
      <form onSubmit={onSubmit} className="p-4 md:p-6 lg:p-8">
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
