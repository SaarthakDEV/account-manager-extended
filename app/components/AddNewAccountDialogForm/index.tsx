"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formEntrySchema, { SchemaType } from "./schema";
import DatePicker from "../hoc/DatePicker";
import moment from "moment";
import { getDateToFormat } from "@/app/utils";

const AddNewAccountDialogForm = ({
  addTransactionFormRef: formRef,
}: {
  addTransactionFormRef: { current: HTMLFormElement | null };
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(formEntrySchema),
    defaultValues: {
      type: "credit",
      amount: 1000,
      description: "",
      transaction_date: getDateToFormat(new Date()),
    },
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    console.log("Valid Form Data:", data);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg"
    >

      {/* Transaction Type */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Transaction Type
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 transition hover:border-gray-400">
            <input
              type="radio"
              value="credit"
              {...register("type")}
              className="h-4 w-4 accent-green-600"
            />

            <div>
              <p className="text-sm font-medium text-gray-900">Credit</p>
              <p className="text-xs text-gray-500">Money received</p>
            </div>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 transition hover:border-gray-400">
            <input
              type="radio"
              value="debit"
              {...register("type")}
              className="h-4 w-4 accent-red-600"
            />

            <div>
              <p className="text-sm font-medium text-gray-900">Debit</p>
              <p className="text-xs text-gray-500">Money spent</p>
            </div>
          </label>
        </div>

        {errors.type && (
          <p className="mt-1.5 text-sm text-red-600">{errors.type.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 items-center">
        {/* Date */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Date
          </label>

          <Controller
            name="transaction_date"
            control={control}
            render={({ field }) => (
              <DatePicker
                format={getDateToFormat(undefined)}
                value={moment(field.value)}
                onChange={field.onChange}
              />
            )}
          />

          {errors.transaction_date && (
            <p className="mt-1.5 text-sm text-red-600">{errors.transaction_date.message}</p>
          )}
        </div>

        {/* Amount */}
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Amount
          </label>

          <div className="relative h-full">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              ₹
            </span>

            <input
              id="amount"
              type="number"
              {...register("amount", { valueAsNumber: true })}
              placeholder="Enter amount"
              className={`w-full rounded-lg border bg-white py-2.5 pl-8 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                errors.amount
                  ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
          </div>

          {errors.amount && (
            <p className="mt-1.5 text-sm text-red-600">
              {errors.amount.message}
            </p>
          )}
        </div>
      </div>

      {/* Particular */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Particular
        </label>

        <input
          id="description"
          type="text"
          {...register("description")}
          placeholder="Enter description"
          className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
            errors.description
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
          }`}
        />

        {errors.description && (
          <p className="mt-1.5 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default AddNewAccountDialogForm;
