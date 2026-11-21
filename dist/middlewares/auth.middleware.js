"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.decodeToken = exports.TokenEnum = void 0;
const config_1 = require("../config/config");
const user_model_1 = require("../db/models/user.model");
const error_handle_1 = require("../utils/error.handle");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const redis_connection_1 = require("../db/redis.connection");
const redis_services_1 = require("../utils/redis.services");
var TokenEnum;
(function (TokenEnum) {
    TokenEnum[TokenEnum["access"] = 0] = "access";
    TokenEnum[TokenEnum["refresh"] = 1] = "refresh";
})(TokenEnum || (exports.TokenEnum = TokenEnum = {}));
const decodeToken = async ({ authorization, tokenType = TokenEnum.access }) => {
    console.log({ authorization });
    if (!authorization || !authorization.startsWith("Bearer ")) {
        throw new error_handle_1.UnAuthorizedException();
    }
    const token = authorization.split(" ")[1];
    if (!token) {
        throw new error_handle_1.UnAuthorizedException();
    }
    const payload = jsonwebtoken_1.default.verify(token, tokenType == TokenEnum.access ?
        config_1.ACCESS_TOKEN_SECRET :
        config_1.REFRESH_TOKEN_SECRET);
    const user = await user_model_1.userModel.findById(payload._id);
    if (!user) {
        throw new error_handle_1.UnAuthorizedException();
    }
    if (!user.confirmedAt) {
        throw new error_handle_1.UnAuthorizedException("Confirm your account");
    }
    const { jti } = payload;
    if (!jti) {
        throw new error_handle_1.UnAuthorizedException();
    }
    const redisjti = await redis_connection_1.redisClient.get((0, redis_services_1.userSessionJwtIdKey)(user._id, jti));
    if (!redisjti) {
        throw new error_handle_1.UnAuthorizedException();
    }
    return { user, jti };
};
exports.decodeToken = decodeToken;
const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    const { jti, user } = await (0, exports.decodeToken)({ authorization, tokenType: TokenEnum.access });
    req.user = user;
    req.jti = jti;
};
exports.auth = auth;
//# sourceMappingURL=auth.middleware.js.map