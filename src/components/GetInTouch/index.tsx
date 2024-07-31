'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import CTAButton from '../UI/CTAButton'
import { useEffect, useState } from 'react';

export default function GetInTouch() {

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
        <section className='py-8 sm:py-20 px-12 mb-12 rounded-xl flex-Col sm:flex-Row-between items-center gap-8 bg-secondaryBg'>
            <h2 className='text-semi-medium flex-1'>Create your account <br /> and start generating</h2>
            <div className="flex-Col w-full sm:flex-center sm:flex-row gap-6 flex-1">
                <CTAButton title='Get Started' onClick={handlePath} className='flex-1 rounded-3xl py-3' />
                <Link href="/contact" className='bg-white flex-1 text-black p-2 w-full rounded-3xl text-center hover:opacity-80'>Get in Touch</Link>
            </div>
        </section>
    )
}
