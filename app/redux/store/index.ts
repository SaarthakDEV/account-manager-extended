import SLICE from "@/utils/slice";
import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "@/redux/store/slices/accountsSlice";
import userReducer from "@/redux/store/slices/userSlice";

const store = configureStore({
    reducer: {
        [SLICE.ACCOUNTS]: accountsReducer,
        [SLICE.USER]: userReducer,
    }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;