import { createAsyncThunk } from "@reduxjs/toolkit";
import THUNK_ACTION from "@/features/user/services/actions";
import api, { METHODS } from "@/utils/apiClient";
import URL from "@/utils/url"

export const fetchUser = createAsyncThunk(THUNK_ACTION.FETCH_USER, async () => {
    const response = await api(METHODS.GET, URL.getUserProfile(process.env.NEXT_PUBLIC_USER_ID!));
    const data = await response.json();
      if (data.message !== "ok") {
        throw new Error("Cannot get accounts data");
      }
    return data;
})