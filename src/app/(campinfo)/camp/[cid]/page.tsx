import Image from "next/image"
export default function CampDetailPage({params}: {params: {cid: string}}) {

    /**
     * Mock Data for Demonstration Only
     */
    const mockCampRepo = new Map()
    mockCampRepo.set("001",{name:"ariel", image:"/img/card.jpg"})
    mockCampRepo.set("002",{name:"ariel1", image:"/img/card.jpg"})
    return(
        <main className="text-center p-5">
            <h1 className='text-lg font-medium'>Camp ID{params.cid}</h1>
            <div className="flex flex-row my-5">
            <Image src={(mockCampRepo.get(params.cid)).image}
                alt='Camp picture'
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%] bg-black'/>
                <div className='text-md mx-5'>{(mockCampRepo.get(params.cid)).name}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams(){
    return [{cid:'001'}, {cid:'002'}]
}

