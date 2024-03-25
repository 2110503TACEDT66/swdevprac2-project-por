import LocationDateReserve from "@/components/LocationDateReserve"

export default function Bookings(){
    return(
        <main className="w-full flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Bookings</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Pick-Up Date and Location</div>
                    <LocationDateReserve/>
                    <div className="text-md text-left text-gray-600">
                        Return Date and Location</div>
                        <LocationDateReserve/>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white">Check Camp Availability</button>
        </main>
    )
}