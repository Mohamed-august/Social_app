import { createClient} from "redis";
import { REDIS_URI } from "../config/config";
import chalk from "chalk";

export const redisClient = createClient({
    url:REDIS_URI,
    database:0,
    RESP:2
})

redisClient
.on("error",(err)=>{
    console.log(chalk.red("redis connection failed",err))
})
.on("connect",()=>{
    console.log(chalk.green("redis connected successfully"))
})
.connect()
