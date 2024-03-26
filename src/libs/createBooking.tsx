'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BookingItem } from "../../interfaces";
import { getServerSession } from "next-auth";

export default async function createBooking(checkInDate : Date , checkOutDate : Date , campground : string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${campground}/bookings`, {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
            checkInDate: checkInDate,
            checkOutDate: checkOutDate
        })
    });

    if (!response.ok) {
        throw new Error('Failed to create Booking');
    }

    return await response.json();
}