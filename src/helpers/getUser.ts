import { getDoc, doc } from "firebase/firestore";
import { firebase_db } from "@/config/firebase";

export const getUser = async (userId: string) => {
  try {
    const userRef = doc(firebase_db, "users", userId);
    const userDoc = await getDoc(userRef);

    return userDoc;
  } catch (e: any) {
    throw new Error("User not found", e);
  }
};
