import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CampgroundItem,CampgroundJson } from "../../../interfaces";
import { store } from "../store";

import getCamps from "@/libs/getCamps";

type CampgroundState = {
    campgroundItems: CampgroundItem[]
}

const initialState: CampgroundState = {
    campgroundItems: []
}

const campgroundSlice = createSlice({
    name: 'campground',
    initialState,
    reducers: {
        setCampgroundReducer: (state, action: PayloadAction<CampgroundItem[]>) => {
            state.campgroundItems = action.payload
        },
        addMassageReducer: (state, action: PayloadAction<CampgroundItem>) => {
            const remainMassage = state.campgroundItems.filter((campground) => campground.id !== action.payload.id)
            remainMassage.push(action.payload)
            state.campgroundItems = remainMassage
        }

    },
});

export const { setCampgroundReducer, addMassageReducer } = campgroundSlice.actions

export default campgroundSlice.reducer

getCamps().then((res:CampgroundJson) => {
    store.dispatch(setCampgroundReducer(res.data));
});