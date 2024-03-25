import Productcard from "./ProductCard";
import Link from "next/link";



export default  async function CampCatalog({campgroundsJson}:{campgroundsJson:Promise<CampgroundJson>}) {
    const campsJsonReady = await campgroundsJson
    return(
        <>
        {/* Explore{campsJsonReady.count} models in our catalog */}
        <div style={{margin:"20px", display:"flex",
        flexDirection:"row", alignContent:"space-around",
        justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
        {
            campsJsonReady.data.map((campgroundItem:CampgroundItem)=>(
                <Link href={`/camp/${campgroundItem.id}`} className='w-1/5'>
                <Productcard  campName={campgroundItem.name} imgSrc={campgroundItem.image}/>
                </Link>
            ))
        }
    </div>
 </>
    )
}