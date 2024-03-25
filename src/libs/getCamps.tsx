

export default async function getCamps(){

    await new Promise((resolve)=>setTimeout(resolve,1000))

    const response = await fetch("http//localhost:5100/api/v1/campgrounds")

    if(!response.ok){
        throw new Error("Failed to fetch camps")
    }

    return await response.json()
}

