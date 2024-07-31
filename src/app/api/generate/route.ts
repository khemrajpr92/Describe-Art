import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";
import { uploadImageToStorage } from "@/helpers/saveImage";
import { createRequest } from "@/helpers/createRequest";
import { getDownloadURL } from "firebase/storage";
import { jwtDecode } from "jwt-decode";

export const POST = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value || "";
  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized - Token not present",
        status: 404,
      },
      { status: 404 }
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
    const { prompt, imageCount } = await req.json();
    const path =
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
    };
    const body = {
      steps: 35,
      width: 1024,
      height: 1024,
      seed: 0,
      cfg_scale: 7,
      samples: imageCount,
      text_prompts: [
        {
          text: `${prompt} (extremely detailed 8k photograph),(masterpiece), (best quality), (ultra-detailed), (best shadow), sony A7, 35mm`,
          weight: 1,
        },
        {
          text: "blurry, bad, lowresolution, bad anatomy, bad hands, mutated hand, text, error, missing fingers, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, out of focus, (wedding ring:1.1), 2girls, 3girls, (((multiple views))), (((bad proportions))), (((multiple legs))), (((multiple arms))), (monotone). 3D. low quality lowres multiple breasts, bad fingers, ((gaping anus)), ((gaping pussy)), jewelry, ((vertical letterboxing)), ((letterboxing)), dark skin",
          weight: -1,
        },
      ],
    };
    const response = (await axios.post(path, body, {
      headers: headers,
    })) as AxiosResponse;

    //This code converts the base64 to image and save in firebase storage and returns the url of image
    const imageUrls = await Promise.all(
      response.data.artifacts.map(async (image: any) => {
        const uploadImage = await uploadImageToStorage({
          imageData: image.base64,
          imageName: image.seed,
        });

        if (uploadImage) {
          const url = await getDownloadURL(uploadImage.ref);
          return url;
        }
      })
    );
    //Returns the response with image urls
    if (imageUrls.length > 0) {
      createRequest({ prompt, imageCount, response: imageUrls });
      return NextResponse.json(
        { message: "Image generated successfully", data: imageUrls },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ message: "No images found" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to create data", error },
      { status: 500 }
    );
  }
};
