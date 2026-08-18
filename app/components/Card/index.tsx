import { TransactionType } from "@/app/types";
import React from "react";

const Card = ({ item, value }: { item: TransactionType; value: number }) => {
  return (
    <div className="border-1 flex-1 rounded-md bg-[#d2d2d2] flex flex-col items-center justify-center">
      <span className="capitalize text-xl">{item}</span>
      <span className="text-2xl">{`$${value}`}</span>
    </div>
  );
};

export default Card;

