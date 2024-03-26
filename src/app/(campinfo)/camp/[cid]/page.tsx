import Image from "next/image"
import getCamp from "@/libs/getCamp"
import styles from './cid.module.css'
import Link from "next/link"

export default async function CampDetailPage({params}: {params: {cid: string}}) {
    const campDetail = await getCamp(params.cid)

    return(
        <main className={`${styles.head} text-center p-5`}>
            <h1 className='text-xl font-bold'>{campDetail.data.name}</h1>
            <div className="text-left flex flex-row my-5">
            <Image src={campDetail.data.image}
                alt='Camp picture'
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%] bg-black mx-10'/>
                <div className='text-lg mx-5'>Name : {campDetail.data.name}
                <div>Address : {campDetail.data.address}</div>
                <div>tel : {campDetail.data.tel}</div>
                <Link href={`/bookings?id=${params.cid}&name=${campDetail.data.name}`}>
                <button className={`${styles.button} py-5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 bg-stone-300 rounded-2xl hover:bg-stone-400 `}>
                    <p className='font-bold'>Book This Camp</p>
                </button>
                </Link>
            </div>
            </div>
        </main>
    )
}


