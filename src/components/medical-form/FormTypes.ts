
export interface MedicalFormData {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  weight: string;
  height: string;
  doctor: string;
  comments: string;
  images: FileList | null;
  consent: boolean;
}
