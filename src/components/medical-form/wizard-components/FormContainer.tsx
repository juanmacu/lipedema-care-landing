
import React, { ReactNode, FormEvent } from "react";

interface FormContainerProps {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
}

const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
  return (
    <div id="form-wizard" className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden mx-2 sm:mx-4 md:mx-0">
      <form onSubmit={onSubmit} className="p-4 sm:p-6 md:p-8 lg:p-10">
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
