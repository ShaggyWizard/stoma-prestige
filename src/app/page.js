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


export const revalidate = 0;


export default async function Home() {
    const homePageData = await getHomePageData();
    const staffData = await getStaffData();
    const faqData = await getFaqData();
    const commonData = await getCommonData();
    const contactsData = await getContactsData();

    const [homePage, staff, faq, { works, common }, contacts] = await Promise.all([homePageData, staffData, faqData, commonData, contactsData])

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
            <Reviews />
            <Contacts contacts={contacts} />
            <Map />
        </main>
    )
}


const Banner = ({ banner }) => {
    return (
        <div className="pt-[111px] relative">

            {/* bg image */}
            <div className='w-full absolute top-0 h-[710px] rounded-b-[48px] overflow-hidden -z-10'>
                <div className='absolute inset-0 bg-gradient-to-b from-[#6D4E40] to-[#29201C] z-10 opacity-80' />
                {banner.image &&
                    <Image src={banner.image} fill sizes="100vw" alt="" style={{ objectFit: "cover" }} />
                }
            </div>

            {/* bg grey */}
            <div className='w-full absolute top-0 h-[919px] rounded-b-[48px] bg-grey-4 -z-20' />

            {/* content */}
            <div className='container mx-auto pt-[208px] flex flex-col 
                main:gap-12
                max-main:gap-[38px]
            '>

                <div className='flex max-main:flex-col max-main:gap-4 gap-16 text-white'>
                    <h1 className='main:w-[673px]'>{banner.title}</h1>
                    <div className='flex-1 flex flex-col 
                        max-main:gap-4
                        main:gap-6 main:py-[10px]
                    '>
                        <h2>{banner.text}</h2>
                        <Link href="" className='bg-primary rounded-full px-6 py-[13px] font-medium w-fit transition-colors hover:bg-primary-hover'>
                            Записаться
                        </Link>
                    </div>
                </div>


                <div className='grid grid-cols-5 gap-2 max-main:grid-cols-2'>
                    {banner.cards.map((_card, _i) =>
                        <ServiseCard key={_i} animated={true} image={_card.image} >{_card.text}</ServiseCard>
                    )}

                    <Link
                        href="doctors"
                        className='
                        bg-primary rounded-3xl relative group overflow-hidden
                        
                        main:h-[220px]
                        max-main:h-[129px]
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

                        group-hover:bg-primary-hover
                        group-hover:opacity-100
                        group-hover:w-[320px] group-hover:h-[320px]
                        group-hover:-right-12 group-hover:-bottom-12
                    " />
                    </Link>
                </div>
            </div>


        </div>
    )
}


const NashiPreimushestva = ({ advantages }) => {
    return (
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
        '>
            <div className='flex
                flex-col gap-6
                main:flex-row main:gap-12
            '>
                <h3 className='flex-1'>
                    <FormatText text={advantages.title} />
                </h3>
                <h2 className='shrink-0 whitespace-pre-wrap
                    main:w-[539px]
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
                            <ImageCard image={_node.image} />
                            :
                            <TextCard>{_node.text}</TextCard>
                        }
                    </Fragment>
                )}
            </div>
        </div>
    )
}
const TextCard = ({ children }) => {
    return (
        <div className='bg-white text-black rounded-3xl border border-grey-4
            p-4
            main:p-6
        '>
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


const NashiVrachi = ({ doctors, text }) => {
    return (
        <div className='container mx-auto flex flex-col
            gap-6 py-6
            main:gap-12 main:py-12
        '>
            <div className='flex
                gap-6 flex-col
                main:gap-12 main:flex-row
            '>
                <h3 className='flex-1'>
                    <FormatText text={text.title} />
                </h3>
                <h2 className='main:w-[539px] shrink-0 whitespace-pre-wrap'>
                    <FormatText text={text.text} />
                </h2>
            </div>
            <div className='grid gap-2
                grid-cols-1 auto-rows-[204px]
                main:grid-cols-2 main:auto-rows-[254px]
            '>
                {doctors?.splice(0, 4)?.map((_node, _i) =>
                    <Doctor key={_i} name={_node.name} image={_node.image} />
                )}
            </div>
            <Link href="/doctors" className="
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
        <div className='bg-white text-black rounded-3xl border border-additional flex gap-6 relative
            p-4
            main:p-6
        '>
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
                <a href="#enroll" className='
                    font-medium rounded-full border px-6 py-4 w-fit
                    transition-colors border-primary text-primary
                    hover:border-primary-hover  hover:text-primary-hover
                '>
                    Запись онлайн
                </a>
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
    return (
        <div className='container mx-auto flex flex-col 
            gap-6 py-6
            main:gap-12 main:py-12
        '>
            <div className='flex
                flex-col gap-6
                main:flex-row main:gap-12
            '>
                <h3 className='shrink-0 main:w-[280px]'>{about.title}</h3>
                <h5 className='whitespace-pre-wrap'>{about.text}</h5>
            </div>
            <div className='flex flex-col gap-4 '>
                <h4>{offer?.offerText}</h4>
                <div className='grid gap-2
                    grid-cols-2
                    main:grid-cols-4
                '>
                    {offer?.offerCards?.map((_node, _i) =>
                        <ServiseCard key={_i} image={_node.icon?.sourceUrl}>{_node.text}</ServiseCard>
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
        '>
            <div className="flex flex-col gap-6 main:flex-row main:gap-12">
                <h3 className='main:w-[280px] shrink-0'>Вопрос-ответ</h3>
                <h5>
                    Мы понимаем, что лечение зубов - это ответственный процесс и у вас могут возникнуть вопросы. Вы можете&nbsp;
                    <a href="#enroll" className='underline hover:text-primary'>записаться</a>&nbsp;к нам на консультацию или задать свой вопрос&nbsp;
                    <Link href="faq" className='underline  hover:text-primary'>здесь</Link>
                </h5>
            </div>
            <div className='grid grid-cols-1 main:grid-cols-2 gap-2'>
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
        <div className='container mx-auto flex flex-col overflow-visible 
            pt-6 gap-6
            main:pt-12 main:gap-12
        '>
            <ReviewSlider nodes={nodes}>
                <h3>Отзывы</h3>
            </ReviewSlider>
        </div>
    )
}


const Contacts = ({ contacts }) => {
    return (
        <div id="contacts" className='pt-6 main:pt-12'>
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