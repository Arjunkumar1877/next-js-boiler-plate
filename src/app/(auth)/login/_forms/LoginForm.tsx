"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormInput from "@/components/form/FormInput";
import { loginDefaultValues, LoginSchema, loginSchema } from "./login-schema";
import FormButton from "@/components/form/FormButton";

type Props = {
  onSubmit: (values: LoginSchema) => Promise<any>;
  defaultValues?: DefaultValues<LoginSchema>;
  isLoading?: boolean;
};

const LoginForm = ({ onSubmit, defaultValues = loginDefaultValues, isLoading = false }: Props) => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: "onTouched",
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormInput label="email">
              <Input placeholder="email" {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormInput label="password">
              <Input type="password" placeholder="password" {...field} />
            </FormInput>
          )}
        />
        <FormButton isLoading={form.formState.isLoading || isLoading}>Submit</FormButton>
      </form>
    </Form>
  );
};

export default LoginForm;
