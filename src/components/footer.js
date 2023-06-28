import Image from "next/image";
import Link from "next/link";

export default function Footer({paths}) {

    return (
        <footer className="bg-white py-20">
            <div className="container mx-auto flex flex-col gap-7">
                <div className="flex justify-between items-center">
                    <Image width={226} height={52} src="/icons/logo-red.svg" alt="" />
                    <div className="flex gap-6 items-center">
                        <Image width={24} height={24} src="/icons/mail-red.svg" alt="" />
                        <a href="mailto:stoma.prestige@yandex.ru" className="transition-colors hover:text-primary">stoma.prestige@yandex.ru</a>
                        <Image width={24} height={24} src="/icons/map-pin-red.svg" alt="" />
                        <p>Якутск, ул. Лермонтова, 23</p>
                        <a 
                            href="https://wa.me/79142758558" target='_blank' rel="noopener noreferrer"
                            className="
                                bg-primary rounded-full px-4 py-3 flex gap-2 items-center 
                                transition-colors hover:bg-primary-hover
                            "
                        >
                            <Image width={24} height={24} src="/icons/whatsapp.svg" alt="" />
                            <p className="font-medium text-white">+79142758558</p>
                        </a>
                    </div>
                </div>


                <div className="flex gap-8">
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


                <div className="flex justify-between">
                    <p className="w-[714px] shrink-0 text-grey-2">
                        *Обращаем Ваше внимание на то, что данный сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
                    </p>
                    <div className="flex flex-col gap-2">
                        <Link href="policy" className="text-grey-2 transition-colors hover:text-primary">Политика конфиденциальности</Link>
                        <Link href="" className="text-grey-2 transition-colors hover:text-primary">Пользовательское соглашение</Link>
                        <p className="text-grey-2">2023 (с) Все права защищены</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}