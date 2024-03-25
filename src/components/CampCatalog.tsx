import Productcard from "./ProductCard";
import Link from "next/link";



export default  async function CampCatalog({campsJson}:{campsJson:Promise<CampJson>}) {
    const campsJsonReady = await campsJson
    return(
        <>
        Explore{campsJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex",
        flexDirection:"row", alignContent:"space-around",
        justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
        {
            campsJsonReady.data.map((campItem:CampItem)=>(
                <Link href={`/camp/${campItem.id}`} className='w-1/5'>
                <Productcard  campName={campItem.name} imgSrc={campItem.picture}/>
                </Link>
            ))
        }
    </div>
 </>
    )
}