import Productcard from "./ProductCard";
import Link from "next/link";
import { CampgroundItem,CampgroundJson } from "../../interfaces";

export default async function CampCatalog({ campgroundsJson }: { campgroundsJson: Promise<CampgroundJson> }) {
  const campsJsonReady = await campgroundsJson;
  
  const chunkArray = (arr: any[], chunkSize: number) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    
    }
    return chunkedArray;
  };

  const chunkedData = chunkArray(campsJsonReady.data, 3);

  return (
    <>
      Explore {campsJsonReady.count} models in our catalog

      <div style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "10px"
      }}>
        {chunkedData.map((chunk: any[], index: number) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-around", width: "100%" ,marginBottom: "50px"}}>
            {chunk.map((campgroundItem: CampgroundItem) => (
              <Link key={campgroundItem.id} href={`/camp/${campgroundItem.id}`} className='w-1/5'>
                <Productcard campName={campgroundItem.name} imgSrc={campgroundItem.image} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
