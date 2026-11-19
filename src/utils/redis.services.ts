import type { Types } from "mongoose"

export const userPrefixKey=(userId:string|Types.ObjectId) =>`users:${userId}:otp`

export const confirmEmailKey =(userId:string|Types.ObjectId) => `${userPrefixKey(userId)}:confirmEmail`

export const resendOtpKey =(userId:string|Types.ObjectId) => `${userPrefixKey(userId)}:resend`

export const attemptsKey =(userId:string|Types.ObjectId) => `${userPrefixKey(userId)}:attempts`

export const attemptsBlockKey =(userId:string|Types.ObjectId) => `${userPrefixKey(userId)}:block`

export const attemptsBlockCountKey =(userId:string|Types.ObjectId) => `${userPrefixKey(userId)}:blockCount`

export const userSessionJwtIdPrefixKey=(userId:string|Types.ObjectId) =>{ return `users:${userId}:session`}

export const userSessionJwtIdKey=(userId:string|Types.ObjectId,jwtId:string|Types.ObjectId) =>{ return `${userSessionJwtIdPrefixKey(userId)}:${jwtId}`}
