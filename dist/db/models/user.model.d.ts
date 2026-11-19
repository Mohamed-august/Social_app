import { Schema } from "mongoose";
import { GenderEnum, ProviderEnum, RoleEnum, type IUser } from "../../modules/user/user.types";
export declare const userModel: import("mongoose").Model<IUser, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, IUser, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, Schema<IUser, import("mongoose").Model<IUser, any, any, any, any, any, IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUser, import("mongoose").Document<unknown, {}, IUser, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    firstname?: import("mongoose").SchemaDefinitionProperty<string, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    lastname?: import("mongoose").SchemaDefinitionProperty<String, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    email?: import("mongoose").SchemaDefinitionProperty<string, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    password?: import("mongoose").SchemaDefinitionProperty<string | undefined, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    phone?: import("mongoose").SchemaDefinitionProperty<string | undefined, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    age?: import("mongoose").SchemaDefinitionProperty<number | undefined, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    profileImage?: import("mongoose").SchemaDefinitionProperty<string | undefined, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    gender?: import("mongoose").SchemaDefinitionProperty<GenderEnum, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    provider?: import("mongoose").SchemaDefinitionProperty<ProviderEnum, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    role?: import("mongoose").SchemaDefinitionProperty<RoleEnum | undefined, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    bio?: import("mongoose").SchemaDefinitionProperty<string | undefined, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    userName?: import("mongoose").SchemaDefinitionProperty<string | undefined, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    confirmedAt?: import("mongoose").SchemaDefinitionProperty<Date, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    blockedAt?: import("mongoose").SchemaDefinitionProperty<Date, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
    fullname?: import("mongoose").SchemaDefinitionProperty<string, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>>;
}, IUser>, IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.model.d.ts.map