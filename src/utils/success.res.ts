import { Response } from "express";

export const successRes=({res,data={},msg="Done",status=200}:{res:Response,data?:Object,msg?:string,status?:number})=>{

return res.status(status).json({
    data,
    msg,
    status,
    timestamp:new Date(Date.now())
})

}

