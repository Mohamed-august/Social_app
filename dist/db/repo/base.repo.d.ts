import type { Model, QueryFilter } from "mongoose";
export declare class BaseRepo<T, TQueryHelpers = any, TMethods = any, TVirtuals = any> {
    protected readonly model: Model<T, TQueryHelpers, TMethods, TVirtuals>;
    constructor(model: Model<T, TQueryHelpers, TMethods, TVirtuals>);
    find(filter: QueryFilter<T>): Promise<import("mongoose").IfAny<T, any, TVirtuals & TMethods extends infer T_1 ? T_1 extends TVirtuals & TMethods ? T_1 extends Record<string, never> ? import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    } & import("mongoose").IfEquals<TVirtuals, {}, import("mongoose").AddDefaultId<T, {}, import("mongoose").DefaultSchemaOptions>, TVirtuals> : import("mongoose").IfAny<T_1, import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    }, import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").MergeType<import("mongoose").Require_id<T> & {
        __v: number;
    }, import("mongoose").HydratedDocumentOverrides<import("mongoose").IfEquals<T_1, {}, T_1, T_1 & import("mongoose").AddDefaultId<T, TVirtuals, import("mongoose").DefaultSchemaOptions>>>>> : never : never>>;
    findOne(filter: QueryFilter<T>): Promise<import("mongoose").QueryWithHelpers<import("mongoose").IfAny<T, any, TVirtuals & TMethods extends infer T_1 ? T_1 extends TVirtuals & TMethods ? T_1 extends Record<string, never> ? import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    } & import("mongoose").IfEquals<TVirtuals, {}, import("mongoose").AddDefaultId<T, {}, import("mongoose").DefaultSchemaOptions>, TVirtuals> : import("mongoose").IfAny<T_1, import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    }, import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").MergeType<import("mongoose").Require_id<T> & {
        __v: number;
    }, import("mongoose").HydratedDocumentOverrides<import("mongoose").IfEquals<T_1, {}, T_1, T_1 & import("mongoose").AddDefaultId<T, TVirtuals, import("mongoose").DefaultSchemaOptions>>>>> : never : never> | null, import("mongoose").IfAny<T, any, TVirtuals & TMethods extends infer T_1 ? T_1 extends TVirtuals & TMethods ? T_1 extends Record<string, never> ? import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    } & import("mongoose").IfEquals<TVirtuals, {}, import("mongoose").AddDefaultId<T, {}, import("mongoose").DefaultSchemaOptions>, TVirtuals> : import("mongoose").IfAny<T_1, import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<T> & {
        __v: number;
    }, import("mongoose").Document<unknown, TQueryHelpers, T, TVirtuals, import("mongoose").DefaultSchemaOptions> & import("mongoose").MergeType<import("mongoose").Require_id<T> & {
        __v: number;
    }, import("mongoose").HydratedDocumentOverrides<import("mongoose").IfEquals<T_1, {}, T_1, T_1 & import("mongoose").AddDefaultId<T, TVirtuals, import("mongoose").DefaultSchemaOptions>>>>> : never : never>, TQueryHelpers, import("mongoose").Require_id<T> extends infer T_2 ? T_2 extends import("mongoose").Require_id<T> ? T_2 extends {
        __v?: infer U;
    } ? T_2 : T_2 & {
        __v: number;
    } : never : never, "findOne", TMethods & TVirtuals, import("mongoose").Require_id<T> extends infer T_2 ? T_2 extends import("mongoose").Require_id<T> ? T_2 extends {
        __v?: infer U;
    } ? T_2 : T_2 & {
        __v: number;
    } : never : never>>;
}
//# sourceMappingURL=base.repo.d.ts.map