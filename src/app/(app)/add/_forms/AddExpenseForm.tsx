"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormInput from "@/components/form/FormInput";
import { loginDefaultValues, AddExpenseSchema, addExpenseSchema } from "./add-expense-schema";
import FormButton from "@/components/form/FormButton";

type Props = {
  onSubmit: (values: AddExpenseSchema) => Promise<any>;
  defaultValues?: DefaultValues<AddExpenseSchema>;
  isLoading?: boolean;
};

const AddExpenseForm = ({ onSubmit, defaultValues = loginDefaultValues, isLoading = false }: Props) => {
  const form = useForm<AddExpenseSchema>({
    resolver: zodResolver(addExpenseSchema),
    defaultValues,
    mode: "onTouched",
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormInput label="name">
              <Input placeholder="name" {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormInput label="amount">
              <Input
                type="number"
                placeholder="amount"
                {...field}
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
              />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormInput label="user">
              <Input placeholder="user" {...field} />
            </FormInput>
          )}
        />
        <FormButton isLoading={form.formState.isLoading || isLoading}>Submit</FormButton>
      </form>
    </Form>
  );
};

export default AddExpenseForm;
