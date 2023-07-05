"use client"

import Image from "next/image";
import Link from "next/link";
import LogoMobile from "../../public/icons/logo-mobile.svg"
import LogoDesktop from "../../public/icons/logo-desktop.svg"

export default function Footer({ paths, contacts }) {
    return (
        <footer className="bg-white py-10 main:py-20">
            <div className="container mx-auto flex flex-col gap-4 main:gap-6">
                <div className="flex 
                    flex-col items-start gap-6
                    main:flex-row main:items-center main:justify-between
                ">
                    <Link href="/">
                        <LogoMobile className={`max-main:hidden transition-colors duration-500 text-primary`} />
                        <LogoDesktop className={`main:hidden transition-colors duration-500 text-primary`} />
                    </Link>
                    <div className="flex gap-6 
                        flex-col items-start
                        main:flex-row main:items-center
                    ">
                        <div className="flex gap-6 items-start">
                            <Image width={24} height={24} src="/icons/mail-red.svg" alt="" />
                            <a href={contacts.email.link} className="transition-colors hover:text-primary">
                                <h5>
                                    {contacts.email.text}
                                </h5>
                            </a>
                        </div>
                        <a href={contacts.adress.link} className="flex gap-6 items-start">
                            <Image width={24} height={24} src="/icons/map-pin-red.svg" alt="" />
                            <h5>{contacts.adress.text}</h5>
                        </a>
                        <a
                            href={contacts.whatsapp.link} target='_blank' rel="noopener noreferrer"
                            className="
                                bg-primary rounded-full px-4 py-3 flex gap-2 items-center 
                                transition-colors hover:bg-primary-hover
                            "
                        >
                            <Image width={24} height={24} src="/icons/whatsapp.svg" alt="" />
                            <p className="font-medium text-white">{contacts.whatsapp.text}</p>
                        </a>
                    </div>
                </div>


                <div className="flex flex-wrap
                    gap-4
                    main:gap-8
                ">
                    {paths.map((node, i) =>
                        <Link key={i}
                            className="
                                transition-colors duration-300
                                hover:text-primary
                            "
                            href={node.link}
                        >
                            <p>{node.name}</p>
                        </Link>
                    )}
                </div>


                <div className="flex 
                    flex-col gap-16
                    main:flex-row main:justify-between
                ">
                    <p className="main:w-[714px] shrink-0 text-grey-2">
                        *Обращаем Ваше внимание на то, что данный сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
                    </p>
                    <div className="flex flex-col gap-2 items-end">
                        <Link href="policy" className="text-grey-2 transition-colors hover:text-primary">Политика конфиденциальности</Link>
                        <Link href="agreement" className="text-grey-2 transition-colors hover:text-primary">Пользовательское соглашение</Link>
                        <p className="text-grey-2">2023 (с) Все права защищены</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}