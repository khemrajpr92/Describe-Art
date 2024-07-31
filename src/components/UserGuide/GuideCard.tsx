import Image from "next/image"

type cardData = {
    step: number,
    title: string,
    image: string
}
export default function GuideCard({ step, title, image }: cardData) {
    return (
        <div className="border border-[#A1AEBF] rounded-lg p-4 min-w-[250px] flex-1">
            <div className="rounded-md setup-guide-card w-full h-32 flex-center">
                <Image src={image} alt={title} width={40} height={40} />
            </div>
            <div className="mt-3 text-center text-lg font-bold text-[#a7aeba]">{step}. {title}</div>
        </div>
    )
}