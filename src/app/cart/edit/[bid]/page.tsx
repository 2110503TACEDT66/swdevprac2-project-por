'use client'
import Image from "next/image";
import styles from '../page.module.css'
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


export default  function MyBookingEditPage({params} : {params : {bid:string}}) {


    const { data: session } = useSession();
    if (!session || !session.user.token) return null

    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    
    const campgroundItems = useAppSelector(state => state.campgroundSlice.campgroundItems)
    const bookItems = useAppSelector(state => state.bookSlice.bookItems)

    
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
            alert('Edit Booking success')

        } catch (error) {
            console.error("Error making booking:", error);
        }
    };


    return(
        <main>

            <div className="min-h-screen flex items-center justify-center">
            <div className="'justify-center items-center h-[500px] w-[400px] p-9 border rounded-lg mx-auto shadow-md shadow-white hover:shadow-2xl hover:shadow-white'">
                <div className="text-4xl fonts-sans mb-10 mt-3 ">Edit Booking </div>
                <div className="text-md fonts-sans mb-1 ">Select Check-in Date</div>
                <div className="">
                    <LocationDateReserve onDateChange={ (value:Dayjs) =>{
                        setCheckInDate(value) 
                    }} defaultDate={checkInDate} />
                </div>
                <div className="text-md fonts-sans mt-6 mb-1 ">Select Check-out Date</div>
                <div>
                    <LocationDateReserve onDateChange={ (value:Dayjs) =>{
                        setCheckOutDate(value)
                    }} defaultDate={checkOutDate} />
                </div>
                <div className="text-md fonts-sans mt-6 mb-1 ">Select Campground</div>
                <div>
                    <Select variant="standard" name="campground" id="campground" className="h-[2em] w-[200px]" value={campground} onChange={(event) => {setCampground(event.target.value); console.log(campground)}}>
                    {
                        campgroundItems.map((campgrounditem) => (
                            <MenuItem key={campgrounditem.id} value={campgrounditem.id}> {campgrounditem.name}  </MenuItem>
                        ))
                    }
                    </Select> 
                </div>


            <Link href="/cart">
            <button name="Book Vaccine" className='text-cyan-800 text-xl font-sans border px-5 py-3 rounded-md hover:bg-cyan-950 hover:shadow-lg hover:shadow-white mt-5 hover:text-white' onClick={editBooking}>Edit Booking</button>   
            </Link>
            </div>
            </div>

        </main>
    );

}