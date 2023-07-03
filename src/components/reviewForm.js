"use client"


import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";


export default function ReviewForm() {
    const form = {
        input: {
            name: "Ваше имя",
            email: "Email",
            review: "Отзыв...",
            submit: "Оставить отзыв",
        },
        consents: [
            { slug: "policy", text: "В соответствии с требованиями ФЗ № 152 от 27.07.2006 г. «О персональных данных» я даю добровольное согласие на обработку своих персональных данных и соглашаюсь с политикой конфиденциальности" },
            { text: "Согласен на размещение вопроса на сайте" },
        ],
    }
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 main:grid-cols-2 gap-6">
                <input className="rounded-lg px-4 py-[13px]"
                    placeholder={form.input.name}
                    {...register("name", { required: true })}
                />
                <input className="rounded-lg px-4 py-[13px]"
                    placeholder={form.input.email}
                    {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                />
            </div>
            
            <textarea
                className="rounded-lg px-4 py-[13px] h-24 resize-none"
                placeholder={form.input.review}
                {...register("message", { required: true })}
            />

            <div class="flex items-start gap-6">
                <div className={`w-5 h-5 relative rounded-none border bg-transparent shrink-0
                        tranition-colors
                        main:hover:border-primary
                        ${errors.agreePolicy ? "border-primary" : "border-black"}
                    `}>
                    <input type="checkbox" {...register("agreePolicy", { required: true })}
                        class="absolute inset-0 opacity-0  z-10"
                    />
                    <Image
                        src="/icons/check.svg"
                        alt=""
                        width={20} height={20}
                        className={`${watch("agreePolicy") ? "opacity-100" : "opacity-0"}`}
                    />
                </div>
                <p className="body2">
                    В соответствии с требованиями ФЗ № 152 от 27.07.2006 г. «О персональных данных» я даю добровольное согласие на обработку своих персональных данных и соглашаюсь с
                    &nbsp;
                    <Link href="policy" className="transition-colors hover:text-additional">политикой конфиденциальности</Link>
                </p>
            </div>
            <div class="flex items-start gap-6">
                <div className={`w-5 h-5 relative rounded-none border bg-transparent shrink-0
                        tranition-colors
                        main:hover:border-primary
                        ${errors.agreeMessage ? "border-primary" : "border-black"}
                    `}>
                    <input type="checkbox" {...register("agreeMessage", { required: true })}
                        class="absolute inset-0 opacity-0  z-10"
                    />
                    <Image
                        src="/icons/check.svg"
                        alt=""
                        width={20} height={20}
                        className={`${watch("agreeMessage") ? "opacity-100" : "opacity-0"}`}
                    />
                </div>
                <p className="body2">Согласен на размещение вопроса на сайте</p>
            </div>

            <button
                className="bg-white rounded-full px-6 py-4 w-fit self-center
                text-primary font-medium
                transition-colors duration-300
                hover:text-primary-hover hover:bg-additional"
                type="submit">
                {form.input.submit}
            </button>
        </form>
    )
}