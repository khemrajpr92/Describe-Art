import React from 'react'
import { cn } from "@/utils/tailwind-merge"

type Props = {
    title: string,
    onClick?: () => void,
    type?: "button" | "submit",
    className?: string,
}

export default function CTAButton({ title, onClick, type, className }: Props) {
    return (
        <button onClick={onClick} className={cn("w-full cta-btn p-2 rounded-md hover:opacity-80", className)} type={type}>
            {title}
        </button>
    )
}
