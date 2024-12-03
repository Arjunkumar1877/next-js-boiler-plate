"use client";

import React from "react";
import LoginForm from "./_forms/LoginForm";
import { LoginSchema } from "./_forms/login-schema";
import { H3 } from "@/components/typography/headings";
import { showInfoToast } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { Card } from "@/components/common/card";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values: LoginSchema) => {
    showInfoToast({ message: "Logged in" });
    router.push("/admin/dashboard");
    router.refresh();
  };

  return (
    <main className="grid place-items-center w-full h-screen">
      <Card className="max-w-md w-full">
        <H3>Admin login</H3>
        <LoginForm onSubmit={handleLogin} />
      </Card>
    </main>
  );
};

export default LoginPage;
