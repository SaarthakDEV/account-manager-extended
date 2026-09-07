import HorizontalRule from "@/components/hoc/HorizontalRule";
import React from "react";

const PassbookBox = () => {
  return (
    <div className="w-full p-2 bg-[#6e48bb]">
      {[
        ["credit(+)", "123"],
        ["debit(-)", "456"],
      ].map(([label, value], index) => (
        <div key={index} className="w-full flex justify-between font-medium">
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
      <HorizontalRule classes="mt-1"/>
      <div  className="w-full flex justify-between">
          <span>Balance</span>
          <span>567</span>
        </div>
    </div>
  );
};

export default PassbookBox;
