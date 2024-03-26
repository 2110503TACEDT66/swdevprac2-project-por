'use client'
import { useDispatch } from "react-redux"
import { AppDispatch,useAppSelector } from "@/redux/store"
import { removeBooking } from "@/redux/features/cartSlice"

export default function BookingCart(){
    const carItems=useAppSelector((state)=>state.cartSlice.campgroundItems)
    const dispatch=useDispatch<AppDispatch>()
    return (
        <>
        {
            carItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.campgroundId}>
                    <div className="text-xl">{bookingItem.campgroundName}</div>
                    <div className="text-sm">Pick-Up : {bookingItem.checkInDate}</div>
                    <div className="text-sm">Return : {bookingItem.checkOutDate}</div>
                    <div className="text-sm">Duration : {bookingItem.numOfDays}</div>
                    <button className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white' onClick={()=>dispatch(removeBooking(bookingItem))}>
                        Remove
                    </button>
                </div>
            ))
        }
        </>
    )
}