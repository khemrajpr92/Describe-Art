"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"
import CTAButton from "../UI/CTAButton"

export default function Banner() {
    const router = useRouter();
    const [accessToken, setAccessToken] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('/api/user/get-me');
                if (res.data && res.status === 200) {
                    setAccessToken(true);
                } else {
                    setAccessToken(false);
                    router.push("/")
                }
            } catch (e) {
                router.push("/")
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePath = () => {
        if (accessToken) {
            router.push("/generate");
        } else {
            router.push('/signIn')
        }
    }
    return (
        <>
            <div className="mt-6 relative hidden md:flex items-center h-[85dvh] overflow-hidden w-full ">
                <div className="relative flex-Col gap-6 z-[10] ml-20">
                    <div>
                        {" "}
                        <h1 className="text-large uppercase">Generate Your Ideas Into</h1>
                        <h2 className="text-large uppercase">Stunning Visuals</h2>
                    </div>
                    <p>
                        Introducing Describe Art, the Generative AI image <br /> Brings
                        your ideas to life with perfectly matched and unique visuals.
                    </p>
                    <CTAButton
                        title="Get Started"
                        className="max-w-fit min-w-[180px] rounded-3xl"
                        onClick={handlePath}
                    />
                </div>
                <Image
                    src="/assets/home-bg.webp"
                    alt="Home background"
                    fill
                    className="object-fill mix-blend-overlay hidden md:block"
                />
            </div>
            <div className="mt-6 relative block md:hidden flex-Col gap-3">
                <div>
                    <h1 className="text-large uppercase">Generate Your Ideas Into</h1>
                    <h2 className="text-large uppercase">Stunning Visuals</h2>
                </div>
                <p>
                    Introducing Describe Art, the Generative AI image brings your ideas
                    to life with perfectly matched and unique visuals.
                </p>
                <CTAButton
                    title="Get Started"
                    className="max-w-fit min-w-[180px] rounded-3xl"
                    onClick={handlePath}
                />
                <Image src="/assets/home-bg-mobile.webp" width={800} height={400} alt="Home Image" className="mt-4" />
            </div>
        </>

    )
}
