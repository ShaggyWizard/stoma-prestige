"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import ReactInputMask from "react-input-mask"



export default function FormQuestion() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [consent, setConsent] = useState(false);

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);

    const [nameStarted, setNameStarted] = useState(false);
    const [emailStarted, setEmailStarted] = useState(false);
    const [messageStarted, setMessageStarted] = useState("");
    const [consentStarted, setConsentStarted] = useState(false);

    return (
        <div
            className='flex flex-col gap-6 px-12 py-8 rounded-3xl
            bg-gradient-to-r from-[#D72642] to-[#5554A9]'
        >
            <h3 className="text-white">Не нашли ответ на свой вопрос?</h3>

            <h5 className="text-white">Задайте нам свой вопрос</h5>


            <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                    <input
                        className={`
                                w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                                bg-white text-black transition-colors
                                focus:text-primary focus:border-[#B6A282]
                                active::text-black active:border-black
                                ${nameValid ? nameStarted ? "border-black" : "border-black/0" : "border-primary"}
                            `}
                        type="text"
                        placeholder="Ваше ФИО"
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameValid(e.target.value > 0);
                            setNameStarted(true);
                        }}
                        value={name}
                    />
                    <input
                        className={`
                                w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                                bg-white text-black transition-colors
                                focus:text-primary focus:border-[#B6A282]
                                active::text-black active:border-black
                                ${emailValid ? emailStarted ? "border-black" : "border-black/0" : "border-primary"}
                            `}
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailValid(e.target.value > 0);
                            setEmailStarted(true);
                        }}
                        value={email}
                    />
                </div>
                <textarea
                    className={`
                            w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                            bg-white text-black transition-colors
                            focus:text-primary focus:border-[#B6A282]
                            active::text-black active:border-black
                            ${messageValid ? messageStarted ? "border-black" : "border-black/0" : "border-primary"}
                        `}
                    placeholder="Ваш вопрос..."
                    onChange={(e) => {
                        setMessage(e.target.value);
                        setMessageValid(e.target.value > 0);
                        setMessageStarted(true);
                    }}
                    value={message}
                />
                <div className="flex gap-6 cursor-pointer" onClick={() => { setConsent(current => !current) }}>
                    <div className={`
                            w-5 h-5 rounded-none border border-white bg-transparent relative shrink-0
                            transition-colors
                            hover:border-additional
                            ${consent ? consentStarted ? "border-black" : "border-black/0" : "border-primary"}
                        `}>
                        <Image
                            src="/icons/tick.svg"
                            alt=""
                            width={20} height={20}
                            className={`${consent ? "opacity-100" : "opacity-0"}`}
                        />
                    </div>
                    <p className="body2 text-white">
                        В соответствии с требованиями ФЗ № 152 от 27.07.2006 г. «О персональных данных» я даю добровольное согласие на обработку своих персональных данных и соглашаюсь с
                        &nbsp;
                        <Link href="" className="transition-colors hover:text-additional">политикой конфиденциальности</Link>
                    </p>
                </div>
                <div className="flex gap-6 cursor-pointer" onClick={() => { setConsent(current => !current) }}>
                    <div className={`
                            w-5 h-5 rounded-none border border-white bg-transparent relative shrink-0
                            transition-colors
                            hover:border-additional
                            ${consent ? consentStarted ? "border-black" : "border-black/0" : "border-primary"}
                        `}>
                        <Image
                            src="/icons/tick.svg"
                            alt=""
                            width={20} height={20}
                            className={`${consent ? "opacity-100" : "opacity-0"}`}
                        />
                    </div>
                    <p className="body2 text-white">Согласен на размещение вопроса на сайте</p>
                </div>
            </div>

            <button className="
                    bg-white rounded-full text-primary font-medium px-6 py-[13px] shrink-0
                    self-center
                    transition-colors
                    hover:bg-additional hover:text-primary-hover
                ">
                Оставить заявку
            </button>
        </div>
    )
}