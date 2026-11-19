import {hash,compare} from "bcrypt"
// import {hash} from "argon2"


export const createHash = async(password:string)=>{
    const generatedHash=await hash(password,10)
    // const generatedHash=await hash(password,{
    //     memoryCost:1024*1024, // 1MB
    //     timeCost:2
    // })
    return generatedHash
}

export const compareHash=async(password:string,hashedPassword:string)=>{

    const isMatch=await compare(password,hashedPassword)
    // const isMatch=await verify(hashedPassword,password)
    return isMatch
}
