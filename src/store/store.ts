import { configureStore } from "@reduxjs/toolkit";
import creditCardSlice from "./slices/creditCardSlice";
import filterSlice from "./slices/filterSlice";
import chatSlice from "./slices/chatSlice";

export const store = configureStore({
    reducer: {
        creditCards: creditCardSlice,
        filters: filterSlice,
        chat: chatSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;