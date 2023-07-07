"use client"

import InputMask from "react-input-mask"
import { useForm } from "react-hook-form"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Enroll({ id }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} id={id}
            className='flex flex-col rounded-3xl gap-6
            bg-gradient-to-r from-[#D72642] to-[#5554A9]
            px-6 py-4
            main:px-12 main:py-8
            animate transition-all duration-1000 delay-[400ms]
            [&.animate:not(.show)]:opacity-0 [&.animate:not(.show)]:translate-y-full
        '>
            <h3 className="text-white">Запись на прием</h3>
            <div className="flex flex-col items-center main:items-start main:flex-row gap-6">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col main:flex-row gap-6">
                        <input
                            className={`
                                w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                                bg-white text-black transition-colors
                                focus:text-primary focus:border-[#B6A282]
                                active::text-black active:border-black
                                ${errors.number ? "border-primary" : "border-black/0"}
                            `}
                            placeholder='Ваше ФИО'
                            {...register("name", { required: true })}
                        />
                        <InputMask
                            className={`
                                    w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                                    bg-white text-black transition-colors
                                    focus:text-primary focus:border-[#B6A282]
                                    active::text-black active:border-black
                                    ${errors.number ? "border-primary" : "border-black/0"}
                                `}
                            mask="+7 (999) 999-99-99"
                            alwaysShowMask={false}
                            type={'text'}
                            placeholder='+7 (___) ___-__-__'
                            maskChar={null}
                            {...register("number", { required: true, minLength: 18 })}
                        />
                    </div>
                    <div class="flex items-start gap-6">
                        <div className={`w-5 h-5 relative rounded-none border border-white bg-transparent shrink-0
                                transition-colors
                                hover:border-additional
                                ${errors.agreement ? "border-primary" : "border-black/0"}
                            `}>
                            <input type="checkbox" {...register("agreement", { required: true })}
                                class="absolute inset-0 opacity-0  z-10"
                            />
                            <Image
                                src="/icons/tick.svg"
                                alt=""
                                width={20} height={20}
                                className={`${watch("agreement") ? "opacity-100" : "opacity-0"}`}
                            />
                        </div>
                        <p className="body2 text-white">
                            В соответствии с требованиями ФЗ № 152 от 27.07.2006 г. «О персональных данных» я даю добровольное согласие на обработку своих персональных данных и соглашаюсь с
                            &nbsp;
                            <Link href="/" className="transition-colors hover:text-additional">политикой конфиденциальности</Link>
                        </p>
                    </div>
                </div>

                <button className="
                    bg-white rounded-full text-primary font-medium px-6 py-[13px] shrink-0
                    transition-colors
                    hover:bg-additional hover:text-primary-hover
                ">
                    Оставить заявку
                </button>
            </div>
        </form>
    )
}