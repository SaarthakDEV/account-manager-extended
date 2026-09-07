import SLICE from "@/utils/slice";
import { createSlice } from "@reduxjs/toolkit";
import accountsInitialState from "@/redux/initialState/accounts";
import { fetchAccounts } from "@/redux/thunk/accounts";

const accountSlice = createSlice({
  name: SLICE.ACCOUNTS,
  initialState: accountsInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccounts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAccounts.fulfilled, (state, action) => {
      state.loading = false;
      state.accounts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAccounts.rejected, (state, action) => {
      state.loading = false;
      state.accounts = [];
      state.error = action.error.message ?? "Failed to fetch accounts";;
    });
  },
});

export default accountSlice.reducer;
