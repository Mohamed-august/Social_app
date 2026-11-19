"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const user_model_1 = require("../models/user.model");
const base_repo_1 = require("./base.repo");
class UserRepo extends base_repo_1.BaseRepo {
    constructor() {
        super(user_model_1.userModel);
    }
    async findByEmail(email) {
        return await this.model.findOne({ email });
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repo.js.map