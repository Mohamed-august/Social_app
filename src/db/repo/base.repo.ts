import type {Model, QueryFilter} from "mongoose"

export class BaseRepo<T, TQueryHelpers = any, TMethods = any, TVirtuals = any>
{
    constructor(protected readonly model: Model<T, TQueryHelpers, TMethods, TVirtuals>)
    {

    }

    async find(filter:QueryFilter<T>)
    {
        return await this.model.create({

        })
    }

    async findOne(filter:QueryFilter<T>)
    {
        return await this.model.findOne(filter)
    }
}

