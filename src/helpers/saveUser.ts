import { setDoc, doc } from "firebase/firestore";
import { firebase_db } from "@/config/firebase";
import { User } from "@/types/user";

export const saveUser = (user: User) => {
  try {
    const userRef = doc(firebase_db, "users", user.id);
    setDoc(userRef, { name: user.name, email: user.email });
  } catch (e: any) {
    throw new Error("User not saved", e);
  }
};
