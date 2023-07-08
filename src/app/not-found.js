'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    const { title, text } = {
        title: "Страница не найдена",
        text: "Вернуться на Главную",
    }

    return (
        <main className="flex flex-col">
            <div className="h-[111px] bg-[#F2F2F2]" />
            <div className="flex flex-col">
                <div className="bg-[#F2F2F2] rounded-b-[48px]">
                    <h1 className="py-16 container mx-auto">{title}</h1>
                </div>
                <div className="py-12 main:columns-2 policy container mx-auto">
                    <Link href="/">
                        <h4 className="underline transition-colors hover:text-primary">{text}</h4>
                    </Link>
                </div>
            </div>
        </main>
    )
}