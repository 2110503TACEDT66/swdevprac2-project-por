import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem,BookingJson } from "../../../interfaces";
import { store } from "../store";
import getBookings from "@/libs/getBookings";
import getBooking from "@/libs/getBooking";
import createBooking from "@/libs/createBooking";
import updateBooking from "@/libs/updateBooking";
import deleteBooking from "@/libs/deleteBooking";


type BookState={
    bookItems:BookingItem[]
}

const initialState:BookState={bookItems:[]}

export const bookSlice = createSlice({
    name : "booking",
    initialState,
    reducers : {
        setBookingReducer: (state, action: PayloadAction<BookingItem[]>) => {
            state.bookItems = action.payload
        },
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const { checkInDate, checkOutDate, campground } = action.payload;
            state.bookItems.push(action.payload);

            const checkInDateTime = new Date(checkInDate);
            const checkOutDateTime = new Date(checkOutDate);
            
            createBooking(checkInDateTime, checkOutDateTime, campground.id).then((res) => {
                getBookings().then((res: BookingJson) => {
                    store.dispatch(setBookingReducer(res.data));
                });
            });
        },
        removeBooking : (state, action:PayloadAction<string>) => {

        }
    }
})

export const { addBooking , removeBooking , setBookingReducer } = bookSlice.actions
export default bookSlice.reducer