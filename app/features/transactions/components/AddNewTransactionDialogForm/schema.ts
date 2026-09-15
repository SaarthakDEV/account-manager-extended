import moment, { Moment } from "moment";
import { z } from "zod";

const formEntrySchema = z.object({
  type: z
    .literal(["credit", "debit"]),
  amount: z.number().min(0,"Should be greater than 0"),
  description: z.string().nonempty("Cannot be empty"),
  transaction_date: z.custom<Moment>(
    (value) => moment.isMoment(value),
    "Invalid date"
  ),
});

export type SchemaType = z.infer<typeof formEntrySchema>;
export default formEntrySchema;
