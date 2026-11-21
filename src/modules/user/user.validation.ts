import {z} from "zod"
import { GenderEnum } from "./user.types";

export const signupSchema={
    body: z.strictObject({
    fullname:z.string(),
    email:z.email(),
    phone:z.string().min(10).max(15),
    password:z.string(),
    age:z.number().optional(),
    gender:z.enum(GenderEnum),
    userName:z.string(),
    bio:z.string().optional(),
    confirmPassword:z.string()
    }).refine((arg)=>arg.password==arg.confirmPassword,{
        error:"password mismatch",
        path:["password","confirmPassword"]
    })
}

export type signupData=z.infer<typeof signupSchema.body>


export const resetPasswordSchema={
    body:z.strictObject({
        email:z.email(),
        otp:z.string().min(6).max(6),
        password:z.string(),
        confirmPassword:z.string(),
    }).refine((arg)=>arg.password==arg.confirmPassword,{
        error:"password mismatch",
        path:["password","confirmPassword"]
    })
}

export type resetPasswordData=z.infer<typeof resetPasswordSchema.body>

export const loginSchema={
    body: z.strictObject({
    password:z.string(),
    identifier:z.string()
})
}

export type loginData=z.infer<typeof loginSchema.body>
