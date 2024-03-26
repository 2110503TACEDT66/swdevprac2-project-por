import { BookingItem, BookingJson } from "../../interfaces"
import getBookings from "@/libs/getBookings"
import deleteBooking from "@/libs/deleteBooking"
import Link from "next/link";
import styles from './bookingcart.module.css'


export default async function BookingCart(){
    const bookItems = await getBookings()
    
    return( 
        <>
        { bookItems.length === 0 ? <div>There are no Booking</div> :
        bookItems?.data.map( (bookingItem : BookingItem) =>(
            <div className={`${styles.head} bg-stone-200 rounded-xl px-5 mx-5 py-3 my-3`} key={bookingItem._id}>
                <div className="text-xl font-bold mx-3">Hotel: {bookingItem.campground.name} </div>
                <div className="text-sm mx-3">Check In Date: {bookingItem.checkInDate} </div>
                <div className="text-sm mx-3">Check Out Date: {bookingItem.checkOutDate} </div>
                <div className="text-sm mx-3">User ID: {bookingItem.user} </div>
                
                <div className="flex flex-row space-x-4 " >

                {/* <Link href= {`/mybooking/edit/${bookingItem._id}`}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                text-white shadow-sm" > 
                Edit This Booking </button>
                </Link>
                
                <Link href="/mybooking">
                <button className="block rounded-md bg-red-600 hover:bg-red-800 px-3 py-2
                text-white shadow-sm"
                onClick={ ()=> { console.log(bookingItem._id); deleteBooking(bookingItem._id)}}>  
                Cancel This Booking </button></Link> */}
                
        
                </div>
            </div>
        ))
        
        
        }
        </>
        

    )
}