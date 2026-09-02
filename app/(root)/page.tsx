"use client";

import AccountOverviewItem from "../components/AccountOverviewItem";
import { useAccountData } from "../context/AccountDataContext";
import { AccountOverview } from "../types";

export default function Home() {
  const { accounts } = useAccountData();

  return accounts.map((data: AccountOverview) => <AccountOverviewItem rowData={data} key={data.id}/>);
}
