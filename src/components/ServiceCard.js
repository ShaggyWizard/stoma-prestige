import Image from "next/image";

export default function ServiseCard({ image, children, animated = false }) {
    return (
        <div className='rounded-3xl overflow-hidden group relative
            h-[129px]
            main:h-[220px] parent
        '>
            <div className='absolute inset-0 flex flex-col justify-between z-20
                p-4
                main:p-6
            '>
                <p className={`text-black ${animated ? "group-[.parent]:group-hover:text-white transition-all duration-500" : ""}`} >{children}</p>
                <div className='self-end relative w-16 h-16 max-main:w-12 max-main:h-12' >
                    {image &&
                        <Image fill src={image} alt="" className={animated && "opacity-100 group-[.parent]:group-hover:opacity-0 transition-all duration-500"}  />
                    }
                    {(animated) &&
                        <Image fill src={image} alt="" className="opacity-0 group-[.parent]:group-hover:opacity-100 transition-all duration-500 filter brightness-0 invert"/>
                    }
                </div>
            </div>

            {animated &&
                <div className="
                    absolute rounded-full z-10

                    bg-transparent
                    opacity-0
                    w-20 h-20
                    bottom-4 right-4

                    transition-all duration-500

                    group-[.parent]:group-hover:bg-primary
                    group-[.parent]:group-hover:opacity-100
                    group-[.parent]:group-hover:w-[320px] group-[.parent]:group-hover:h-[320px]
                    group-[.parent]:group-hover:-right-12 group-[.parent]:group-hover:-bottom-12
                " />
            }

            <div className='absolute inset-0 rounded-3xl border border-grey-4 z-0 bg-white' />
        </div>
    )
}