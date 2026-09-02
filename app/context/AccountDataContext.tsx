"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { AccountOverview, AccountPayload } from "../types";
import api, { METHODS } from "../utils/apiClient";

interface AccountDataContextValue {
  accounts: AccountPayload[] & AccountOverview[];
  searchText: string;
  setSearchText: (val: string) => void;
}

const AccountDataContext = createContext<AccountDataContextValue | undefined>(
  undefined
);

export const AccountDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [accounts, setAccounts] = useState<AccountPayload[] & AccountOverview[]>([]);

  const value = useMemo(
    () => ({ accounts, searchText, setSearchText }),
    [accounts, searchText]
  );

  useEffect(() => {
    api(METHODS.GET, `accounts/${process.env.NEXT_PUBLIC_USER_ID}`).then(async response => {
      const parsedResponse = await response.json();
      if(parsedResponse.message !== "ok") throw new Error("Couldn't get account details of user")
      setAccounts(parsedResponse.accounts);
    })
  }, [])

  return (
    <AccountDataContext.Provider value={value}>
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
