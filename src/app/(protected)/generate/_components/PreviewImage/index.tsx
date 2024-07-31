import React from 'react'
import Image from 'next/image'

type Props = {
    src: string,
    handleClose: () => void
}

export default function PreviewImage({ src, handleClose }: Props) {
    return (
        <div className='absolute inset-0 bg-[rgba(0,0,0,0.8)] flex-center p-4 z-[1000]'>
            <div className='w-full h-full max-w-3xl max-h-[524px] rounded-2xl relative'>
                <button className='absolute -top-12 right-12 z-10  text-3xl' onClick={handleClose}>X</button>
                <Image src={src} fill alt='Preview Image' className='object-contain' />
            </div>
        </div>
    )
}
