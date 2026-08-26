"use client";
import { useAccountData } from "../../context/AccountDataContext";

export default function SearchBar() {
  const { searchText, setSearchText } = useAccountData();

  return (
    <input
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      type="search"
      placeholder="Search..."
      className="mx-auto w-64 rounded-lg border-1 px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-white-500"
    />
  );
}
