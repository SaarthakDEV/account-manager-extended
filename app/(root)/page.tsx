"use client";

import Row from "../components/Row";
import { useAccountData } from "../context/AccountDataContext";
import { RowData } from "../types";

export default function Home() {
  const { data: accounts } = useAccountData();
  return accounts.map((data: RowData) => <Row rowData={data} key={data.id}/>);
}
