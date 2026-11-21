import type { loginData, signupData } from "./user.validation";
declare class UserService {
    name: string;
    private userRepo;
    constructor();
    signupService(data: signupData): Promise<{
        data: import("mongoose").Document<unknown, {}, import("./user.types").IUser, {
            id: string;
        }, import("mongoose").DefaultSchemaOptions> & Omit<import("./user.types").IUser & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & import("mongoose").HydratedDocumentOverrides<{
            id: string;
        }>;
    }>;
    loginService({ identifier, password }: loginData): Promise<{
        data: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
export declare const userServices: UserService;
export {};
//# sourceMappingURL=user.service.d.ts.map