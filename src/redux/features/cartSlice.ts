import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type CartState={
    campgroundItems:BookingItem[]
}

const initialState:CartState={campgroundItems:[]}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addBooking:(state,action:PayloadAction<BookingItem>)=>{
            state.campgroundItems.push(action.payload)
        },
        removeBooking:(state,action:PayloadAction<BookingItem>)=>{
            const remainItems=state.campgroundItems.filter(obj=>{
                return ((obj.campgroundName!==action.payload.campgroundName)||(obj.checkInDate!==action.payload.checkInDate)||(obj.checkOutDate!==action.payload.checkOutDate));
            })
            state.campgroundItems=remainItems
        }

    }
})

export const {addBooking,removeBooking} =cartSlice.actions
export default cartSlice.reducer