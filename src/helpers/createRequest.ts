import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { firebase_db } from "@/config/firebase";

type request = {
  prompt: string;
  imageCount: Number;
  response: string[];
};

export const createRequest = async ({
  prompt,
  imageCount,
  response,
}: request) => {
  const requestId = uuidv4();
  try {
    const ref = doc(firebase_db, "requests", requestId);
    await setDoc(ref, {
      "generation-info": {
        prompt,
        imageCount,
      },
      user: "userReference",
      response: response,
    });
  } catch (e: any) {
    throw new Error("Request not created", e);
  }
};
