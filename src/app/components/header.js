"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Header() {
    const nodes = [
        {
            name: "Услуги",
            link: "/uslugi",
        },
        {
            name: "Клиника",
            link: "",
        },
        {
            name: "Врачи",
            link: "",
        },
        {
            name: "Отзывы",
            link: "",
        },
        {
            name: "Работы",
            link: "",
        },
        {
            name: "Вопрос-ответ",
            link: "",
        },
        {
            name: "Контакты",
            link: "",
        },
    ]
    const pathname = usePathname();

    return (
        <header className="absolute w-full pt-8 pb-6 z-50">
            <div className="relative container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image width={195} height={55} src={pathname === "/" ? "/icons/logo-white.svg" : "/icons/logo-red.svg"} alt="" />
                </Link>
                <div className="flex gap-8">
                    {nodes.map((node, i) => {
                        if (pathname === node.link) return (
                            <div key={i} className="pb-2.5 border-b border-transparent text-primary">
                                <p>{node.name}</p>
                            </div>
                        )
                        else return (
                            <Link key={i}
                                className={`
                                    pb-2.5 border-b border-transparent 
                                    transition-colors duration-300
                                    ${pathname === "/" ?
                                        "text-white hover:border-white"
                                        :
                                        "text-black hover:border-black"
                                    }
                                `}
                                href={node.link}
                            >
                                <p>{node.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}