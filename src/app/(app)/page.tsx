import { Card } from "@/components/common/card";
import { Container } from "@/components/common/container";
import { H2 } from "@/components/typography/headings";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Page = () => {
  const expenses = [
    {
      name: "Chicken lollipop",
      amount: 340,
      whoPaid: {
        id: "1",
        name: "Raazi",
        avatar:
          "https://images.pexels.com/photos/1816654/pexels-photo-1816654.jpeg?cs=srgb&dl=pexels-atef-khaled-825144-1816654.jpg&fm=jpg",
      },
    },
    {
      name: "Mongo DB",
      amount: 12,
      whoPaid: {
        id: "1",
        name: "Arjun",
        avatar:
          "https://images.pexels.com/photos/1816654/pexels-photo-1816654.jpeg?cs=srgb&dl=pexels-atef-khaled-825144-1816654.jpg&fm=jpg",
      },
    },
  ];
  return (
    <Container>
      <div>
        <H2>Expenses</H2>
        <Link href="/add">Add</Link>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {expenses.map((expense, index) => (
          <Card key={index} className="flex justify-between">
            <div className="flex items-center">
              <img src={expense.whoPaid.avatar} alt={expense.whoPaid.name} className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{expense.whoPaid.name}</h3>
                <p className="text-gray-500">Paid for {expense.name}</p>
              </div>
            </div>
            <p className="text-lg font-semibold">{formatCurrency(expense.amount)}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Page;
