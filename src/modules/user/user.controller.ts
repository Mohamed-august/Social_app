import { Router } from "express";
import { userServices } from "./user.service";
import { successRes } from "../../utils/success.res";
import { Request } from "express";
import { auth } from "../../middlewares/auth.middleware";

const router =Router()

export const routes ={
    base:"/users",
    signup:"/signup",
    login:"/login", //POST
    profile:"/me", //GET
}

router.get("/",(req,res)=>{
    res.status(200).json({
        msg:"user module"
    })
})

router.post(routes.signup,async(req,res)=>{
    const {body}=req
    const {data}= await userServices.signupService(body)
    successRes({res,data,status:201})
})

router.post(routes.login,async(req,res)=>{
    const {identifier,password}=req.body

    const {data}=await userServices.loginService({identifier,password})

    successRes({res,data,status:200})
})

router.get(routes.profile,auth,async(req,res)=>{

    const {user,jti}= req as Request
    successRes({res,status:200})
}
)

export default router
