"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CTAButton from "../UI/CTAButton";
import { headerData } from "@/constants/data";
import Hamburger from "./Hamburger";
import { headers } from "./types";
import axios from "axios";
import { cn } from "@/utils/tailwind-merge";


export default function Header({ padding }: { padding?: string }) {
    const pathname = usePathname();
    const router = useRouter();
    const [accessToken, setAccessToken] = useState(false);

    const handleLogin = () => {
        router.push("/signIn");
    }

    const getMe = async () => {
        try {
            const res = await axios.get('/api/user/get-me');
            if (res.data && res.status === 200) {
                setAccessToken(true);
            } else {
                setAccessToken(false);
                // router.push("/")
            }
        } catch (e) {
            // router.push("/")
        }
    }

    useEffect(() => {
        getMe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLogout = async () => {
        try {
            await axios.get('/api/user/logout');
            getMe();
            router.push('/')
        } catch (error: any) {
            throw new Error("Logout failed", error.message);
        }
    }

    return (
        <header className={cn(`bg-black w-full sticky top-0 z-30 left-0 right-0 ${padding ? padding : "padding-x"}`)}>
            <div className="h-20 flex-Row-between">
                <Link href="/" className="flex-center h-full gap-1">
                    <Image src="/assets/logo-1.webp" width={50} height={100} alt="Logo" />
                    <span className="text-xl font-semibold hidden sm:block">Describe Art</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 ">
                        {headerData?.map(({ id, title, link }: headers) => (
                            <li
                                key={id}
                                className={`hover:text-primaryCTA ${pathname == link ? "text-primaryCTA" : ""
                                    }  transition-all duration-200 flex items-center gap-2 cursor-pointer relative`}
                            >
                                <Link href={link}>{title}</Link>
                            </li>
                        ))}
                        <li>
                            {accessToken ? (
                                <CTAButton title="Logout" onClick={handleLogout} className="rounded-3xl px-5" />
                            ) : (
                                <CTAButton title="Login" onClick={handleLogin} className="rounded-3xl px-5" />
                            )}
                        </li>
                    </ul>
                </nav>

                <div className="flex md:hidden flex-center gap-3">
                    <div className="md:hidden">
                        {accessToken ? (
                            <CTAButton title="Logout" onClick={handleLogout} className="rounded-3xl px-5" />
                        ) : (
                            <CTAButton title="Login" onClick={handleLogin} className="rounded-3xl px-5" />
                        )}
                    </div>
                    <Hamburger />
                </div>
            </div>
        </header>
    );
}
