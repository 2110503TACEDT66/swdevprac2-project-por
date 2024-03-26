'use client'
import LocationDateReserve from "@/components/LocationDateReserve"
import { useSearchParams } from 'next/navigation'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem, CampgroundItem } from "../../../interfaces"
import styles from './bookings.module.css'
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useAppSelector } from "@/redux/store";
import createBooking from "@/libs/createBooking"


export default function Bookings(){

    const { data: session } = useSession();
    if (!session || !session.user.token) return null

    const urlParams=useSearchParams()
    const cid=urlParams.get('id')
    const name=urlParams.get('name')

    const campgroundItems = useAppSelector(state => state.campgroundSlice.campgroundItems)
    const bookItems = useAppSelector(state => state.bookSlice.bookItems)

    const router=useRouter();

    const dispatch=useDispatch<AppDispatch>()

    const [campground,setCampground]=useState<string>(cid||'')
    const [checkInDate,setCheckInDate]=useState<Dayjs|null>(null)
    const [checkOutDate,setCheckOutDate]=useState<Dayjs|null>(null)
    
    const makeBooking = async () => {
        if (!campground || !checkInDate || !checkOutDate) return;
    
        try {
            const checkInDateTime = checkInDate.toDate();
            const checkOutDateTime = checkOutDate.toDate();
    
            await createBooking(checkInDateTime, checkOutDateTime, campground);
            console.log("makeBooking success");
            alert('Booking success')
            router.push('/cart');

        } catch (error) {
            console.error("Error making booking:", error);
            alert(error)
        }
    };

    return(
        <main className={`${styles.body} w-full flex flex-col items-center space-y-4 py-10`}>
            <div className="text-2xl font-medium">New Bookings</div><br/>
            <div className="text-lg font-medium">{name}</div>
            <div className={`${styles.box} py-4 p-5 m-5 px-5 me-2 mb-2 text-md font-bold text-gray-600 bg-stone-300 rounded-2xl shadow-lg`}>
                <p className="text-gray-600 text-center flex-grow">Check-in Date</p>
                <LocationDateReserve onDateChange={(value: Dayjs) => { setCheckInDate(value) }} defaultDate={checkInDate} />
                <p className="text-gray-600 text-center flex-grow">Check-out Date</p>
                <LocationDateReserve onDateChange={(value: Dayjs) => { setCheckOutDate(value) }} defaultDate={checkOutDate}/>
            </div>
            <button className={`${styles.button} text-white font-bold bg-yellow-600 m-14 my-5 rounded-2xl z-30 hover:bg-yellow-700`} onClick={makeBooking}>Book</button>
        </main>
    )
}