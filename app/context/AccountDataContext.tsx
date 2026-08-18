"use client";
import { createContext, useContext, useMemo, useState } from "react";
import type { RowData } from "../types";
import { mock } from "../mock";

interface AccountDataContextValue {
  data: RowData[];
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

  const data = useMemo(() => {
    if (!searchText.trim()) return [...mock];
    return mock.filter((item: RowData) =>
      item?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const value = useMemo(
    () => ({ data, searchText, setSearchText }),
    [data, searchText]
  );

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
