"use client"

import Link from "next/link";
import CookieConsent from "react-cookie-consent";


export default function CookieConsentWrapper() {
    return (
        <div className="fixed z-[5000] right-6 bottom-6 ">
            <CookieConsent
                disableButtonStyles={true}
                disableStyles={true}
                buttonText="Согласиться"
                buttonClasses="bg-white px-6 py-4 text-primary border border-primary rounded-full hover:border-primary-hover hover:text-primary-hover transition-colors"
                containerClasses="w-[674px] flex gap-[30px] bg-white rounded-3xl px-[33px] py-5"
                style={{}}
                contentClasses="flex items-center"
                buttonWrapperClasses="flex items-center"
            >
                <p>
                    Этот сайт использует файлы cookies. Продолжая использовать наш сайт, вы автоматически соглашаетесь с&nbsp;
                    <Link href="agreement" className="underline text-primary transition-colors hover:text-primary-hover">Пользовательским соглашением</Link>
                </p>
            </CookieConsent>
        </div>
    )
}