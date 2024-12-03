import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

function FormButton({ isLoading, children }: { isLoading: boolean; children: ReactNode | string }) {
  return (
    <Button disabled={isLoading} type="submit" className="w-full">
      {children}
      {isLoading && <Loader className="animate-spin" />}
    </Button>
  );
}

export default FormButton;
