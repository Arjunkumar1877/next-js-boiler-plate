import { Card } from "@/components/common/card";
import { Container } from "@/components/common/container";
import { H2 } from "@/components/typography/headings";
import { Avatar } from "@/components/common/avatar";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Large, Lead, P } from "@/components/typography/body";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
    <Container topPadding>
      <div className="flex justify-between">
        <H2>Expenses</H2>
        <Link href="/add">
          <Button size="sm">
            <Plus />
            Add
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {expenses.map((expense, index) => (
          <Card key={index} className="flex justify-between">
            <div>
              <Large className="font-semibold">{formatCurrency(expense.amount)}</Large>
              <P>{expense.name}</P>
            </div>
            <div className="flex gap-2 align-middle my-auto">
              <P className="my-auto">{expense.whoPaid.name}</P>
              <Avatar size="xs" src={expense.whoPaid.avatar} />
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Page;
