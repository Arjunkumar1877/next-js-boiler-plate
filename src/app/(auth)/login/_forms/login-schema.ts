import { DefaultValues } from "react-hook-form";
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginDefaultValues: DefaultValues<LoginSchema> = {
    email: "",
    password: "",
};
