'use client'
import LocationDateReserve from "@/components/LocationDateReserve"
import { useSearchParams } from 'next/navigation'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addBooking } from "@/redux/features/cartSlice"
import { BookingItem, CampgroundItem } from "../../../interfaces"
import styles from './bookings.module.css'
import { useRouter } from "next/navigation"


export default function Bookings(){

    const urlParams=useSearchParams()
    const cid=urlParams.get('id')
    const name=urlParams.get('name')

    const router=useRouter();

    const dispatch=useDispatch<AppDispatch>()

    const [checkInDate,setCheckInDate]=useState<Dayjs|null>(null)
    const [checkOutDate,setCheckOutDate]=useState<Dayjs|null>(null)

    const handleBookingClick = () => {
        makeBooking();
        router.push('../cart');
    };

    const makeBooking=()=>{
        alert("Booking successful");
        if(cid&&name&&checkInDate&&checkOutDate){
            const item:BookingItem={
                campgroundId:cid,
                campgroundName:name,
                numOfDays:checkOutDate.diff(checkInDate,'day'),
                checkInDate:dayjs(checkInDate).format("YYYY/MM/DD"),
                checkOutDate:dayjs(checkOutDate).format("YYYY/MM/DD"),
            }
            dispatch(addBooking(item))
        }
    }

    return(
        <main className={`${styles.body} w-full flex flex-col items-center space-y-4 py-10`}>
            <div className="text-2xl font-medium">New Bookings</div><br/>
            <div className="text-lg font-medium">{name}</div>
            <div className={`${styles.box} py-4 p-5 m-5 px-5 me-2 mb-2 text-md font-bold text-gray-600 bg-stone-300 rounded-2xl shadow-lg`}>
                <p className="text-gray-600 text-center flex-grow">Check-in Date</p>
                <LocationDateReserve onDateChange={(value: Dayjs) => { setCheckInDate(value) }} />
                <p className="text-gray-600 text-center flex-grow">Check-out Date</p>
                <LocationDateReserve onDateChange={(value: Dayjs) => { setCheckOutDate(value) }} />
            </div>
            <button className={`${styles.button} text-white font-bold bg-yellow-600 m-14 my-5 rounded-2xl z-30 hover:bg-yellow-700`} onClick={handleBookingClick}>Book</button>
        </main>
    )
}