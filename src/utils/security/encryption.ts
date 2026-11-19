import crypto from "node:crypto";
//import { errorRes } from "../error.handle.js";

const secretkey=Buffer.from("sjchcchjdh56sjchcchjdh5625lkiuaw")
export const encryption=(data:string)=>
{
    const iv=crypto.randomBytes(16)
    const cipher=crypto.createCipheriv("aes-256-cbc",secretkey,iv)
    let cipherText=cipher.update(data,"utf-8","hex")
    cipherText+=cipher.final("hex")
    return `${iv.toString("hex")}:${cipherText}`
}

export const decryption=(encryptedValue:string)=>
{
    const [iv,cipherText]= encryptedValue.split(":") 
    if(!iv || !cipherText)
    {
        // errorRes({
        //     msg:"in-valid encrypted value"
        // })
    }
    const binaryIv = Buffer.from(iv as string,"hex")
    const decipher = crypto.createDecipheriv("aes-256-cbc",secretkey,binaryIv)
    let plaintext = decipher.update(cipherText as string,"hex","utf-8")
    plaintext+=decipher.final("utf-8")
    return plaintext
}
