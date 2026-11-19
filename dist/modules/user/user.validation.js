"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
const user_types_1 = require("./user.types");
exports.signupSchema = {
    body: zod_1.z.strictObject({
        fullname: zod_1.z.string(),
        email: zod_1.z.email(),
        phone: zod_1.z.string().min(10).max(15),
        password: zod_1.z.string(),
        age: zod_1.z.number().optional(),
        gender: zod_1.z.enum(user_types_1.GenderEnum),
        userName: zod_1.z.string(),
        bio: zod_1.z.string().optional(),
        confirmPassword: zod_1.z.string()
    }).refine((arg) => arg.password == arg.confirmPassword, {
        error: "password mismatch",
        path: ["password", "confirmPassword"]
    })
};
exports.resetPasswordSchema = {
    body: zod_1.z.strictObject({
        email: zod_1.z.email(),
        otp: zod_1.z.string().min(6).max(6),
        password: zod_1.z.string(),
        confirmPassword: zod_1.z.string(),
    }).refine((arg) => arg.password == arg.confirmPassword, {
        error: "password mismatch",
        path: ["password", "confirmPassword"]
    })
};
//# sourceMappingURL=user.validation.js.map