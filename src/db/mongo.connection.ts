import mongoose from "mongoose";
import { MONGO_URI } from "../config/config";
import chalk from "chalk";

export const DBConnection =()=>{
    return mongoose.connect(MONGO_URI).then(()=>{
        console.log(chalk.green("DB connected successfully"));
        
    }).catch((err)=>{
        console.log(chalk.red("DB connection failed =>",err));
        
    })
}
