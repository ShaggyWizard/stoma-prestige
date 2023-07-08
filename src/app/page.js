import Image from 'next/image'
import Link from 'next/link'
import GallerySlider from '@/components/gallerySlider'
import ObjectSlider from '@/components/objectSlider'
import Enroll from '@/components/enroll'
import FaqCard from '@/components/faqCard'
import ReviewSlider from '@/components/reviewSlider'
import Map from '@/components/map'
import Rassrochka from '@/components/rassrochka'
import ServiseCard from '@/components/ServiceCard'
import { FormatText } from '@/lib/textFormatter'
import { Fragment } from 'react'
import getStaffData from '@/lib/queries/getStaffData'
import getFaqData from '@/lib/queries/getFaqData'
import getHomePageData from '@/lib/queries/getHomePageData'
import getCommonData from '@/lib/queries/getCommonData'
import getContactsData from '@/lib/queries/getContactsData'
import ModalButton from '@/components/ModalButton'
import getReviewsData from '@/lib/queries/getReviewsData'


export const revalidate = 120;


export default async function Home() {
    const homePageData = await getHomePageData();
    const staffData = await getStaffData();
    const faqData = await getFaqData();
    const commonData = await getCommonData();
    const contactsData = await getContactsData();
    const reviewsData = await getReviewsData();
    

    const [homePage, staff, faq, { works, common }, contacts, reviews] = await Promise.all([homePageData, staffData, faqData, commonData, contactsData, reviewsData])

    return (
        <main className="flex flex-col">
            <Banner banner={homePage.banner} />
            <div className='py-6 main:py-12 container mx-auto'>
                <Rassrochka data={common?.credit_acf} />
            </div>
            <NashiPreimushestva advantages={homePage.advantages} />
            <NashiVrachi doctors={staff.doctors} text={homePage.doctors} />
            <About about={homePage.about} offer={common?.offer} />
            <NashaKlinika data={common?.gallery_acf} />
            <KakMyRabotaem works={works} />
            <div className='container mx-auto 
                py-6 main:py-12
            '>
                <Enroll id="enroll" />
            </div>
            <Faq data={faq} faq={faq} />
            <Reviews reviews={reviews} />
            <Contacts contacts={contacts} />
            <div className='animate transition-all duration-1000 delay-[400ms]
                [&.animate:not(.show)]:opacity-0 [&.animate:not(.show)]:translate-y-1/2'
            >
                <Map />
            </div>
        </main>
    )
}



const Banner = ({ banner }) => {
    let i = 0;
    const delayOffset = 17;
    const delayStep = 3;
    return (
        <div className="pt-[111px] relative group banner-block animate">

            {/* bg image */}
            <div className='w-full absolute top-0 h-[710px] rounded-b-[48px] overflow-hidden -z-10
                transition-all duration-1000 delay-400
                opacity-0 -translate-y-full
                group-[.banner-block.show]:opacity-100 group-[.banner-block.show]:translate-y-0
            '>
                <div className='absolute inset-0 bg-gradient-to-b from-[#6D4E40] to-[#29201C] z-10 opacity-80 animate' />
                {banner.image &&
                    <Image src={banner.image} fill sizes="100vw" alt="" style={{ objectFit: "cover" }} />
                }
            </div>

            {/* bg grey */}
            <div className='w-full absolute top-0 h-[919px] rounded-b-[48px] bg-grey-4 -z-20
                transition-all duration-1000 delay-100
                opacity-0 -translate-y-full
                group-[.banner-block.show]:opacity-100 group-[.banner-block.show]:translate-y-0
            ' />

            {/* content */}
            <div className='container mx-auto pt-[208px] flex flex-col 
                main:gap-12
                max-main:gap-[38px]
            '>

                <div className='flex max-main:flex-col max-main:gap-4 gap-16 text-white'>
                    <h1 className='main:w-[673px] 
                        transition-all duration-1000 delay-[600ms]
                        opacity-0 -translate-y-full
                        group-[.banner-block.show]:opacity-100 group-[.banner-block.show]:translate-y-0
                    '>
                        {banner.title}
                    </h1>
                    <div className='flex-1 flex flex-col
                        max-main:gap-4
                        main:gap-6 main:py-[10px]
                    '>
                        <h2 className='transition-all duration-1000 delay-[800ms]
                            opacity-0 -translate-y-full
                            group-[.banner-block.show]:opacity-100 group-[.banner-block.show]:translate-y-0
                        '>
                            {banner.text}
                        </h2>
                        <div className="transition-all duration-1000 delay-[1200ms]
                            opacity-0 -translate-y-full
                            group-[.banner-block.show]:opacity-100 group-[.banner-block.show]:translate-y-0
                            py-[13px] 
                        ">
                            <ModalButton className='bg-primary rounded-full px-6 py-[13px] font-medium w-fit transition-colors hover:bg-primary-hover' >
                                Записаться
                            </ModalButton>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-5 gap-2 max-main:grid-cols-2'>
                    {banner.cards.map((_card, _i) => {
                        i++;
                        return (
                            <div key={_i} className={`main:h-[220px] max-main:h-[129px]
                                transition-all duration-700 ${delay[delayOffset + (_i * delayStep)]}
                                opacity-0 translate-x-full
                                group-[.banner-block.show]:opacity-100 group-[.banner-block.show]:translate-x-0
                            `}>
                                <ServiseCard animated={true} image={_card.image} >{_card.text}</ServiseCard>
                            </div>
                        )
                    }
                    )}

                    <div className={`main:h-[220px] max-main:h-[129px]
                        transition-all duration-700 ${delay[delayOffset + (i * delayStep)]}
                        opacity-0 translate-x-full
                        group-[.banner-block.show]:opacity-100 group-[.banner-block.show]:translate-x-0 parent
                    `}>
                        <Link
                            href="doctors"
                            className='
                                bg-primary rounded-3xl relative overflow-hidden
                                block w-full h-full group parent
                            '
                        >
                            <div className='absolute inset-0 p-6 flex flex-col justify-between z-20'>
                                <p className='text-white'>Показать все</p>
                            </div>

                            <div className="
                                absolute rounded-full z-10

                                bg-transparent
                                opacity-0
                                w-20 h-20
                                bottom-4 right-4

                                transition-all duration-500

                                group-[.parent]:group-hover:bg-primary-hover
                                group-[.parent]:group-hover:opacity-100
                                group-[.parent]:group-hover:w-[320px] group-[.parent]:group-hover:h-[320px]
                                group-[.parent]:group-hover:-right-12 group-[.parent]:group-hover:-bottom-12
                            " />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}


const NashiPreimushestva = ({ advantages }) => {
    const delayOffset = 10;
    const delayStep = 3;
    return (
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
            animate group
        '>
            <div className='flex
                flex-col gap-6
                main:flex-row main:gap-12
            '>
                <h3 className='flex-1
                    transition-all delay-[200ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                '>
                    <FormatText text={advantages.title} />
                </h3>
                <h2 className='shrink-0 whitespace-pre-wrap main:w-[539px]
                    transition-all delay-[600ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                '>
                    <FormatText text={advantages.text} />
                </h2>
            </div>
            <div className='grid gap-2 overflow-hidden
                grid-cols-2 auto-rows-[129px] max-main:h-[266px]
                main:grid-cols-4 main:auto-rows-[300px]
            '>
                {advantages.cards.map((_node, _i) =>
                    <Fragment key={_i}>
                        {_node.image ?
                            <ImageCard image={_node.image} className={` transition-all duration-1000 ${delay[_i * delayStep + delayOffset]}
                                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-full
                            `} />
                            :
                            <TextCard className={`transition-all duration-1000 ${delay[_i * delayStep + delayOffset]}
                                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-full
                            `}>{_node.text}</TextCard>
                        }
                    </Fragment>
                )}
            </div>
        </div>
    )
}
const TextCard = ({ children, className }) => {
    return (
        <div className={`bg-white text-black rounded-3xl border border-grey-4 p- main:p-6 ${className}`}>
            <h5>{children}</h5>
        </div>
    )
}
const ImageCard = ({ image, className }) => {
    return (
        <div className={`bg-white rounded-3xl overflow-hidden flex flex-col justify-between relative animate ${className}`}>
            <Image style={{ objectFit: "cover" }} fill src={image} alt="" />
        </div>
    )
}


const NashiVrachi = ({ doctors, text }) => {
    const delayOffset = 10;
    const delayStep = 3;
    let i = 0;
    return (
        <div className='container mx-auto flex flex-col
            gap-6 py-6
            main:gap-12 main:py-12
            animate group
        '>
            <div className='flex
                gap-6 flex-col
                main:gap-12 main:flex-row
            '>
                <h3 className='flex-1 transition-all delay-[200ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                '>
                    <FormatText text={text.title} />
                </h3>
                <h2 className='main:w-[539px] shrink-0 whitespace-pre-wrap
                    transition-all delay-[600ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                '>
                    <FormatText text={text.text} />
                </h2>
            </div>
            <div className='grid gap-2
                grid-cols-1 auto-rows-[204px]
                main:grid-cols-2 main:auto-rows-[254px]
            '>
                {doctors?.splice(0, 4)?.map((_node, _i) => {
                    i++;
                    return (
                        <div key={_i} className={`transition-all duration-1000 ${delay[_i * delayStep + delayOffset]}
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-1/2
                        `}>
                            <Doctor name={_node.name} image={_node.image} />
                        </div>
                    )
                }
                )}
            </div>
            <div className={`flex justify-center transition-all duration-1000 ${delay[i * delayStep + delayOffset]}
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
            `}>
                <Link href="/doctors" className="
                    self-center py-2 border-b 
                    transition-colors
                    border-black text-black 
                    hover:border-primary hover:text-primary
                ">
                    Показать все
                </Link>
            </div>
        </div>
    )
}
const Doctor = ({ name, image }) => {
    const src = image ? image : "/images/doctor-placeholder.png";

    return (
        <div className={`bg-white text-black rounded-3xl border border-additional flex gap-6 relative
            p-4
            main:p-6
            transition-colors duration-500
            hover:bg-additional
        `}>
            <div className='flex-1 flex flex-col gap-[10px]'>
                <h5>{name}</h5>
                <div className='flex-1'>
                    <Link href="/doctors" className='
                        transition-colors  text-grey-2
                        hover:text-primary
                    '>
                        подробнее
                    </Link>
                </div>
                <ModalButton className='
                    font-medium rounded-full border px-6 py-4 w-fit
                    border-primary
                    transition-colors duration-500
                    text-primary bg-transparent
                    hover:text-white hover:bg-primary
                '>
                    Запись онлайн
                </ModalButton>
            </div>
            <div className='relative 
                w-[120px] h-[172px]
                main:w-[144px] main:h-[206px]
            '>
                <Image
                    className='rounded-full z-[1]'
                    style={{ objectFit: "cover" }}
                    fill
                    sizes="(max-width: 1248px) 120px, 144px"
                    src={src} alt=""
                    quality={100}
                />
            </div>
        </div>
    )
}


const About = ({ about, offer }) => {
    const delayOffset = 10;
    const delayStep = 3;
    return (
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
            animate group
        '>
            <div className='flex
                flex-col gap-6
                main:flex-row main:gap-12
            '>
                <h3 className='shrink-0 main:w-[280px] transition-all delay-[200ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                '>
                    {about.title}
                </h3>
                <h5 className='whitespace-pre-wrap transition-all delay-[600ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full
                '>
                    {about.text}
                </h5>
            </div>
            <div className='flex flex-col gap-4 '>
                <h4>{offer?.offerText}</h4>
                <div className='grid gap-2
                    grid-cols-2
                    main:grid-cols-4
                '>
                    {offer?.offerCards?.map((_node, _i) =>
                        <div key={_i} className={`transition-all duration-1000 ${delay[_i * delayStep + delayOffset]}
                            group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-full`}>
                            <ServiseCard image={_node.icon?.sourceUrl}>{_node.text}</ServiseCard>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const NashaKlinika = ({ data }) => {
    return (
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
        '>
            <GallerySlider nodes={data?.galleryGallery}>
                <h4>{data?.galleryTitle}</h4>
            </GallerySlider>
        </div>
    )
}


const KakMyRabotaem = ({ works }) => {
    return (
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
        '>
            <ObjectSlider nodes={works.cards}>
                <h3>{works.title}</h3>
            </ObjectSlider>
        </div>
    )
}


const Faq = ({ faq }) => {
    let nodes = faq?.faq_acf?.faqNodes ? [...faq.faq_acf.faqNodes] : null;
    return (
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
            group animate
        '>
            <div className="flex flex-col gap-6 main:flex-row main:gap-12">
                <h3 className='main:w-[280px] shrink-0 transition-all duration-1000 delay-[400ms]
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full'>Вопрос-ответ</h3>
                <h5 className='transition-all duration-1000 delay-[700ms]
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full'>
                    Мы понимаем, что лечение зубов - это ответственный процесс и у вас могут возникнуть вопросы. Вы можете&nbsp;
                    <ModalButton className='underline hover:text-primary'>записаться</ModalButton>&nbsp;к нам на консультацию или задать свой вопрос&nbsp;
                    <Link href="faq" className='underline  hover:text-primary'>здесь</Link>
                </h5>
            </div>
            <div className='grid grid-cols-1 main:grid-cols-2 gap-2 transition-all duration-1000 delay-[1000ms]
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-full'>
                {nodes?.splice(0, 3)?.map((_node, _i) =>
                    <FaqCard node={_node} key={_i} />
                )}
                <Link
                    href="faq"
                    className="
                        bg-white rounded-3xl border border-grey-4 flex
                        transition-colors duration-500 overflow-hidden
                        hover:bg-additional h-fit
                        p-4
                        main:p-6
                    "
                >
                    <h5>Другие вопросы и ответы</h5>
                </Link>
            </div>
        </div>
    )
}

const Reviews = ( {reviews}) => {
    return (
        <div className='container mx-auto flex flex-col overflow-visible 
            pt-6 gap-6
            main:pt-12 main:gap-12
        '>
            <ReviewSlider nodes={reviews}>
                <h3>Отзывы</h3>
            </ReviewSlider>
        </div>
    )
}


const Contacts = ({ contacts }) => {
    return (
        <div id="contacts" className='pt-6 main:pt-12 animate transition-all duration-1000 delay-[400ms]
        [&.animate:not(.show)]:opacity-0 [&.animate:not(.show)]:translate-y-full'>
            <div className='bg-gradient-to-r from-[#D72642] to-[#5554A9]'>
                <div className="container mx-auto flex gap-6
                    py-6 flex-col
                    main:py-12 main:flex-row
                ">
                    <h3 className='main:w-[588px] shrink-0 text-white'>Запишитесь на бесплатную консультацию</h3>
                    <div className='flex flex-col gap-4'>
                        <ContactItem type="adress" link={contacts.adress.link} text={contacts.adress.text} />
                        <ContactItem type="whatsapp" link={contacts.whatsapp.link} text={contacts.whatsapp.text} />
                        {contacts.telephones.map((node, i) =>
                            <ContactItem key={i} type="number" link={node.link} text={node.text} />
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

const ContactItem = ({ type, text, link }) => {
    let src = "/icons/phone.svg"
    switch (type) {
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
        <a href={link} target='_blank' rel="noopener noreferrer"
            className='flex gap-6 group'
        >
            <Image src={src} alt="" width={24} height={24} />
            <h5 className='text-white transition-colors group-hover:text-additional'>{text}</h5>
        </a>
    )
}

const delay = [
    "delay-[0ms]",
    "delay-[100ms]",
    "delay-[200ms]",
    "delay-[300ms]",
    "delay-[400ms]",
    "delay-[500ms]",
    "delay-[600ms]",
    "delay-[700ms]",
    "delay-[800ms]",
    "delay-[900ms]",
    "delay-[1000ms]",
    "delay-[1100ms]",
    "delay-[1200ms]",
    "delay-[1300ms]",
    "delay-[1400ms]",
    "delay-[1500ms]",
    "delay-[1600ms]",
    "delay-[1700ms]",
    "delay-[1800ms]",
    "delay-[1900ms]",
    "delay-[2000ms]",
    "delay-[2100ms]",
    "delay-[2200ms]",
    "delay-[2300ms]",
    "delay-[2400ms]",
    "delay-[2500ms]",
    "delay-[2600ms]",
    "delay-[2700ms]",
    "delay-[2800ms]",
    "delay-[2900ms]",
    "delay-[3000ms]",
    "delay-[3100ms]",
    "delay-[3200ms]",
    "delay-[3300ms]",
    "delay-[3400ms]",
    "delay-[3500ms]",
    "delay-[3600ms]",
    "delay-[3700ms]",
    "delay-[3800ms]",
    "delay-[3900ms]",
    "delay-[4000ms]",
    "delay-[4100ms]",
    "delay-[4200ms]",
    "delay-[4300ms]",
    "delay-[4400ms]",
    "delay-[4500ms]",
    "delay-[4600ms]",
    "delay-[4700ms]",
    "delay-[4800ms]",
    "delay-[4900ms]",
]