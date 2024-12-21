"use client";

import React from "react";
import AddExpenseForm from "./_forms/AddExpenseForm";
import { showInfoToast } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { AddExpenseSchema } from "./_forms/add-expense-schema";
import { Container } from "@/components/common/container";
import { H2 } from "@/components/typography/headings";

const Page = () => {
  const router = useRouter();

  const handleAddExpense = async (values: AddExpenseSchema) => {
    showInfoToast({ message: "Added expense" });
    router.push("/");
    router.refresh();
  };

  return (
    <Container topPadding>
      <H2>Add Expense</H2>
      <AddExpenseForm onSubmit={handleAddExpense} />
    </Container>
  );
};

export default Page;
