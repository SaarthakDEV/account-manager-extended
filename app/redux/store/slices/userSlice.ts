import SLICE from "@/utils/slice";
import { createSlice } from "@reduxjs/toolkit";
import getUserState from "@/redux/initialState/user";
import { fetchUser } from "@/features/user/services";

const userSlice = createSlice({
    name: SLICE.USER,
    initialState: getUserState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.prefferedCurrency = action.payload.currency_used;
            state.error = "";
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.prefferedCurrency = '$';
            state.error = action.error.message ?? "Not able to get User profile";
        })
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;