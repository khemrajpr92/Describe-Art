import React from 'react'
import HowToWritePrompts from '../UI/HowToWritePrompts'
import { howToWritePromptsData } from '@/constants/data'

export default function WriteRightPrompts() {
    return (
        <section>
            <h2 className="text-medium text-center font-light ">How to write the <span className='text-white'>right</span> AI prompts</h2>
            <div className="flex-Col gap-6 mt-6">
                {
                    howToWritePromptsData?.map((item) => (
                        <HowToWritePrompts key={item.id} data={item} />
                    )
                    )
                }
            </div>
        </section>
    )
}
