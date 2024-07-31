"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../Accordion"
import { faqsData } from "@/constants/data"


export default function Accordions() {
    return (
        <Accordion type="single" collapsible className="flex-Col gap-3">
            {
                faqsData?.map(({ id, title, description }) => (
                    <AccordionItem key={id} value={`item-${id}`} className="bg-secondaryBg rounded-xl py-3 px-6">
                        <AccordionTrigger>{title}</AccordionTrigger>
                        <AccordionContent>
                            {description}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>

    )
}
