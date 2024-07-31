import { NextRequest, NextResponse } from "next/server";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/config/firebase";

export const POST = async (req: NextRequest) => {
  try {
    const { email } = await req.json();
    //sends password reset email to user email
    sendPasswordResetEmail(auth, email);

    return NextResponse.json({
      message: "Reset password link is sent to your email",
      status: 200,
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "User not found with this email",
        error: e.message,
      },
      { status: 500 }
    );
  }
};
