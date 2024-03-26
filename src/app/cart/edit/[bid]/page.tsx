'use client'
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import dayjs , { Dayjs } from "dayjs"
import LocationDateReserve from "@/components/LocationDateReserve";
import { Select, MenuItem } from "@mui/material";
import { useAppSelector } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { addBooking } from "@/redux/features/bookSlice";
import updateBooking from "@/libs/updateBooking";
import { BookingItem } from "../../../../../interfaces";
import getBooking from "@/libs/getBooking";
import getBookings from "@/libs/getBookings";
import Link from "next/link";
import deleteBooking from "@/libs/deleteBooking";
import styles from './edit.module.css'


export default function MyBookingEditPage({params} : {params : {bid:string}}) {


    const { data: session } = useSession();
    if (!session || !session.user.token) return null

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    
    const campgroundItems = useAppSelector(state => state.campgroundSlice.campgroundItems)
    const bookingItems = useAppSelector(state => state.bookSlice.bookItems)
    
    const [campground , setCampground] = useState<string>(cid || '')
    const [checkInDate,setCheckInDate] = useState<Dayjs|null>(null)
    const [checkOutDate,setCheckOutDate] = useState<Dayjs|null>(null)
    

    const dispatch = useDispatch<AppDispatch>()

    const editBooking =  () => {
        if (!campground || !checkInDate || !checkOutDate) return;
    
        try {
            const checkInDateTime = checkInDate.toDate();
            const checkOutDateTime = checkOutDate.toDate();
            const id = params.bid
    
             updateBooking(id,checkInDateTime,checkOutDateTime , campground);
            console.log("Edit Booking success");
            alert('Update Booking success')

        } catch (error) {
            console.error("Error making booking:", error);
        }
    };


    return(
        <main className={`${styles.main}`}>
            <br/>
            <div className="top-5 flex items-center justify-center">
            <div className="justify-center items-center h-[600px] w-[400px] p-9 border rounded-2xl mx-auto bg-stone-200 shadow-lg">
                <div className="text-4xl font-bold mb-8 mt-3 ">Update Booking </div>
                <div className="text-lg mb-1 ml-6">Select Check In Date</div>
                <div className="items-left">
                    <LocationDateReserve onDateChange={ (value:Dayjs) =>{
                        setCheckInDate(value) 
                    }} defaultDate={checkInDate} />
                </div>
                <div className="text-lg mb-1 ml-6">Select Check Out Date</div>
                <div>
                    <LocationDateReserve onDateChange={ (value:Dayjs) =>{
                        setCheckOutDate(value)
                    }} defaultDate={checkOutDate} />
                </div>
                <div className="text-lg mb-1 ml-6">Select Campground</div>
                <div className="ml-6 rounded-xl">
                    <Select variant="outlined" name="campground" id="campground" className="ml-6 px-6 mt-5 items-center h-[2em] w-[200px]" value={campground} onChange={(event) => {setCampground(event.target.value); console.log(campground)}}>
                    {
                        campgroundItems.map((campgrounditem) => (
                            <MenuItem key={campgrounditem.id} value={campgrounditem.id}> {campgrounditem.name}  </MenuItem>
                        ))
                    }
                    </Select> 
                </div>
            
            <div className="mt-6 flex items-center">
            <Link href="/cart">
            <button name="Update Booking" className={`${styles.button} font-bold text-md mt-5 text-white text-xl px-5 py-3 bg-cyan-800 rounded-2xl hover:bg-cyan-950 hover:shadow-lg hover:shadow-white mt-5 hover:text-white`} onClick={editBooking}>Update Booking</button>   
            </Link>
            </div>
            </div>
            </div>

        </main>
    );

}