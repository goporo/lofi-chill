import { createSlice, configureStore } from '@reduxjs/toolkit'
import images from '../assets/images';


export const themeSlice = createSlice({
    name: "Theme Change",
    initialState: {
        lofiIdx: parseInt(localStorage.getItem("lofi-index")) || 0,
    },
    reducers: {
        updateTheme: (state) => {
            if (state.lofiIdx < images.lofis.length - 1) {
                state.lofiIdx = state.lofiIdx + 1;
                localStorage.setItem("lofi-index", state.lofiIdx)
            }
            else state.lofiIdx = 0
        },
    },
});

export const { updateTheme } = themeSlice.actions;

export const store = configureStore({
    reducer: themeSlice.reducer,
});

export default store;
