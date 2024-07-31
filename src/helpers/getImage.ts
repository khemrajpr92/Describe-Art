import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebase";

//Gives all images stored in storage
export const getImageFromStorage = async () => {
  const pathReference = ref(storage, `generate-images/`);

  try {
    const res = await listAll(pathReference);

    //stores downloaded url of the images
    const urls = await Promise.all(
      res.items.map((item) => {
        return getDownloadURL(item);
      })
    );
    return urls;
  } catch (e: any) {
    throw new Error("Image not fetched from storage", e);
  }
};
