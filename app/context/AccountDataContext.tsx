"use client";
import { createContext, useContext, useEffect } from "react";
import type { AccountOverview, AccountPayload } from "../types";
import { fetchAccounts } from "@/redux/thunk/accounts";
import useAppDispatch from "@/hooks/useAppDispatch";

interface AccountDataContextValue {
  accounts?: AccountPayload[] & AccountOverview[];
  searchText?: string;
  setSearchText?: (val: string) => void;
}

const AccountDataContext = createContext<AccountDataContextValue | undefined>(
  undefined
);

export const AccountDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch])

  return (
    <AccountDataContext.Provider value={{}}>
      {children}
    </AccountDataContext.Provider>
  );
};

export const useAccountData = () => {
  const ctx = useContext(AccountDataContext);
  if (!ctx) {
    throw new Error("useAccountData must be used within AccountDataProvider");
  }
  return ctx;
};
