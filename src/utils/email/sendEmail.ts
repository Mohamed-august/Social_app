import nodemailer from "nodemailer"
import { PASS, USER } from "../../config/config"

export const sendEmail=async({to,subject,html}:{to:string,subject:string,html:string})=>{
    const transporter=nodemailer.createTransport({
        auth:{
            user:USER,
            pass:PASS
        },
        service:"gmail"
    })
    const info = await transporter.sendMail({
        from:"saraha app <saraha@gmail.com>",
        to,
        subject,
        html
    })

    console.log(info.accepted)
}
