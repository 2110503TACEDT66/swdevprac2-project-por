'use client'
import LocationDateReserve from "@/components/LocationDateReserve"
import { useSearchParams } from 'next/navigation'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { addBooking } from "@/redux/features/cartSlice"
import { BookingItem, CampgroundItem } from "../../../interfaces"

export default function Bookings(){

    const urlParams=useSearchParams()
    const cid=urlParams.get('id')
    const name=urlParams.get('name')

    const dispatch=useDispatch<AppDispatch>()

    const [checkInDate,setCheckInDate]=useState<Dayjs|null>(null)
    const [checkOutDate,setCheckOutDate]=useState<Dayjs|null>(null)

    const makeBooking=()=>{
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
        <main className="w-full flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Bookings</div>
            <div className="text-lg font-medium">{name}</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Pick-Up Date and Location</div>
                    <LocationDateReserve onDateChange={(value:Dayjs)=>{
                    setCheckInDate(value)
                }}/>
                    <div className="text-md text-left text-gray-600">
                        Return Date and Location</div>
                        <LocationDateReserve onDateChange={(value:Dayjs)=>{
                    setCheckOutDate(value)
                }}/>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white "onClick={makeBooking}>Booking</button>
        </main>
    )
}