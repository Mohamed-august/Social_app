import type { IUser } from "../../modules/user/user.types";
import { userModel } from "../models/user.model";
import { BaseRepo } from "./base.repo";

export class UserRepo extends BaseRepo<IUser>
{
    constructor()
    {
        super(userModel)
    }
    async findByEmail(email:string)
    {
        return await this.model.findOne({email})
    }
}
