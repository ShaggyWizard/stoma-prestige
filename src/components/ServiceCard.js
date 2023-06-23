import Image from "next/image";

export default function ServiseCard({ image, children }) {
    return (
        <div className='bg-white text-black p-6 rounded-3xl h-[220px] border border-grey-4 flex flex-col justify-between'>
            <p>{children}</p>
            {image &&
                <Image className='self-end' width={64} height={64} src={image} alt="" />
            }
        </div>
    )
}