import { NextRequest, NextResponse } from "next/server";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { saveUser } from "@/helpers/saveUser";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    if (user) {
      sendEmailVerification(user); //send the email verification link on user email
      saveUser({ id: user.uid, name, email }); //save the user info
    }

    return NextResponse.json({
      message: "User Created",
      status: 201,
      data: response,
    });
  } catch (e: any) {
    return NextResponse.json({
      message: e.message,
      status: 500,
    });
  }
};
