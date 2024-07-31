import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { getUser } from "@/helpers/getUser";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, password } = await req.json();
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user as any;
    const userDoc = await getUser(user.uid);

    if (
      !user ||
      !userDoc.exists() ||
      !user.emailVerified ||
      userDoc.data().email !== email
    ) {
      return NextResponse.json(
        {
          message: "User not found",
          status: 404,
        },
        { status: 404 }
      );
    }

    const token = user?.stsTokenManager?.accessToken;

    const res = NextResponse.json({
      message: "Login Successful",
      status: 200,
      data: response,
      token,
    });

    res.cookies.set("token", token, {
      httpOnly: true,
    });

    return res;
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "User not found",
        error: e.message,
      },
      { status: 500 }
    );
  }
};
