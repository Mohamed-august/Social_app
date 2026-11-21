import { HydratedDocument } from "mongoose";
export declare enum GenderEnum {
    male = 0,
    female = 1
}
export declare enum ProviderEnum {
    system = 0,
    google = 1
}
export declare enum RoleEnum {
    user = 0,
    admin = 1
}
export interface IUser {
    firstname: string;
    lastname: String;
    email: string;
    password?: string;
    phone: string | undefined;
    age?: number | undefined;
    profileImage?: string;
    gender: GenderEnum;
    provider: ProviderEnum;
    role?: RoleEnum;
    bio?: string | undefined;
    userName?: string;
    confirmedAt: Date;
    blockedAt: Date;
    fullname: string;
}
export type HUser = HydratedDocument<IUser>;
//# sourceMappingURL=user.types.d.ts.map