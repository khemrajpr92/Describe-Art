import Image from 'next/image'
import React from 'react'

type Props = {
    id: Number,
    title: string,
    description: string
    imageUri: string
    subTitle__1?: string,
    subTitle__2?: string,
    description__1?: string
}

export default function HowToWritePrompts({ data }: { data: Props }) {
    const { id, title, description, imageUri, subTitle__1, subTitle__2, description__1 } = data;
    return (
        <div className={`rounded-xl pt-6 md:py-0 px-10 gap-4 md:gap-8 bg-secondaryBg flex-Col ${id === 2 ? "md:flex md:flex-row-reverse md:items-center" : "md:flex-Row-between"}`}>
            <div className='flex-1 flex-Col gap-3'>
                <h3 className='text-2xl md:text-3xl font-semibold'>{title}</h3>
                <p>{subTitle__1 && <span className='font-semibold'>{subTitle__1}: </span>}{description}</p>
                {
                    subTitle__2 && <p><span className='font-semibold'>{subTitle__2}: </span>{description__1}</p>
                }
            </div>
            <div className={`relative flex-1 min-h-[200px] md:h-80`}>
                <Image src={imageUri} fill alt={title} sizes='100vw' className={`object-contain md:object-fill ${id === 1 ? "py-0" : "py-6"}`} />
            </div>
        </div>
    )

}