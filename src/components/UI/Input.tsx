import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type Input = {
    title: string,
    type?: string,
    placeholder: string,
    value?: number,
    register?: UseFormRegisterReturn
}

export default function InputBox({ title, type, placeholder, value, register }: Input) {
    return (
        <div className="flex-Col gap-2">
            <label htmlFor={title}>{title}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                className='outline-none border rounded-md p-4 bg-transparent border-primaryCTA'
                {...register}
            />
        </div>
    )
}
