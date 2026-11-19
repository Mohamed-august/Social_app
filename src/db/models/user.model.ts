import { model, Schema, type HydratedDocument } from "mongoose";
import { GenderEnum, ProviderEnum, RoleEnum, type IUser } from "../../modules/user/user.types";
import { decryption, encryption } from "../../utils/security/encryption";

const userSchema = new Schema<IUser>({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:function(this:IUser)
        {
            this.provider == ProviderEnum.system? true : false
        }
    },
    phone:{
        type:String,
        set(value:string)
        {
            //return "0"
            return encryption(value)
        },
        get(value:string)
        {
            //return "0"
            return decryption(value)
        }
    },
    age:Number,
    profileImage:{
        type:String,
        // required:true
    },
    gender:{
        type:Number,
        enum:GenderEnum
    },
    provider:{
        type:Number,
        enum:ProviderEnum,
        default:ProviderEnum.system,
    },
    role :{
        type:Number,
        enum:RoleEnum,
        default:RoleEnum.user
    },
    bio:String,
    userName:{
        type:String,
        required:function(this:IUser)
        {
            this.provider == ProviderEnum.system? true : false
        },
        //unique:true
    },
    confirmedAt:
    {
        type:Date,
    },
    blockedAt:{
        type:Date,
    },
    //otp: otpSchema

},
{
    timestamps:true,
    strict:true,
    strictQuery:true,
    optimisticConcurrency:true,
    toJSON:{
        virtuals:true,
        getters:true,
        transform(doc,ret)
        {
            delete (ret as IUser & {id?:string}).id
            delete ret.password
            return ret
        }
    },
    toObject:{
        virtuals:true,
        getters:true,
        transform(doc,ret)
        {
            delete (ret as IUser & {id?:string}).id
            return ret
        }
    },
    virtuals:{
        fullname:{
            get(this:IUser){
                return this.firstname +" "+ this.lastname
            },
            set(this:HydratedDocument<IUser>,value:string){
                const [firstname,lastname]=value.split(" ")
                if (!firstname || !lastname)
                {
                    throw new Error("Invalid full name format.")
                }
                this.set("firstname",firstname)
                this.set("lastname",lastname)
            }
        }
    }
})


export const userModel = model("User",userSchema)
