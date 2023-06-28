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
        doctors.push({name: _doctor.name, role: _doctor.role, image: _doctor.photo?.sourceUrl});
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
        <div className="rounded-3xl bg-[#f2f2f2] pt-[111px] rounded-b-[48px] gap-12 py-16">
            <div className="container my-16 mx-auto grid grid-cols-2 gap-4">
                <h1>{banner.title}</h1>
                <h5>{banner.text}</h5>
            </div>
            <div className="container overflow-hidden grid grid-cols-3 mx-auto h-[300px] gap-2">
                {banner.images.slice(0, 3).map((_photo, _i) =>
                    <div key={_i} className="relative rounded-3xl overflow-hidden">
                        <Image className="object-cover  hover:scale-110 transition-transform duration-300" alt="" fill src={_photo} />
                    </div>

                )}
            </div>
        </div>
        <div className="flex flex-col my-12 mx-auto container gap-12">
            <h4>{data.subtitle3}</h4>
            <div className=" grid grid-cols-2 gap-2">
                {doctors.map((_doctor, _i) =>
                    <NashDoctor key={_i} doctor={_doctor} buttonText={data.button1} />
                )}
            </div>
        </div>
    </main>
    )
}

const NashDoctor = ({ doctor, buttonText }) => {

    return (
        <div className="p-6 bg-white border border-pink-100 rounded-3xl flex gap-6 group hover:bg-additional transition-colors duration-300">
            <div className="flex-1 flex flex-col justify-between gap-2">
                <h5 className="group-hover:text-primary duration-300 transition-colors">{doctor?.name}</h5>
                <div className="text-grey-1">{doctor?.role}</div>
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