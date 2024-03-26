import { BookingItem, BookingJson } from "../../interfaces"
import getBookings from "@/libs/getBookings"
import deleteBooking from "@/libs/deleteBooking"
import Link from "next/link";
import styles from './bookingcart.module.css'


export default async function BookingCart(){
    const bookItems = await getBookings()
    
    return( 
        <>
        { bookItems.count === 0 ? <div>There are no Booking</div> :
        bookItems?.data.map( (bookingItem : BookingItem) =>(
            <div className={`${styles.head} bg-stone-200 rounded-xl px-5 mx-5 py-3 my-3`} key={bookingItem._id}>
                <div className="text-xl font-bold mx-3">Campground: {bookingItem.campground.name} </div>
                <div className="text-sm mx-3">Check In Date: {bookingItem.checkInDate} </div>
                <div className="text-sm mx-3">Check Out Date: {bookingItem.checkOutDate} </div>
                <div className="text-sm mx-3">User ID: {bookingItem.user} </div>
                
                <div className="flex flex-row space-x-4 " >

                <Link href= {`/cart/edit/${bookingItem._id}`}>
                    <button className={`${styles.button} block rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white text-center shadow-sm`}>Update</button>
                </Link>

                <Link href= {`/cart/delete/${bookingItem._id}`}>
                    <button className={`${styles.button} block rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white text-center shadow-sm`}>Delete</button>
                </Link>
                
                </div>
            </div>
        ))
        
        
        }
        </>
        

    )
}