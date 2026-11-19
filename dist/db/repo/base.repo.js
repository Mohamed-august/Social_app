"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepo = void 0;
class BaseRepo {
    model;
    constructor(model) {
        this.model = model;
    }
    async find(filter) {
        return await this.model.create({});
    }
    async findOne(filter) {
        return await this.model.findOne(filter);
    }
}
exports.BaseRepo = BaseRepo;
//# sourceMappingURL=base.repo.js.map