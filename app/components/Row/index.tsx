"use client";
import React from "react";
import Card from "../Card";
import { useRouter } from "next/navigation";
import { RowData, TransactionType } from "@/app/types";

const Row = ({ rowData }: { rowData: RowData }) => {
  const {name, id, transaction } = rowData
  const router = useRouter();
  const handleRowClick = () => {
    router.push(`/account/${id}?name=${name}`);
  };
  return (
    <div
      onClick={handleRowClick}
      className="border-1 bg-primary rounded-md min-h-50 p-4 cursor-pointer flex flex-col gap-4"
    >
      <div className="flex-1 flex items-center justify-between w-full">
        <div className="text-white text-2xl overflow-hidden text-ellipsis flex-1">
          {name}
        </div>
        <div className="px-2 py-1 flex justify-center items-center rounded-md bg-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="red"
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-3 gap-3">
        {(Object.entries(transaction) as [TransactionType, number][]).map(([key, value], index) => <Card key={index} item={key} value={value}/>)}
      </div>
    </div>
  );
};

export default Row;
