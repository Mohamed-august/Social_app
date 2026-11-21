import { Request } from "express";
import { HUser } from "../modules/user/user.types";
export interface IRequest extends Request {
    jti?: string;
    user?: HUser;
}
//# sourceMappingURL=types.d.ts.map