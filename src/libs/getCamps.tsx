

export default function async function getCamps(){
    await new Promise((resolve)=>setTimeout(resolve,5000))
    const response = await fetch("http//localhost:3000/api/v1/camps")
    if(!response.ok){
        throw new Error("Failed to fetch camps")
    }
    return await response.json
}