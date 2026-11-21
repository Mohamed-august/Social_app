import { Types } from "mongoose";
import { NextFunction, Request, Response } from "express";
import { HUser } from "../modules/user/user.types";
export declare enum TokenEnum {
    access = 0,
    refresh = 1
}
declare module "express-serve-static-core" {
    interface Request {
        user?: HUser;
        jti?: string;
    }
}
export declare const decodeToken: ({ authorization, tokenType }: {
    authorization?: string | undefined;
    tokenType?: TokenEnum;
}) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../modules/user/user.types").IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<import("../modules/user/user.types").IUser & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>;
    jti: string;
}>;
export declare const auth: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.middleware.d.ts.map