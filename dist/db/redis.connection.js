"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const redis_1 = require("redis");
const config_1 = require("../config/config");
const chalk_1 = __importDefault(require("chalk"));
exports.redisClient = (0, redis_1.createClient)({
    url: config_1.REDIS_URI,
    database: 0,
    RESP: 2
});
exports.redisClient
    .on("error", (err) => {
    console.log(chalk_1.default.red("redis connection failed", err));
})
    .on("connect", () => {
    console.log(chalk_1.default.green("redis connected successfully"));
})
    .connect();
//# sourceMappingURL=redis.connection.js.map