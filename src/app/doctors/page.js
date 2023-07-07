import Image from "next/image"
import client from "@/lib/apollo-client"
import { gql } from "@apollo/client";


export const revalidate = 0;


async function getData() {
    const { data } = await client.query({
        query: gql`
        query Data {
            page(id: "307", idType: DATABASE_ID) {
              doctors_banner {
                bannerTitle
                bannerText
                bannerImages {
                  sourceUrl
                }
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
              gallery_acf {
                galleryTitle
                galleryGallery {
                  sourceUrl
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

    let bannerImages = []
    data?.page?.doctors_banner?.bannerImages?.forEach(_image => {
        bannerImages.push(_image.sourceUrl);
    });

    let doctors = []
    data?.staff?.staff?.doctors?.forEach(_doctor => {
        doctors.push({ name: _doctor.name, role: _doctor.role, image: _doctor.photo?.sourceUrl });
    });

    return {
        banner: {
            title: data?.page?.doctors_banner?.bannerTitle,
            text: data?.page?.doctors_banner?.bannerText,
            images: bannerImages,
        },
        doctors: doctors,
    };
}
export default async function Page() {

    const { banner, doctors } = await getData();

    const data = {
        title: "Врачи",
        text1: "Репутация и авторитет нашей клиники зависит от уровня профессионализма наших врачей. Мы уделяем большое внимание обучению и подготовке наших врачей. Наши специалисты постоянно проходят обучение, повышение квалификации и тренинги по всей стране.",
        subtitle1: "Наши врачи",
        button1: "Записаться на прием",
        button2: "Запись онлайн",
    }


    return (<main>
        <div className=" bg-[#f2f2f2] pt-[75px] pb-6 main:pt-[111px] rounded-b-[48px] group animate">
            <div className="container mx-auto py-6 main:py-9 flex flex-col gap-2">
                <h1 className="transition-all delay-[400ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2">
                    {banner.title}
                </h1>
                <h5 className="transition-all delay-[700ms] duration-1000
                    group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2">
                    {banner.text}
                </h5>
            </div>
            <div className="container overflow-hidden grid grid-cols-1 main:grid-cols-3 mx-auto h-[300px] gap-2">
                {banner.images.slice(0, 3).map((_photo, _i) =>
                    <div key={_i} className={`relative rounded-3xl overflow-hidden ${_i > 0 && "max-main:hidden"}
                        transition-all ${delay[_i * 3 + 10]} duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
                    `}>
                        <Image className="object-cover  hover:scale-110 transition-transform duration-300" alt="" fill src={_photo} />
                    </div>

                )}
            </div>
        </div>
        <div className="flex flex-col mx-auto container
            my-6 gap-6
            main:my-12 main:gap-12
            group animate
        ">
            <h3 className="transition-all delay-[400ms] duration-1000
                group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-y-1/2
            ">
                {data.subtitle1}
            </h3>
            <div className=" grid grid-cols-1 main:grid-cols-2 gap-2">
                {doctors.map((_doctor, _i) =>
                    <div key={_i} className={`transition-all ${delay[_i * 3 + 7]} duration-1000
                        group-[.animate:not(.show)]:opacity-0 group-[.animate:not(.show)]:translate-x-1/2
                    `}>
                        <NashDoctor doctor={_doctor} buttonText={data.button1} />
                    </div>
                )}
            </div>
        </div>
    </main>
    )
}

const NashDoctor = ({ doctor, buttonText }) => {

    return (
        <div className="p-6 bg-white border border-pink-100 rounded-3xl flex gap-6 group card hover:bg-additional transition-colors duration-300 h-full">
            <div className="flex-1 flex flex-col justify-between gap-2">
                <h5 className="group-[.card]:group-hover:text-primary duration-300 transition-colors">{doctor?.name}</h5>
                <div className="text-grey-1 whitespace-pre-wrap">{doctor?.role}</div>
                <div className="font-medium h-12 w-fit px-6 flex justify-center items-center py-auto rounded-3xl border border-primary text-primary hover:bg-primary hover:text-white duration-300">
                    {buttonText}
                </div>
            </div>
            <Image width={144}
                height={206}
                className="rounded-[100px] shrink-0 object-cover"
                src={doctor?.image ? doctor.image : "/images/doctor-placeholder.png"}
                alt={doctor?.name} />


        </div>
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