import {createSlice} from "@reduxjs/toolkit";
import content from "../../assets/db/websiteData.json";

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        pagesContent: {}
    },
    reducers: {
        loadContent: (state) => {
            state.pagesContent = content;
        }
    }
});

export const {loadContent} = contentSlice.actions;
export default contentSlice.reducer;