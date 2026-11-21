"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const createOtp_1 = require("../../utils/email/createOtp");
const user_model_1 = require("../../db/models/user.model");
const sendEmail_1 = require("../../utils/email/sendEmail");
const emailTemplate_1 = require("../../utils/email/emailTemplate");
const hash_1 = require("../../utils/security/hash");
const redis_services_1 = require("../../utils/redis.services");
const redis_connection_1 = require("../../db/redis.connection");
const error_handle_1 = require("../../utils/error.handle");
const user_repo_1 = require("../../db/repo/user.repo");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_types_1 = require("./user.types");
const config_1 = require("../../config/config");
class UserService {
    name = "ahmed";
    userRepo = new user_repo_1.UserRepo();
    constructor() {
    }
    async signupService(data) {
        const isExist = await this.userRepo.findOne({
            $or: [
                { email: data.email },
                { userName: data.userName }
            ]
        });
        if (isExist) {
            // errorRes({msg:`${isEmailExist?"email":"username"}  already exists`,
            //     statusCode:400})
            // throw new AppError (`${isExist.email==data.email?"email":"username"}  already exists`,
            //     400
            // )
            // throw new NotFoundException()
            throw new error_handle_1.BadrequestException();
        }
        const otp = (0, createOtp_1.random)(6);
        await (0, sendEmail_1.sendEmail)({
            to: data.email,
            subject: "confirm email",
            html: (0, emailTemplate_1.emailTemplate)({ otp, subject: "confirm email" })
        });
        const user = await user_model_1.userModel.create({
            fullname: data.fullname,
            email: data.email,
            password: await (0, hash_1.createHash)(data.password),
            gender: data.gender,
            phone: data.phone,
            bio: data.bio,
            age: data.age,
            userName: data.userName
        });
        const rediskey = (0, redis_services_1.confirmEmailKey)(user._id);
        await redis_connection_1.redisClient.set(rediskey, await (0, hash_1.createHash)(otp), {
            expiration: {
                type: "EX",
                value: 5 * 60
            }
        });
        await redis_connection_1.redisClient.set((0, redis_services_1.resendOtpKey)(user._id), 0, {
            expiration: {
                type: "EX",
                value: 60
            }
        });
        await redis_connection_1.redisClient.incr((0, redis_services_1.attemptsKey)(user._id));
        return {
            data: user
        };
    }
    async loginService({ identifier, password }) {
        const user = await this.userRepo.findOne({ $or: [
                { email: identifier },
                { userName: identifier }
            ] });
        if (!user) {
            throw new error_handle_1.BadrequestException("invalid credentials");
        }
        if (user.provider > user_types_1.ProviderEnum.system || !user.password) {
            throw new error_handle_1.BadrequestException("use your provider");
        }
        const isMatch = await (0, hash_1.compareHash)(password, user.password);
        if (!isMatch) {
            throw new error_handle_1.BadrequestException("use your provider");
        }
        const jwtid = (0, createOtp_1.random)();
        const accessToken = jsonwebtoken_1.default.sign({
            _id: user._id,
            email: user.email
        }, config_1.ACCESS_TOKEN_SECRET, { expiresIn: "30M",
            jwtid
        });
        const refreshToken = jsonwebtoken_1.default.sign({
            _id: user._id,
            email: user.email
        }, config_1.REFRESH_TOKEN_SECRET, { expiresIn: "7d",
            jwtid
        });
        await redis_connection_1.redisClient.set((0, redis_services_1.userSessionJwtIdKey)(user._id, jwtid), jwtid, {
            expiration: {
                type: "EX",
                value: 7 * 24 * 60 * 60
            }
        });
        return { data: {
                accessToken,
                refreshToken
            } };
    }
}
exports.userServices = new UserService();
//# sourceMappingURL=user.service.js.map