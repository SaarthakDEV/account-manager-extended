"use client";
import useAppDispatch from "@/hooks/useAppDispatch";
import ACCOUNTS_ACTIONS from "@/redux/actions/accounts";
import { accountActions } from "@/redux/reducers/accountsSlice";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
      searchRef?.current?.focus();
    }
  };
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);

useEffect(() => {
  dispatch(accountActions.filterAccounts(searchText))
}, [searchText, dispatch])
  return (
    <input
      ref={searchRef}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      type="search"
      placeholder="Search..."
      className="mx-auto w-64 rounded-lg border-1 px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-white-500"
    />
  );
}
