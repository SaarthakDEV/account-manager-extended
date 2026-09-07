import SLICE from "@/utils/slice";
import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "@/redux/reducers/accountsSlice";

const store = configureStore({
    reducer: {
        [SLICE.ACCOUNTS]: accountsReducer
    }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;