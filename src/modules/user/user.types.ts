export enum GenderEnum {
    male,
    female
}

export enum ProviderEnum {
    system,
    google
}

export enum RoleEnum
{
    user,
    admin
}

export interface IUser {
    firstname:string,
    lastname:String,
    email:string,
    password?:string,
    phone:string|undefined,
    age?:number|undefined,
    profileImage?:string,
    gender:GenderEnum,
    provider:ProviderEnum,
    role?:RoleEnum,
    bio?:string|undefined,
    userName?:string,
    confirmedAt:Date,
    blockedAt:Date,
    fullname:string
    //otp:otpSchema
}
