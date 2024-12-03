"use client";

import { Card } from "@/components/common/card";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { showInfoToast } from "@/lib/toast";

export default function Home() {
  showInfoToast({
    message: "Welcome",
  });
  return (
    <Container>
      <Button>Click me</Button>
      <Card>Hello</Card>
    </Container>
  );
}
