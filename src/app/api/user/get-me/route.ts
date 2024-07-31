import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { getUser } from "@/helpers/getUser";

export const GET = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value || "";

  if (!token) {
    console.error("Token not provided or invalid.");
    return NextResponse.json(
      { message: "Unauthorized - Token Missing", status: 401 },
      { status: 401 }
    );
  }
  try {
    const decoded = jwtDecode(token);
    const id = (decoded as any)?.user_id;

    if (!id) {
      console.error("User ID not present in token payload.");
      return NextResponse.json(
        { message: "Unauthorized - User ID Missing", status: 401 },
        { status: 401 }
      );
    }
    const userDoc = await getUser(id);

    if (!userDoc.exists()) {
      return NextResponse.json(
        {
          message: "Unauthorized",
          status: 404,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "User found",
        status: 200,
        data: userDoc.data(),
      },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: e.message,
      },
      { status: 500 }
    );
  }
};
