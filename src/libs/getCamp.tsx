export default async function getCamp(id:string){
    const response = await fetch(`http://lco`)
    if(!response.ok){
        throw new Error("Failed to fetch camp")
    }
    return await response.json()
}