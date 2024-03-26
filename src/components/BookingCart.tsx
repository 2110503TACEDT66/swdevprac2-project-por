'use client'
import { useDispatch } from "react-redux"
import { AppDispatch,useAppSelector } from "@/redux/store"
import { removeBooking } from "@/redux/features/cartSlice"
import styles from './bookingcart.module.css'

export default function BookingCart(){
    const carItems=useAppSelector((state)=>state.cartSlice.campgroundItems)
    const dispatch=useDispatch<AppDispatch>()
    return (
        <>
        {
            carItems.map((bookingItem)=>(
                <div className={`${styles.head} bg-stone-200 rounded-xl px-5 mx-5 py-3 my-3`} key={bookingItem.campgroundId}>
                    <div className="text-xl font-bold mx-3">{bookingItem.campgroundName}</div><br/>
                    <div className="text-sm mx-3">Pick-Up : {bookingItem.checkInDate}</div>
                    <div className="text-sm mx-3">Return : {bookingItem.checkOutDate}</div>
                    <div className="text-sm mx-3">Duration : {bookingItem.numOfDays}</div><br/>
                    <button className={`${styles.button} text-white font-bold bg-yellow-600 mx-3 rounded-2xl z-30 hover:bg-yellow-700`} onClick={()=>dispatch(removeBooking(bookingItem))}>
                        Remove
                    </button>
                </div>
            ))
        }
        </>
    )
}