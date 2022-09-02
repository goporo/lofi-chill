import { createSlice, configureStore } from '@reduxjs/toolkit'


export const fullScreenSlice = createSlice({
    name: "FullScreen",
    initialState: {
        isFullScreen: false,
    },
    reducers: {
        updateFullScreen: (state) => {
            state.isFullScreen = !state.isFullScreen;
        },
    },
});

export const { updateFullScreen } = fullScreenSlice.actions;

export const store = configureStore({
    reducer: fullScreenSlice.reducer,
});

export default store;
