"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import ReactInputMask from "react-input-mask"

export default function Enroll({id}) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [consent, setConsent] = useState(false);

    const [nameValid, setNameValid] = useState(true);
    const [numberValid, setNumberValid] = useState(true);

    const [nameStarted, setNameStarted] = useState(false);
    const [numberStarted, setNumberStarted] = useState(false);
    const [consentStarted, setConsentStarted] = useState(false);

    return (
        <div id={id}
            className='container mx-auto flex flex-col gap-6 px-12 py-8 rounded-3xl
            bg-gradient-to-r from-[#D72642] to-[#5554A9]'
        >
            <h3 className="text-white">Запись на прием</h3>

            <div className="flex gap-6">

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
                        <ReactInputMask
                            className={`
                                    w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                                    bg-white text-black transition-colors
                                    focus:text-primary focus:border-[#B6A282]
                                    active::text-black active:border-black
                                    ${numberValid ? numberStarted ? "border-black" : "border-black/0" : "border-primary"}
                                `}
                            mask="+7 (999) 999-99-99"
                            placeholder='+7 (___) ____-___-___'
                            maskChar={null}
                            onChange={(e) => {
                                console.log(e.target.value.length);
                                setNumber(e.target.value);
                                setNumberValid(e.target.value.length === 18);
                                setNumberStarted(true);
                            }}
                            value={number}
                        />
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
                        <p className="body2 text-white">
                            В соответствии с требованиями ФЗ № 152 от 27.07.2006 г. «О персональных данных» я даю добровольное согласие на обработку своих персональных данных и соглашаюсь с
                            &nbsp;
                            <Link href="" className="transition-colors hover:text-additional">политикой конфиденциальности</Link> 
                        </p>
                    </div>
                </div>

                <button className="
                    bg-white rounded-full text-primary font-medium px-6 py-[13px] shrink-0
                    self-start
                    transition-colors
                    hover:bg-additional hover:text-primary-hover
                ">
                    Оставить заявку
                </button>
            </div>
        </div>
    )
}