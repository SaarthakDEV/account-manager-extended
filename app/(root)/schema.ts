import * as z from "zod";

const formSchema = z.object({
    accountName: z.string("Please enter valid account name").min(0, "Length should be greater than 3 characters").max(10,"Account name cannot exceed 10 characters")
})

export type SchemaType = z.infer<typeof formSchema>;

export default formSchema;