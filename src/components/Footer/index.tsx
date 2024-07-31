import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='padding-x bg-[#000] p-4 flex-Row-between'>
            <div className="flex-Row-center gap-1">
                <Link href="/">
                    <Image src="/assets/logo-1.webp" alt='Describe Art' width={50} height={100} />
                </Link>
            </div>
            <div className="flex-Row-center gap-1">
                <p>Copyright &copy;2023</p>
            </div>
        </footer>
    )
}
