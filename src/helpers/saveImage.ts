import { ref, uploadString } from "firebase/storage";
import { storage } from "@/config/firebase";

type data = {
  imageData: string;
  imageName: string;
};

export const uploadImageToStorage = async ({ imageData, imageName }: data) => {
  const storageRef = ref(storage, `generate-images/text_2_img${imageName}`);
  // Data URL string
  const image = `data:image/png;base64,${imageData}`;
  try {
    const res = await uploadString(storageRef, image, "data_url");
    return res;
  } catch (e) {
    throw new Error("Image not uploaded");
  }
};
