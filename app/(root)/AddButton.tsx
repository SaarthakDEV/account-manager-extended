"use client";
import React, { useState } from "react";
import { Plus } from "../icons";
import Dialog from "../components/Dialog";

const AddButton = () => {
  const [openAddAccountDialog, setOpenAddAccountDialog] =
    useState<boolean>(false);
  return (
    <>
      <div
        className="border-1 text-sm flex gap-1 border-white rounded-sm whitespace-nowrap font-semibold hover:opacity-80 p-2 cursor-pointer"
        onClick={() => setOpenAddAccountDialog((prev) => !prev)}
      >
        Add new account <Plus svg={{ className: "cursor-pointer" }} />
      </div>
    </>
  );
};

export default AddButton;
