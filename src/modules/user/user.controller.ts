import { Router } from "express";
import { userServices } from "./user.service";

const router =Router()

export const routes ={
    base:"/users",
    signup:"/signup"
}

router.get("/",(req,res)=>{
    res.status(200).json({
        msg:"user module"
    })
})

router.post(routes.signup,async(req,res)=>{
    const {body}=req
    const {data}= await userServices.signupService(body)
    res.json({
        msg:"Done"
    })
})

export default router
