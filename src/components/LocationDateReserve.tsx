"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function LocationDateReserve({onDateChange,defaultDate}:{onDateChange:Function,defaultDate: Dayjs | null}){

    const [bookingDate,setBookingDate] = useState<Dayjs|null>(defaultDate);

    return(
        <div className=" rounded space-x-5 space-y-2 w-fit px-10 py-5
        justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-stone-100"
                value = {bookingDate}
                onChange = {(value)=> {setBookingDate(value); onDateChange(value);}}/>
            </LocalizationProvider> 
        </div>
    )
}


