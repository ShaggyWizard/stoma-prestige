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
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { FormatText } from '@/lib/textFormatter'
import { Fragment } from 'react'


export const revalidate = 0;


async function getData() {
    const { data } = await client.query({
        query: gql`
        query Data {
          page(id: "170", idType: DATABASE_ID) {
            main_banner {
              bannerTitle
              bannerText
              bannerImage {
                sourceUrl
              }
              bannerCards {
                text
                icon {
                  sourceUrl
                }
              }
            }
            advantages {
              advantagesTitle
              advantagesText
              advantagesCards {
                card {
                  text
                  image {
                    sourceUrl
                  }
                }
              }
            }
            about {
              aboutTitle
              aboutText
            }
          }
          common {
              offer {
                offerText
                offerCards {
                  text
                  icon {
                    sourceUrl
                  }
                }
              }
              credit_acf {
                creditTitle
                creditText
                creditAdditionalText
                creditIcons {
                  icon {
                    sourceUrl
                  }
                }
              }
              gallery_acf {
                galleryTitle
                galleryGallery {
                  sourceUrl
                }
              }
              how_acf {
                howTitle
                howCards {
                  problem
                  doctor
                  image {
                    sourceUrl
                  }
                }
              }
            }
            faq {
                pageTitle
                faq_acf {
                  faqNodes {
                    question
                    answer
                  }
                }
            }
            staff {
                staff {
                    doctors {
                        name
                        role
                        photo {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `,
    });

    const worksCards = []
    data?.common?.how_acf?.howCards?.forEach(_card => {
        worksCards.push({
            problem: _card.problem,
            doctor: _card.doctor,
            image: _card.image?.sourceUrl,
        });
    });

    let doctors = []
    data?.staff?.staff?.doctors?.forEach(_doctor => {
        doctors.push({ name: _doctor.name, role: _doctor.role, image: _doctor.photo?.sourceUrl });
    });

    return {
        data: data.page,
        common: data.common,
        faq: data.faq,
        works: {
            title: data?.common?.how_acf?.howTitle,
            cards: worksCards,
        },
        doctors: {
            title: "Наши врачи",
            text: "Наши врачи постоянно повышают квалификацию и развиваются в своей специализации",
            nodes: doctors,
        },
    }
}


export default async function Home() {

    const { data, common, faq, works, doctors } = await getData();

    return (
        <main className="flex flex-col">
            <Banner data={data?.main_banner} />
            <div className='py-12'>
                <Rassrochka data={common?.credit_acf} />
            </div>
            <NashiPreimushestva data={data?.advantages} />
            <NashiVrachi data={doctors} />
            <About data={data?.about} offer={common?.offer} />
            <NashaKlinika data={common?.gallery_acf} />
            <KakMyRabotaem data={works} />
            <div className='py-12'>
                <Enroll id="enroll" />
            </div>
            <Faq data={faq} faq={faq} />
            <Reviews />
            <Contacts />
            <Map />
        </main>
    )
}


const Banner = ({ data }) => {
    return (
        <div className="pt-[319px] flex flex-col gap-12 relative">
            <div className='w-full absolute top-0 h-[710px] rounded-b-[48px] overflow-hidden -z-10'>
                <div className='absolute inset-0 bg-gradient-to-b from-[#6D4E40] to-[#29201C] z-10 opacity-80' />
                {data?.bannerImage?.sourceUrl &&
                    <Image src={data?.bannerImage?.sourceUrl} fill alt="" style={{ objectFit: "cover" }} />
                }
            </div>
            <div className='w-full absolute top-0 h-[919px] rounded-b-[48px] bg-grey-4 -z-20' />


            <div className='container mx-auto flex gap-16 text-white'>
                <h1 className='w-[673px]'>{data?.bannerTitle}</h1>
                <div className='flex-1 flex flex-col gap-6 py-[10px]'>
                    <h2>{data?.bannerText}</h2>
                    <Link href="" className='bg-primary rounded-full px-6 py-[13px] font-medium w-fit transition-colors hover:bg-primary-hover'>
                        Записаться
                    </Link>
                </div>
            </div>


            <div className='container mx-auto grid grid-cols-5 gap-2 '>
                {data?.bannerCards.map((_card, _i) =>
                    <ServiseCard key={_i} animated={true} image={_card.icon?.sourceUrl} >{_card.text}</ServiseCard>
                )}

                <Link
                    href="doctors"
                    className='
                        bg-primary rounded-3xl h-[220px] relative group overflow-hidden
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
    )
}


const NashiPreimushestva = ({ data }) => {
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <div className='flex gap-12'>
                <h3 className='flex-1'>
                    <FormatText text={data?.advantagesTitle} />
                </h3>
                <h2 className='w-[539px] shrink-0 whitespace-pre-wrap'>
                    <FormatText text={data?.advantagesText} />
                </h2>
            </div>
            <div className='grid grid-cols-4 auto-rows-[300px] gap-2 '>
                {data?.advantagesCards?.map((_node, _i) =>
                    <Fragment key={_i}>
                        {_node.card?.image?.sourceUrl ?
                            <ImageCard image={_node.card.image?.sourceUrl} />
                            :
                            <TextCard>{_node.card?.text}</TextCard>
                        }
                    </Fragment>
                )}
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


const NashiVrachi = ({ data }) => {
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <div className='flex gap-12'>
                <h3 className='flex-1'>
                    <FormatText text={data.title} />
                </h3>
                <h2 className='w-[539px] shrink-0 whitespace-pre-wrap'>
                    <FormatText text={data.text} />
                </h2>
            </div>
            <div className='grid grid-cols-2 auto-rows-[254px] gap-2'>
                {data.nodes?.splice(0, 4)?.map((_node, _i) =>
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
                <a href="#enroll" className='
                    font-medium rounded-full border px-6 py-[13px] w-fit
                    transition-colors border-primary text-primary
                    hover:border-primary-hover  hover:text-primary-hover
                '>
                    Запись онлайн
                </a>
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


const About = ({ data, offer }) => {
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <div className='flex gap-12'>
                <h3 className='shrink-0 w-[280px]'>{data?.aboutTitle}</h3>
                <h5 className='whitespace-pre-wrap'>{data?.aboutText}</h5>
            </div>
            <div className='flex flex-col gap-4 '>
                <h4>{offer?.offerText}</h4>
                <div className='grid grid-cols-4 gap-2'>
                    {offer?.offerCards?.map((_node, _i) =>
                        <ServiseCard image={_node.icon?.sourceUrl}>{_node.text}</ServiseCard>
                    )}
                </div>
            </div>
        </div>
    )
}

const NashaKlinika = ({ data }) => {
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <GallerySlider nodes={data?.galleryGallery}>
                <h4>{data?.galleryTitle}</h4>
            </GallerySlider>
        </div>
    )
}


const KakMyRabotaem = ({ data }) => {
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <ObjectSlider nodes={data.cards}>
                <h3>{data.title}</h3>
            </ObjectSlider>
        </div>
    )
}


const Faq = ({ faq }) => {
    let nodes = faq?.faq_acf?.faqNodes ? [...faq.faq_acf.faqNodes] : null;
    return (
        <div className='container mx-auto flex flex-col gap-12 py-12'>
            <div className="flex gap-12">
                <h3 className='w-[280px] shrink-0'>Вопрос-ответ</h3>
                <h5>
                    Мы понимаем, что лечение зубов - это ответственный процесс и у вас могут возникнуть вопросы. Вы можете&nbsp;
                    <a href="#enroll" className='underline hover:text-primary'>записаться</a>&nbsp;к нам на консультацию или задать свой вопрос&nbsp;
                    <Link href="faq" className='underline  hover:text-primary'>здесь</Link>
                </h5>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {nodes?.splice(0, 3)?.map((_node, _i) =>
                    <FaqCard node={_node} key={_i} />
                )}
                <Link
                    href="faq"
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
        <div className='container mx-auto flex flex-col gap-12 overflow-visible pt-12'>
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
        <div id="contacts" className='pt-12'>
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