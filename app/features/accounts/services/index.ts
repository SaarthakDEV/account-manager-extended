import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { METHODS } from "@/utils/apiClient";
import { AccountOverview } from "@/types";
import URL from "@/features/accounts/url";
import ACCOUNTS_ACTIONS from "../actions";

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

export const addNewAccount = createAsyncThunk(
  ACCOUNTS_ACTIONS.ADD_ACCOUNT,
  async (payload: { accountName: string }, { rejectWithValue }) => {
    try {
      const response = await api(
        METHODS.POST,
        URL.addNewAccount(process.env.NEXT_PUBLIC_USER_ID!),
        payload,
      );
      const { status, data } = await response.json();
      if (!status) {
        throw new Error("Failed to add new account. Please try again later");
      }
      return { ...data, account_name: data.name };
    } catch (err) {
      return rejectWithValue(
        err instanceof Error
          ? err.message
          : "Failed to add new account. Please try again later",
      );
    }
  },
);

export const deleteAccount = createAsyncThunk(
  ACCOUNTS_ACTIONS.DELETE_ACCOUNT,
  async (
    { userId, accountId }: { userId: string; accountId: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api(
        METHODS.DELETE,
        URL.deleteAccount(userId, accountId),
      );
      const {
        status = false,
        message = "",
        deletedAccount = null,
      } = (await response.json()) || {};
      if (status) {
        return deletedAccount;
      } else {
        throw new Error(message);
      }
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Try again",
      );
    }
  },
);

export const renameAccount = createAsyncThunk(
  ACCOUNTS_ACTIONS.RENAME_ACCOUNT,
  async (
    {
      userId,
      accountId,
      accountUpdatedName,
    }: { userId: string; accountId: string; accountUpdatedName: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api(
        METHODS.PATCH,
        URL.renameAccount(userId, accountId),
        {
          updatedAccountName: accountUpdatedName,
        },
      );
      
    } catch (err) {
      return rejectWithValue(
        err instanceof Error ? err.message : "Unable to update account name",
      );
    }
  },
);
