import type { IUser } from "../../modules/user/user.types";
import { BaseRepo } from "./base.repo";
export declare class UserRepo extends BaseRepo<IUser> {
    constructor();
    findByEmail(email: string): Promise<any>;
}
//# sourceMappingURL=user.repo.d.ts.map