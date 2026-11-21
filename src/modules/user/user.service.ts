import { random } from "../../utils/email/createOtp";
import { userModel } from "../../db/models/user.model";
import type { loginData, signupData } from "./user.validation";
import { sendEmail } from "../../utils/email/sendEmail";
import { emailTemplate } from "../../utils/email/emailTemplate";
import { compareHash, createHash } from "../../utils/security/hash";
import { attemptsKey, confirmEmailKey, resendOtpKey, userSessionJwtIdKey } from "../../utils/redis.services";
import { redisClient } from "../../db/redis.connection";
import { BadrequestException} from "../../utils/error.handle";
import { UserRepo } from "../../db/repo/user.repo";
import jwt from "jsonwebtoken";
import { ProviderEnum } from "./user.types";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../../config/config";

class UserService{
    public name:string="ahmed"
    private userRepo=new UserRepo()
    constructor()
    {
        
    }
    async signupService(data:signupData)
    {
    const isExist=await this.userRepo.findOne({
        $or:[
            {email:data.email},
            {userName:data.userName}
        ]
    })
    
    if(isExist){
        // errorRes({msg:`${isEmailExist?"email":"username"}  already exists`,
        //     statusCode:400})
        // throw new AppError (`${isExist.email==data.email?"email":"username"}  already exists`,
        //     400
        // )
        // throw new NotFoundException()
        throw new BadrequestException()
    }

    const otp=random(6)
    await sendEmail({
        to:data.email,
        subject:"confirm email",
        html:emailTemplate({otp,subject:"confirm email"})
    })

    

    const user = await userModel.create(
        {
            fullname:data.fullname,
            email:data.email,
            password:await createHash(data.password),
            gender:data.gender,
            phone:data.phone,
            bio:data.bio,
            age:data.age,
            userName:data.userName
        }
    )
    const rediskey=confirmEmailKey(user._id)

    await redisClient.set(rediskey,await createHash(otp),{
        expiration:{
            type:"EX",
            value: 5 * 60
        }
    })
    await redisClient.set(resendOtpKey(user._id),0,{
        expiration:{
            type:"EX",
            value:60
        }
    })

    await redisClient.incr(attemptsKey(user._id))
    return {
        data:user
    }
}

    async loginService({identifier,password}:loginData)
    {
        const user = await this.userRepo.findOne({$or:[
            {email:identifier},
            {userName:identifier}]})
        if(!user){

        throw new BadrequestException("invalid credentials")
        }
        if(user.provider>ProviderEnum.system || !user.password){
            throw new BadrequestException("use your provider")
        }
        const isMatch = await compareHash(password, user.password);
        if (!isMatch) {
            throw new BadrequestException("use your provider")
        }
        const jwtid= random()
        const accessToken =jwt.sign({
            _id:user._id,
            email:user.email
        },ACCESS_TOKEN_SECRET,{expiresIn:"30M",
            jwtid
        }
        
    )

        const refreshToken = jwt.sign({
            _id:user._id,
            email:user.email
        },REFRESH_TOKEN_SECRET,{expiresIn:"7d",
            jwtid
        })
        await redisClient.set(userSessionJwtIdKey(user._id,jwtid),jwtid,{
            expiration:{
                type:"EX",
                value:7*24*60*60
            }
        })

        return {data:{
            accessToken,
            refreshToken}}
    }
}
export const userServices = new UserService()
