"use client";
import React, { useState } from "react";
import { Plus } from "../icons";
import Dialog from "../components/Dialog";
import { useForm, SubmitHandler } from "react-hook-form";
import formSchema, { SchemaType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CTAs } from "../components/Dialog/Cta";

const AddButton = () => {
  const [openAddAccountDialog, setOpenAddAccountDialog] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountName: "",
    },
  });

  const onSubmit: SubmitHandler<SchemaType> = ({ accountName }) => {
    
  }

  return (
    <>
      <div
        className="border-1 text-sm flex gap-1 border-white rounded-sm whitespace-nowrap font-semibold hover:opacity-80 p-2 cursor-pointer"
        onClick={() => setOpenAddAccountDialog((prev) => !prev)}
      >
        Add new account <Plus svg={{ className: "cursor-pointer" }} />
      </div>

      <Dialog
        open={openAddAccountDialog}
        heading="Add new account"
        needFooter
        ctaConfig={{
          [CTAs.CONFIRM]: {
            title: isSubmitting ? "Adding..." : "Add",
            onClick: handleSubmit(onSubmit),
          },
          [CTAs.CANCEL]: {
            title: "Cancel",
            onClick: () => setOpenAddAccountDialog(false),
          },
        }}
      >
        <div className="mb-6">
          <label
            htmlFor="account-name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Account name
          </label>

          <input
            id="account-name"
            type="text"
            {...register("accountName")}
            placeholder="Enter description"
            className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
              errors.accountName
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
            }`}
          />

          {errors.accountName && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.accountName.message}
            </p>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default AddButton;
