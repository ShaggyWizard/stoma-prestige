import Image from 'next/image'
import Link from 'next/link'
import GallerySlider from './components/gallerySlider'
import ObjectSlider from './components/objectSlider'
import Enroll from './components/enroll'
import FaqCard from './components/faqCard'
import ReviewSlider from './components/reviewSlider'
import Map from './components/map'
import Rassrochka from './components/rassrochka'


export default function Home() {
    return (
        <main>
            <div className="flex flex-col gap-24">
                <FirstBlock />
                <NashiPreimushestva />
                <NashiVrachi />
                <About />
                <NashaKlinika />
                <KakMyRabotaem />
                <Enroll />
                <Faq />
                <Reviews />
                <Contacts />
            </div>
            <Map />
        </main>
    )
}


const FirstBlock = () => {
    return (
        <div className="pt-[319px] flex flex-col gap-12 relative">
            <div className='w-full absolute top-0 h-[710px] rounded-b-[48px] overflow-hidden -z-10'>
                <div className='absolute inset-0 bg-gradient-to-b from-[#6D4E40] to-[#29201C] z-10 opacity-80' />
                <Image src="/img cover.png" fill alt="" style={{ objectFit: "cover" }} />
            </div>
            <div className='w-full absolute top-0 h-[919px] rounded-b-[48px] bg-grey-4 -z-20' />


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
                <ServiseCard image="/icons/icon (5).svg">Удаление зубов</ServiseCard>
                <ServiseCard image="/icons/icon (6).svg">Имплантация зубов</ServiseCard>
                <ServiseCard image="/icons/icon (7).svg">Лечение зубов</ServiseCard>
                <ServiseCard image="/icons/icon (8).svg">Лечение десен</ServiseCard>
                <ServiseCard image="/icons/icon (9).svg">Лечение пародонтита</ServiseCard>
                <ServiseCard image="/icons/icon (10).svg">Профессиональная гигиена</ServiseCard>
                <ServiseCard image="/icons/icon (11).svg">Протезирование зубов</ServiseCard>
                <ServiseCard image="/icons/icon (12).svg">Починка протеза</ServiseCard>
                <ServiseCard image="/icons/icon (13).svg">Рентген-диагностика</ServiseCard>
                <div className='bg-primary text-white p-6 rounded-3xl h-[220px] flex flex-col justify-between'>
                    <p>Показать все</p>
                </div>
            </div>

            <Rassrochka />
        </div>
    )
}
const ServiseCard = ({ image, children }) => {
    return (
        <div className='bg-white text-black p-6 rounded-3xl h-[220px] border border-grey-4 flex flex-col justify-between'>
            <p>{children}</p>
            {image &&
                <Image className='self-end' width={64} height={64} src={image} alt="" />
            }
        </div>
    )
}


const NashiPreimushestva = () => {
    return (
        <div className='container mx-auto flex flex-col gap-12'>
            <div className='flex gap-12'>
                <h3 className='flex-1'>Наши преимущества</h3>
                <h2 className='w-[539px] shrink-0'>
                    Почему мы?<br />
                    Мы работаем с 2006 года и сотни пациентов доверили нам свои улыбки
                </h2>
            </div>
            <div className='grid grid-cols-4 auto-rows-[300px] gap-2 '>
                <TextCard>Наши врачи - настоящие профессионалы</TextCard>
                <TextCard>Современное оборудование</TextCard>
                <ImageCard image="/images/image (2).webp" />
                <TextCard>Лечение без боли</TextCard>
                <TextCard>Комфортабельность</TextCard>
                <ImageCard image="/images/image (3).webp" />
                <TextCard>Честные и прозрачные цены</TextCard>
                <ImageCard image="/images/image (4).webp" />
            </div>
        </div>
    )
}
const TextCard = ({ children }) => {
    return (
        <div className='bg-white text-black p-6 rounded-3xl border border-grey-4'>
            <h5>{children}</h5>
        </div>
    )
}
const ImageCard = ({ image }) => {
    return (
        <div className='bg-white rounded-3xl overflow-hidden flex flex-col justify-between relative'>
            <Image style={{ objectFit: "cover" }} fill src={image} alt="" />
        </div>
    )
}


const NashiVrachi = () => {
    return (
        <div className='container mx-auto flex flex-col gap-12'>
            <div className='grid grid-cols-2 auto-rows-[254px] gap-2'>
                <Doctor name="Доктор" image="" />
                <Doctor name="Доктор" image="" />
                <Doctor name="Доктор" image="" />
                <Doctor name="Доктор" image="" />
            </div>
            <Link href="" className="
                self-center py-2 border-b 
                transition-colors
                border-black text-black 
                hover:border-primary hover:text-primary
            ">Показать все</Link>
        </div>
    )
}
const Doctor = ({ name, image }) => {
    const src = image ? image : "/images/doctor-placeholder.png";
    return (
        <div className='bg-white text-black p-6 rounded-3xl border border-additional flex gap-6 relative'>
            <div className='flex-1 flex flex-col gap-[10px]'>
                <h5>{name}</h5>
                <div className='flex-1'>
                    <Link href="" className='
                        transition-colors  text-grey-2
                        hover:text-primary
                    '>
                        подробнее
                    </Link>
                </div>
                <Link href="" className='
                    font-medium rounded-full border px-6 py-[13px] w-fit
                    transition-colors border-primary text-primary
                    hover:border-primary-hover  hover:text-primary-hover
                '>
                    Запись онлайн
                </Link>
            </div>
            <Image
                className='rounded-full z-[1]'
                style={{ objectFit: "cover" }}
                width={144} height={206}
                src={src} alt=""
                quality={100}
            />
        </div>
    )
}


const About = () => {
    const text = "Стоматологическая клиника «Стома Престиж» работает в Якутске с 2006 года и оказывает комплексные услуги по лечению зубов.В нашей клинике созданы все условия для того, чтобы вы чувствовали себя комфортно.Наша дружная команда профессионалов сделала сотни красивых улыбок, которые изменили жизнь пациентов к лучшему. Мы используем только современные технологии и материалы. Благодаря опыту наших врачей мы восстанавливаем здоровье ваших зубов даже в сложных случаях"
    return (
        <div className='container mx-auto flex flex-col gap-12'>
            <div className='flex gap-12'>
                <h3 className='shrink-0 w-[280px]'>О клинике</h3>
                <h5>{text}</h5>
            </div>
            <div className='flex flex-col gap-4 '>
                <h4>Мы предлагаем:</h4>
                <div className='grid grid-cols-4 gap-2'>
                    <ServiseCard image="">Предложение</ServiseCard>
                    <ServiseCard image="">Предложение</ServiseCard>
                    <ServiseCard image="">Предложение</ServiseCard>
                    <ServiseCard image="">Предложение</ServiseCard>
                </div>
            </div>
        </div>
    )
}

const NashaKlinika = () => {
    const nodes = [
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
        {
            image: "/images/doctor-placeholder.png",
        },
    ]
    return (
        <div className='container mx-auto flex flex-col gap-12'>
            <GallerySlider nodes={nodes}>
                <h4>Наша клиника</h4>
            </GallerySlider>
        </div>
    )
}


const KakMyRabotaem = () => {
    const nodes = [
        {
            image: "/images/doctor-placeholder.png",
            problem: "Кариес жевательных зубов верхней челюсти",
            doctor: "Стоматолог-терапевт Ядрихинский А.А.",
        },
        {
            image: "/images/doctor-placeholder.png",
            problem: "Прямая композитная реставрация фронтальных зубов",
            doctor: "Стоматолог-терапевт Ядрихинский А.А.",
        },
    ]
    return (
        <div className='container mx-auto flex flex-col gap-12'>
            <ObjectSlider nodes={nodes}>
                <h3>Как мы работаем</h3>
            </ObjectSlider>
        </div>
    )
}


const Faq = () => {
    const nodes = [
        {
            question: "Принимаете ли вы по острой боли?",
            answer: "Да. Если у вас острая боль вы можете связаться с нами по номеру 8 (914) 27-58-558 и наш администратор сможет организовать вам срочный прием.",
        },
        {
            question: "Принимаете ли вы по острой боли?",
            answer: "Да. Если у вас острая боль вы можете связаться с нами по номеру 8 (914) 27-58-558 и наш администратор сможет организовать вам срочный прием.",
        },
        {
            question: "Принимаете ли вы по острой боли?",
            answer: "Да. Если у вас острая боль вы можете связаться с нами по номеру 8 (914) 27-58-558 и наш администратор сможет организовать вам срочный прием.",
        },
    ]
    return (
        <div className='container mx-auto flex flex-col gap-12'>
            <div className="flex gap-12">
                <h3 className='w-[280px] shrink-0'>Вопрос-ответ</h3>
                <h5>
                    Мы понимаем, что лечение зубов - это ответственный процесс и у вас могут возникнуть вопросы. Вы можете
                    &nbsp;
                    <Link href="" className='underline hover:text-primary'>записаться</Link>
                    &nbsp;
                    к нам на консультацию или задать свой вопрос
                    &nbsp;
                    <Link href="" className='underline  hover:text-primary'>здесь</Link>
                </h5>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {nodes.map((node, i) =>
                    <FaqCard node={node} key={i} />
                )}
                <Link
                    href=""
                    className="
                        bg-white rounded-3xl p-6 border border-grey-4 flex flex-col gap-12
                        transition-colors duration-500 overflow-hidden
                        hover:bg-additional h-fit
                    "
                >
                    <h5>Другие вопросы и ответы</h5>
                </Link>
            </div>
        </div>
    )
}

const Reviews = () => {
    const nodes = [
        {
            text: "Спасибо огромное, доктору Афанасию Афанасьевичу за его золотые руки, мастер своего дела. Хожу в эту клинику очень давно, рекомендую всем.",
            name: "Татьяна",
        },
        {
            text: "Заехал по дороге на работу без записи с острой боли, нашли окошку приняли без вопросов.Лечение без боли все высшем уровне! Афанасий врач большой профи.рекомендую.спасибо",
            name: "Ньургун",
        },
        {
            text: "Спасибо большое Сергею Витальевичу за профессиональное безболезненное лечение .Всем советую 👍🏾",
            name: "Яна",
        },
        {
            text: "Хочу поблагодарить врача Федорову Альбину Кимовну за профессионализм, очень довольна лечением! Также хочу отметить коллектив, очень вежливый и приятный!",
            name: "Елена",
        },
    ]
    return (
        <div className='container mx-auto flex flex-col gap-12 overflow-visible'>
            <ReviewSlider nodes={nodes}>
                <h3>Отзывы</h3>
            </ReviewSlider>
        </div>
    )
}


const Contacts = () => {
    const nodes = [
        {
            type: "adress",
            text: "г. Якутск, ул.Лермонтова, д.23, оф 1"
        },
        {
            type: "whatsapp",
            text: "8 (914) 27-58-558"
        },
        {
            type: "number",
            text: "8 (924) 76-13-107"
        },
        {
            type: "number",
            text: "8 (4112) 22-58-58"
        },
    ]
    return (
        <div className='bg-gradient-to-r from-[#D72642] to-[#5554A9]'>
            <div className="container mx-auto py-12 flex gap-6">
                <h3 className='w-[588px] shrink-0 text-white'>Запишитесь на бесплатную консультацию</h3>
                <div className='flex flex-col gap-4'>
                    {nodes.map((node, i) =>
                        <ContactItem key={i} node={node} />
                    )}
                </div>
            </div>
        </div>
    )
}

const ContactItem = ({ node }) => {
    let src = "/icons/phone.svg"
    let href = node.href ? node.href : "";
    switch (node.type) {
        case "adress":
            src = "/icons/map-pin.svg"
            break;
        case "whatsapp":
            src = "/icons/whatsapp.svg"
            break;
        case "number":
            src = "/icons/phone.svg"
            break;
    }
    return (
        <a href={href} target='_blank' rel="noopener noreferrer"
            className='flex gap-6 group'
        >
            <Image src={src} alt="" width={24} height={24} />
            <h5 className='text-white transition-colors group-hover:text-additional'>{node.text}</h5>
        </a>
    )
}