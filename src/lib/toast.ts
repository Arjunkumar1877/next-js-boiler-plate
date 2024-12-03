import { toast } from "@/hooks/use-toast";

export const showErrorToast = ({ message }: { message: string }) => {
  toast({
    variant: "destructive",
    description: message,
  });
};

export const showInfoToast = ({ message }: { message: string }) => {
  toast({
    description: message,
  });
};
