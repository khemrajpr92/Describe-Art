import React, { ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type Input = {
    title: ReactNode,
    placeholder: string,
    register?: UseFormRegisterReturn
}

export default function TextArea({ title, placeholder, register }: Input) {
    return (
        <div className="flex-Col gap-2">
            <label htmlFor={"title"}>{title}</label>
            <textarea placeholder={placeholder} className='outline-none border rounded-md p-4 bg-transparent border-primaryCTA' rows={4} {...register} />
        </div>
    )
}
