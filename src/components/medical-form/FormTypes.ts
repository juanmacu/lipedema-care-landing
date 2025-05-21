
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
  newsletter?: boolean;
  symptoms?: {
    dolor_piernas?: boolean;
    pesadez?: boolean;
    hinchazon?: boolean;
    moretones?: boolean;
    grasa_simetrica?: boolean;
    cascara_naranja?: boolean;
    frio_extremidades?: boolean;
    dolor_articulaciones?: boolean;
    [key: string]: boolean | undefined;
  };
}
