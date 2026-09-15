import SLICE from "@/utils/slice";
import { createSlice } from "@reduxjs/toolkit";
import accountsInitialState from "@/redux/initialState/accounts";
import {
  addNewAccount,
  deleteAccount,
  fetchAccounts,
  renameAccount,
} from "@/features/accounts/services";
import { AccountOverview } from "@/types";

const accountSlice = createSlice({
  name: SLICE.ACCOUNTS,
  initialState: accountsInitialState(),
  reducers: {
    filterAccounts: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccounts.pending, (state) => {
      state.loading.fetch = true;
    });
    builder.addCase(fetchAccounts.fulfilled, (state, action) => {
      state.loading.fetch = false;
      state.accounts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAccounts.rejected, (state, action) => {
      state.loading.fetch = false;
      state.error = action.error.message ?? "Failed to fetch accounts";
    });
    builder.addCase(addNewAccount.pending, (state) => {
      state.loading.add = true;
    });
    builder.addCase(
      addNewAccount.fulfilled,
      (
        state: {
          loading: { add: boolean };
          error: string;
          accounts: AccountOverview[];
        },
        action,
      ) => {
        state.loading.add = false;
        state.accounts = [...state.accounts, action.payload];
        state.error = "";
      },
    );
    builder.addCase(addNewAccount.rejected, (state, action) => {
      state.loading.add = false;
      state.error = action.error.message ?? "Failed to add new account";
    });
    builder.addCase(deleteAccount.pending, (state) => {
      state.loading.delete = true;
    });
    builder.addCase(deleteAccount.fulfilled, (state, action) => {
      state.loading.delete = false;
      state.accounts = state.accounts.filter(
        (account: AccountOverview) => account.id !== action.payload.id,
      );
      state.error = "";
    });
    builder.addCase(deleteAccount.rejected, (state, action) => {
      state.loading.delete = false;
      state.error = action.error.message ?? "Failed to delete account";
    });
    builder.addCase(renameAccount.pending, (state) => {
      state.loading.rename = true;
    });
    builder.addCase(
      renameAccount.fulfilled,
      (
        state: {
          loading: { rename: boolean };
          error: string;
          accounts: AccountOverview[];
        },
        action ,
      ) => {
        state.loading.rename = false;
        console.log(action);
        // state.accounts = state.accounts.map((account: AccountOverview) => {
        //   if (account.id === action.payload.updatedAccount.id)
        //     return action.payload.updatedAccount;
        //   return account;
        // });
        state.error = "";
      },
    );
    builder.addCase(renameAccount.rejected, (state, action) => {
      state.loading.rename = false;
      state.error = action.error.message ?? "Failed to rename account";
    });
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice.reducer;
