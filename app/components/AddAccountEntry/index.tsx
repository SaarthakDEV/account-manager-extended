import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import formEntrySchema, { SchemaType } from './schema';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


const AddAccountEntry = () => {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(formEntrySchema),
    defaultValues: {
      type: "credit",
      amount: 1000,
      particular: '',
      date: new Date(),
    },
  });

    const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    // Make your API call here safely with typed data
    // console.log()
    console.log(errors)
    console.log('Valid Form Data:', data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <input
            type="radio"
            name="type"
            value="credit"
            // checked={type === "credit"}
            // onChange={() => setType("credit")}
          />
          Credit
        </label>

        {/* <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker />
    </LocalizationProvider> */}

        <label>
          <input
            type="radio"
            name="type"
            value="debit"
            // checked={type === "debit"}
            // onChange={() => setType("debit")}
            />
          Debit
        </label>
            {errors.type && <p style={{ color: 'red' }}>{errors.type.message}</p>}

      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          {...register("amount")}
          placeholder="Enter amount"
        />
        {errors.amount && <p style={{ color: 'red' }}>{errors.amount.message}</p>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          {...register("particular")}
          placeholder="Enter description"
        />
        {errors.particular && <p style={{ color: 'red' }}>{errors.particular.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default AddAccountEntry