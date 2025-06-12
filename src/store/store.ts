import { configureStore } from "@reduxjs/toolkit";
import creditCardSlice from "./slices/creditCardSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        creditCards: creditCardSlice,
        filters: filterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;