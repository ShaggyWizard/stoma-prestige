import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="pt-[319px]">
            <div className='w-full absolute top-0 h-[710px] rounded-b-[48px] overflow-hidden -z-10 '>
                <div className='absolute inset-0 bg-gradient-to-b from-[#6D4E40] to-[#29201C] z-10 opacity-80' />
                <Image src="/img cover.png" fill alt="" style={{ objectFit: "cover" }} />
            </div>
            <div className='container mx-auto flex gap-16 text-white'>
                <h1 className='w-[673px]'>
                    Стоматологическая клиника<br />
                    «Стома Престиж»
                </h1>
                <div className='flex-1 flex flex-col gap-6 py-[10px]'>
                    <h2>
                        Весь спектр услуг: лечение, протезирование, хирургия
                        Быстро и безболезненно
                    </h2>
                    <Link href="" className='bg-primary rounded-full px-6 py-[13px] font-medium w-fit transition-colors hover:bg-primary-hover'>
                        Записаться
                    </Link>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-5 gap-2 '>
                <ServiseCard>Удаление зубов</ServiseCard>
                <ServiseCard>Имплантация зубов</ServiseCard>
                <ServiseCard>Лечение зубов</ServiseCard>
                <ServiseCard>Лечение десен</ServiseCard>
                <ServiseCard>Лечение пародонтита</ServiseCard>
                <ServiseCard>Профессиональная гигиена</ServiseCard>
                <ServiseCard>Протезирование зубов</ServiseCard>
                <ServiseCard>Починка протеза</ServiseCard>
                <ServiseCard>Починка протеза</ServiseCard>
                <ServiseCard>Починка протеза</ServiseCard>
            </div>

        </main>
    )
}

const ServiseCard = ({ image, children }) => {
    return (
        <div className='bg-white text-black p-6 rounded-3xl h-[220px] border border-grey-4 flex flex-col justify-between'>
            <p>{children}</p>
            {image &&
                <Image className='' width={64} height={64} src={image} alt="" />
            }
        </div>
    )
}