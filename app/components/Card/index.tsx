import { TransactionType } from "@/app/types";
import { getCardClass } from "@/app/utils";
import React from "react";

const Card = ({ item, value }: { item: TransactionType; value: number }) => {
  return (
    <div className={`flex-1 rounded-md ${getCardClass(item.toLowerCase())} flex flex-col items-center justify-center`}>
      <span className="capitalize text-xl">{item}</span>
      <span className="text-2xl">{`$${value}`}</span>
    </div>
  );
};

export default Card;

