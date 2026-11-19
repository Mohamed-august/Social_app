import { random } from "../../utils/email/createOtp";
import { userModel } from "../../db/models/user.model";
import type { signupData } from "./user.validation";
import { sendEmail } from "../../utils/email/sendEmail";
import { emailTemplate } from "../../utils/email/emailTemplate";
import { createHash } from "../../utils/security/hash";
import { attemptsKey, confirmEmailKey, resendOtpKey } from "../../utils/redis.services";
import { redisClient } from "../../db/redis.connection";
import { BadrequestResponse, NotFoundException } from "../../utils/error.handle";
import { UserRepo } from "../../db/repo/user.repo";

class UserService{
    public name:string="ahmed"
    userRepo=new UserRepo()
    constructor()
    {

    }
    async signupService(data:signupData)
    {
    const isExist=await userModel.findOne({
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
        throw new BadrequestResponse()
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

}

export const userServices = new UserService()