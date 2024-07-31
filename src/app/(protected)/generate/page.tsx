'use client'
import React from 'react'
import GenerateSidebar from './_components/Sidebar'
import GeneratedImages from './_components/GeneratedImages'
import GenerateContextProvider from '@/context/Generate'
import Header from '@/components/Header'

export default function Generate() {

    return (
        <GenerateContextProvider>
            <Header padding='px-3' />
            <div className='flex-Col h-full md:flex-Row md:heightScreen'>
                <GenerateSidebar />
                <GeneratedImages />
            </div>
        </GenerateContextProvider>
    )
}
