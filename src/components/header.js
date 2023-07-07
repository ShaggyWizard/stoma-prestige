"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import LogoMobile from "../../public/icons/logo-mobile.svg"
import LogoDesktop from "../../public/icons/logo-desktop.svg"
import Menu from "../../public/icons/menu.svg"
import { useEffect, useState } from "react";

export default function Header({ paths }) {
    const pathname = usePathname();

    const [visible, setVisible] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [position, setPosition] = useState(window?.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            let moving = window?.scrollY;

            setVisible(position > moving || showMenu);
            setPosition(moving);
        };
        window?.addEventListener("scroll", handleScroll);
        return () => {
            window?.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <header 
            className="
                w-full z-50 top-0 left-0 right-0
                main:absolute 
                max-main:fixed max-main:pointer-events-none
                animate transition-all duration-500 delay-300
                opacity-0 -translate-y-full blur-sm
                [&.show]:opacity-100 [&.show]:translate-y-0 [&.show]:blur-0
            "
        >
            {/* mobile */}
            <div className={`main:hidden relative transition-transform duration-500 ${visible ? "" : "translate-y-[-76px]"}`}>
                {/* top-menu */}
                <div className="container pointer-events-auto relative z-30 flex gap-6 items-center top-0 bg-white px-6 py-4 border-b border-grey-4">
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <Menu />
                    </button>
                    <Link href="/">
                        <LogoMobile className="text-primary" />
                    </Link>
                </div>
                {/* side-menu */}
                <div className={`bg-white relative border-r pointer-events-auto border-grey-4 h-screen w-[70vw] z-20 transition-transform duration-500 p-6 flex flex-col gap-4 ${showMenu ? "" : "translate-x-[calc(-70vw-1px)]"}`}>
                    {paths.map((node, i) =>
                        <Link key={i}
                            className={`text-black h-8 flex`}
                            href={node.link}
                            onClick={() => setShowMenu(false)}
                        >
                            <h5>{node.name}</h5>
                        </Link>
                    )}
                </div>
                <div className={`absolute bg-transparent cursor-pointer inset-0 z-10 ${showMenu ? "pointer-events-auto" : "translate-x-[-70vw] pointer-events-none"}`} onClick={() => setShowMenu(false)} />
            </div>
            {/* desktop */}
            <div className="max-main:hidden relative container mx-auto flex justify-between items-center pt-8 pb-6 top-0 left-0 right-0">
                <Link href="/">
                    <LogoDesktop className={`transition-colors duration-500 ${pathname === "/" ? "text-white" : "text-primary"}`} />
                </Link>
                <div className="flex gap-8">
                    {paths.map((node, i) =>
                        <Link key={i}
                            className={`
                                    pb-2.5 border-b border-transparent 
                                    transition-colors duration-300
                                    ${pathname === node.link ?
                                    "text-primary poiter"
                                    :
                                    pathname === "/" ?
                                        "text-white hover:border-white"
                                        :
                                        "text-black hover:border-black"
                                }
                                `}
                            href={node.link}
                        >
                            <p>{node.name}</p>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}