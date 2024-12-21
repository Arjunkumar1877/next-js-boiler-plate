import { DefaultValues } from "react-hook-form";
import { z } from "zod";

export const addExpenseSchema = z.object({
  name: z.string().min(1),
  amount: z.number().min(1),
  user: z.string(),
});

export type AddExpenseSchema = z.infer<typeof addExpenseSchema>;

export const loginDefaultValues: DefaultValues<AddExpenseSchema> = {
  name: "",
  amount: 0,
  user: "",
};
