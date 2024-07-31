import React from "react";
import Image from "next/image";

export default function ImageGallery() {
    return (
        <div className="py-6">
            <div className="flex flex-wrap gap-1 justify-between min-h-[40vh] md:min-h-[75vh]">
                <div className="flex w-[49%] md:w-[24%] flex-wrap">
                    <div className="w-full p-1 md:p-2 relative">
                        <Image
                            fill
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        />
                    </div>
                </div>
                <div className="flex w-[49%] justify-between gap-y-2 md:gap-3 flex-wrap">
                    <div className="w-full p-1 md:p-2 relative">
                        <Image
                            fill
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                        />
                    </div>
                    <div className="w-[48%] p-1 md:p-2 relative">
                        <Image
                            fill
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                        />
                    </div>
                    <div className="w-[48%] p-1 md:p-2 relative">
                        <Image
                            fill
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                        />
                    </div>
                </div>
                <div className="flex w-full md:w-[24%] flex-wrap">
                    <div className="w-full p-1 md:p-2 relative">
                        <Image
                            fill
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
