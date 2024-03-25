'use client'
import { useState, useEffect, Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getCamps from "@/libs/getCamps";
import CampCatalog from "@/components/CampCatalog";
import styles from './camp.module.css'

export default function Camp(){
    const [camps, setCamps] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const campsData = await getCamps();
                setCamps(campsData);
            } catch (error) {
                console.error("Error fetching camps:", error);
            }
        }
        fetchData();
    }, []);

    return(
        <main className={`${styles.head} text-center p-7`}>
            <h1 className={`text-3xl font-bold`}> Our Campgrounds</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                {camps && <CampCatalog campgroundsJson={camps} />}
            </Suspense>
        </main>
    )
}
