import { Types } from "mongoose"
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../config/config"
import { userModel } from "../db/models/user.model"
import { UnAuthorizedException } from "../utils/error.handle"
import jwt from "jsonwebtoken"
import { redisClient } from "../db/redis.connection"
import { userSessionJwtIdKey } from "../utils/redis.services"
import { NextFunction, Request, Response } from "express"
import { HUser } from "../modules/user/user.types"
export enum TokenEnum
{
    access,
    refresh
}

declare module "express-serve-static-core"{
    interface Request {
        user?:HUser,
        jti?:string
    }
}

export const decodeToken = async({authorization,tokenType=TokenEnum.access}:{authorization?:string|undefined,tokenType?:TokenEnum})=>{
    console.log({authorization})
    if(!authorization || !authorization.startsWith("Bearer ")){
        throw new UnAuthorizedException()
    }
    const token =authorization.split(" ")[1]

    if(!token)
    {
        throw new UnAuthorizedException()
    }
    
    const payload= jwt.verify
    (token,tokenType == TokenEnum.access?
        ACCESS_TOKEN_SECRET:
        REFRESH_TOKEN_SECRET
    ) as jwt.JwtPayload | & {email:string, _id:string|Types.ObjectId , jti:string}

    const user = await userModel.findById(payload._id)
    if(!user){
        throw new UnAuthorizedException()
    }
    if(!user.confirmedAt)
    {
        throw new UnAuthorizedException("Confirm your account")

    }
    const {jti}=payload;
    if(!jti)
    {
        throw new UnAuthorizedException()

    }
    const redisjti=await redisClient.get(userSessionJwtIdKey(user._id,jti))
    if(!redisjti)
    {
        throw new UnAuthorizedException()

    }
    return {user,jti};
}

export const auth = async (req:Request,res:Response,next:NextFunction)=>
{
    const {authorization}=req.headers
    const {jti,user}=await decodeToken({authorization,tokenType:TokenEnum.access})

    req.user=user
    req.jti=jti
}

