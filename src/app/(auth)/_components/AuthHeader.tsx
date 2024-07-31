import React from 'react'
import Image from 'next/image'
export default function AuthHeader() {
    return (
        <header className='flex-Row-center padding-x h-20'>
            <div className="flex-Row-center h-full gap-1">
                <Image src="/assets/logo-1.webp" width={50} height={100} alt="Logo" />
                <span className="text-xl font-semibold">Describe Art</span>
            </div>
        </header>
    )
}
