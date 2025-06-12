import { configureStore } from "@reduxjs/toolkit";
import creditCardSlice from "./slices/creditCardSlice";


export const store = configureStore({
    reducer: {
        creditCards: creditCardSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;