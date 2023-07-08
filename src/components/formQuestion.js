"use client"


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function FormQuestion() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        setSuccess(true);
    }
    const [success, setSuccess] = useState(false);

    return (
        <div className="px-6 py-4 main:px-12 main:py-8 rounded-3xl overflow-hidden 
            bg-gradient-to-r from-[#D72642] to-[#5554A9] relative">
            <div className={`absolute inset-0 flex justify-center transition-all delay-300 duration-1000 ${success ? "" : "-translate-y-40 opacity-0"}`}>
                <h5 className="text-white flex justify-center items-center">Ваше сообщение принято!</h5>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-6transition-all delay-300 duration-1000 ${success ? "translate-y-40 opacity-0" : ""}`}>
                <h3 className="text-white">Не нашли ответ на свой вопрос?</h3>

                <h5 className="text-white">Задайте нам свой вопрос</h5>


                <div className="flex flex-col gap-6">
                    <div className="flex gap-6 flex-col main:flex-row">
                        <input
                            className={`
                                w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                                bg-white text-black transition-colors
                                focus:text-primary focus:border-[#B6A282]
                                active::text-black active:border-black
                                ${errors.name ? "border-primary" : "border-black/0"}
                            `}
                            placeholder='Ваше ФИО'
                            {...register("name", { required: true })}
                        />
                        <input
                            className={`
                                w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                                bg-white text-black transition-colors
                                focus:text-primary focus:border-[#B6A282]
                                active::text-black active:border-black
                                ${errors.email ? "border-primary" : "border-black/0"}
                            `}
                            placeholder='Email'
                            {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                        />
                    </div>
                    <textarea
                        className={`
                        w-full px-4 py-[13px] rounded-lg leading-[20px] border outline-none
                        bg-white text-black transition-colors
                        focus:text-primary focus:border-[#B6A282]
                        active::text-black active:border-black
                        ${errors.message ? "border-primary" : "border-black/0"}
                    `}
                        placeholder="Ваш вопрос..."
                        {...register("message", { required: true })}
                    />
                    <div class="flex items-start gap-6">
                        <div className={`w-5 h-5 relative rounded-none border border-white bg-transparent shrink-0
                                transition-colors
                                hover:border-additional
                                ${errors.agreeMessage ? "border-primary" : "border-black/0"}
                            `}>
                            <input type="checkbox" {...register("agreeMessage", { required: true })}
                                class="absolute inset-0 opacity-0  z-10"
                            />
                            <Image
                                src="/icons/tick.svg"
                                alt=""
                                width={20} height={20}
                                className={`${watch("agreeMessage") ? "opacity-100" : "opacity-0"}`}
                            />
                        </div>
                        <p className="body2 text-white">
                            В соответствии с требованиями ФЗ № 152 от 27.07.2006 г. «О персональных данных» я даю добровольное согласие на обработку своих персональных данных и соглашаюсь с
                            &nbsp;
                            <Link href="policy" className="transition-colors hover:text-additional">политикой конфиденциальности</Link>
                        </p>
                    </div>
                    <div class="flex items-start gap-6">
                        <div className={`w-5 h-5 relative rounded-none border border-white bg-transparent shrink-0
                                transition-colors
                                hover:border-additional
                                ${errors.agreePolicy ? "border-primary" : "border-black/0"}
                            `}>
                            <input type="checkbox" {...register("agreePolicy", { required: true })}
                                class="absolute inset-0 opacity-0  z-10"
                            />
                            <Image
                                src="/icons/tick.svg"
                                alt=""
                                width={20} height={20}
                                className={`${watch("agreePolicy") ? "opacity-100" : "opacity-0"}`}
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
            </form>
        </div>
    )
}