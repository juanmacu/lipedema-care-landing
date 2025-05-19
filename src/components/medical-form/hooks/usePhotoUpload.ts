
import { useState } from "react";
import { MedicalFormData } from "../FormTypes";
import { PhotoType } from "../types/photoTypes";

export const usePhotoUpload = (
  formData: MedicalFormData,
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const [photoPreview, setPhotoPreview] = useState<{
    front: string | null;
    side: string | null;
    back: string | null;
  }>({
    front: null,
    side: null,
    back: null
  });

  const handleIndividualPhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>, 
    type: PhotoType
  ) => {
    if (e.target.files && e.target.files[0]) {
      // Create a preview
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        setPhotoPreview(prev => ({
          ...prev,
          [type]: event.target?.result as string
        }));
      };
      fileReader.readAsDataURL(e.target.files[0]);
      
      // Use the existing handler but transfer the selected file
      // to a new FileList-like object containing all photos
      const existingFiles = formData.images || new DataTransfer().files;
      const newFileList = new DataTransfer();
      
      // Add existing files except any previous file of this type
      if (existingFiles) {
        Array.from(existingFiles).forEach(file => {
          // Skip files that match the current type's naming pattern
          if (!file.name.startsWith(`${type}-`)) {
            newFileList.items.add(file);
          }
        });
      }
      
      // Add the new file with type prefix to identify it
      const newFile = e.target.files[0];
      const renamedFile = new File(
        [newFile], 
        `${type}-${newFile.name}`, 
        { type: newFile.type }
      );
      newFileList.items.add(renamedFile);
      
      // Create an event-like object to pass to the parent handler
      const syntheticEvent = {
        target: {
          name: "images",
          files: newFileList.files
        }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      
      handleFileChange(syntheticEvent);
    }
  };

  const triggerFileInput = (type: PhotoType) => {
    const input = document.getElementById(`${type}-photo-input`);
    input?.click();
  };

  return {
    photoPreview,
    handleIndividualPhotoUpload,
    triggerFileInput
  };
};
