import type { Types } from "mongoose";
export declare const userPrefixKey: (userId: string | Types.ObjectId) => string;
export declare const confirmEmailKey: (userId: string | Types.ObjectId) => string;
export declare const resendOtpKey: (userId: string | Types.ObjectId) => string;
export declare const attemptsKey: (userId: string | Types.ObjectId) => string;
export declare const attemptsBlockKey: (userId: string | Types.ObjectId) => string;
export declare const attemptsBlockCountKey: (userId: string | Types.ObjectId) => string;
export declare const userSessionJwtIdPrefixKey: (userId: string | Types.ObjectId) => string;
export declare const userSessionJwtIdKey: (userId: string | Types.ObjectId, jwtId: string | Types.ObjectId) => string;
//# sourceMappingURL=redis.services.d.ts.map