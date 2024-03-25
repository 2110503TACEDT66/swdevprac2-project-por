export default async function getCamp(id:string){
    const response = await fetch(`http://localhost:5100/api/v1/campgrounds/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch camp")
    }
    return await response.json()
}