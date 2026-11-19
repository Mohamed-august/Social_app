import type { signupData } from "./user.validation";
import { UserRepo } from "../../db/repo/user.repo";
declare class UserService {
    name: string;
    userRepo: UserRepo;
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
}
export declare const userServices: UserService;
export {};
//# sourceMappingURL=user.service.d.ts.map