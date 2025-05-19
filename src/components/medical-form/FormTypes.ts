
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
  newsletter?: boolean; // Added newsletter consent
  symptoms?: {
    [key: string]: boolean;
  };
}
