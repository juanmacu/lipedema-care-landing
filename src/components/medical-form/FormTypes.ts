
export interface MedicalFormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  country: string;
  weight: string;
  height: string;
  doctor: string;
  comments: string;
  images: FileList | null;
  consent: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  age?: string;
  gender?: string;
  country?: string;
  weight?: string;
  height?: string;
  consent?: string;
  images?: string;
}

export interface FormSubmitResponse {
  success: boolean;
  message: string;
}
