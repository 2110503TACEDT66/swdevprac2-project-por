import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getCamps from "@/libs/getCamps";
import CampCatalog from "@/components/CampCatalog";
import CardPanel from "@/components/CardPanel";

export default function Camp(){
    const camps = getCamps()
    return(
        <main className="text-center p-5">
            <h1 className='text-xl font-medium'> Appointment</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            < CampCatalog campJson={camps}/>
            </Suspense>
            <hr className="my-10"/>
            <h1 className='text-xl font-medium'>TRY Client-Side Camp Panel</h1>
            <CardPanel/>
        </main>
    )
}