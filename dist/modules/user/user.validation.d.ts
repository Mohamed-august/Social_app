import { z } from "zod";
import { GenderEnum } from "./user.types";
export declare const signupSchema: {
    body: z.ZodObject<{
        fullname: z.ZodString;
        email: z.ZodEmail;
        phone: z.ZodString;
        password: z.ZodString;
        age: z.ZodOptional<z.ZodNumber>;
        gender: z.ZodEnum<typeof GenderEnum>;
        userName: z.ZodString;
        bio: z.ZodOptional<z.ZodString>;
        confirmPassword: z.ZodString;
    }, z.core.$strict>;
};
export type signupData = z.infer<typeof signupSchema.body>;
export declare const resetPasswordSchema: {
    body: z.ZodObject<{
        email: z.ZodEmail;
        otp: z.ZodString;
        password: z.ZodString;
        confirmPassword: z.ZodString;
    }, z.core.$strict>;
};
export type resetPasswordData = z.infer<typeof resetPasswordSchema.body>;
export declare const loginSchema: {
    body: z.ZodObject<{
        password: z.ZodString;
        identifier: z.ZodString;
    }, z.core.$strict>;
};
export type loginData = z.infer<typeof loginSchema.body>;
//# sourceMappingURL=user.validation.d.ts.map