"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BookingItem } from "../../interfaces";

export default async function updateBooking(id:string, checkInDate : Date , checkOutDate : Date , campground : string) {

    const session = await getServerSession(authOptions);

    const response = await fetch(`http://localhost:5100/api/v1/bookings/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        },
        body: JSON.stringify({
            startDate: checkInDate,
            endDate: checkOutDate,
            campground : campground ,
        })
    });

    if (!response.ok) {
        throw new Error("Failed to update booking")
    }

    return await response.json();
}