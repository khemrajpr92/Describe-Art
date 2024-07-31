import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().nonempty("Email is required").email(),
  password: z.string().nonempty("Password is required."),
});

export type SingInInputs = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required.")
      .min(3, { message: "Must be 5 or more characters long" })
      .max(30, { message: "Name must be less than 30 words" }),
    email: z.string().nonempty("Email is required.").email(),
    password: z
      .string()
      .nonempty("Password is required.")
      .min(6, { message: "Password must be greater than 6 characters" }),
    confirmPassword: z.string().nonempty("Confirm Password is required."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type SingUpInputs = z.infer<typeof signUpSchema>;

export const forgotPasswordEmailSchema = z.object({
  email: z.string().nonempty("Email is required.").email(),
});

export type ForgotPasswordEmailInput = z.infer<
  typeof forgotPasswordEmailSchema
>;

export const GenerateSchema = z.object({
  prompt: z
    .string()
    .nonempty("Prompt is required")
    .min(4, { message: "Prompt length must be greater than 4 characters" }),
  imageCount: z
    .string() // Change the type to string
    .refine(
      (value) => {
        const numberValue = Number(value);
        return !isNaN(numberValue) && numberValue >= 1 && numberValue <= 6;
      },
      {
        message: "Image count must be a number between 1 and 6",
      }
    ),
});

export type GenerateInputs = z.infer<typeof GenerateSchema>;

export const ContactSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required.")
    .min(3, { message: "Must be 3 or more characters long" })
    .max(30, { message: "Name must be less than 30 words" }),
  email: z.string().nonempty("Email is required.").email(),
  subject: z
    .string()
    .nonempty("Subject is required")
    .min(10, { message: "Subject must be 10 characters long" }),
  message: z.string().nonempty("Message is required."),
});

export type ContactInputs = z.infer<typeof ContactSchema>;
