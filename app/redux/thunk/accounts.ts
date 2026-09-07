import { createAsyncThunk } from "@reduxjs/toolkit";
import ACCOUNTS_ACTIONS from "@/redux/actions/accounts";
import api, { METHODS } from "@/utils/apiClient";
import { AccountOverview } from "@/types";

export const fetchAccounts = createAsyncThunk(
  ACCOUNTS_ACTIONS.FETCH_ACCOUNTS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api(
        METHODS.GET,
        `accounts/${process.env.NEXT_PUBLIC_USER_ID}`,
      );
      const data = await response.json();
      if (data.message !== "ok") {
        throw new Error("Cannot get accounts data");
      }
      return data.accounts.map((account: AccountOverview) => ({
        ...account,
        account_name: account.name,
      }));
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch accounts",
      );
    }
  },
);
