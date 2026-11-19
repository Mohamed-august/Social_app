import express, { type NextFunction, type Request, type Response } from "express"
import userRouter, { routes as userRoutes} from "./modules/user/user.controller"
import chalk from "chalk"
import { PORT } from "./config/config"
import { DBConnection } from "./db/mongo.connection"
import type { IError } from "./utils/error.handle"
const app =express()
app.use(express.json())

DBConnection()


app.get("/",(req,res)=>
{
    res.status(200).json({
        msg:"social media app"
    })
})

app.use(userRoutes.base,userRouter)

// console.log(await userModel.find())

app.use((err : IError , req : Request , res : Response, next : NextFunction)=>{

    res.status(err.statusCode).json({
        msg:err.message,
        statusCode:err.statusCode
    })
})

app.listen(PORT,()=>{
    console.log(chalk.green("server is running on port",PORT));
    
})
