import { z } from "zod";

const formEntrySchema = z.object({
  type: z
    .literal(["credit", "debit"]),
  amount: z.number("fdgsgs").min(0,"Should be greater than 0"),
  particular: z.string().nonempty("Cannot be empty"),
  date: z.date(),
});

export type SchemaType = z.infer<typeof formEntrySchema>;
export default formEntrySchema;
