import Productcard from "./ProductCard";
import Link from "next/link";



export default  async function CampCatalog({campJson}:{campJson:Object} {
    const campJsonReady = await campJson
    return(
        <>
        Explore{campJsonReady.count}modelsn in our catalog
        <div style={{margin:"20px", display:"flex",
        flexDirection:"row", alignContent:"space-around",
        justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
        {
            campJsonReady.data.map((campItem:Object)=>(
                <Link href={`/camp/${campItem.id}`} className='w-1/5'>
                <Productcard  campName={campItem.name} imgSrc={campItem.picture}/>
                </Link>
            ))
        }
    </div>
 </>
    )
}