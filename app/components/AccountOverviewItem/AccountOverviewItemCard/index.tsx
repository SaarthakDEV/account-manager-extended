import { TransactionType } from "@/app/types";
import { getCardClass } from "@/app/utils";
import React from "react";

const AccountOverviewItemCard = ({ item, value }: { item: string; value: number }) => {
  return (
    <div className={`flex-1 rounded-md ${getCardClass(item.toLowerCase() as TransactionType)} flex flex-col items-center justify-center`}>
      <span className="capitalize text-xl">{item}</span>
      <span className="text-2xl">{`$${value}`}</span>
    </div>
  );
};

export default AccountOverviewItemCard;

