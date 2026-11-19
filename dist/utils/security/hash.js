"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.createHash = void 0;
const bcrypt_1 = require("bcrypt");
// import {hash} from "argon2"
const createHash = async (password) => {
    const generatedHash = await (0, bcrypt_1.hash)(password, 10);
    // const generatedHash=await hash(password,{
    //     memoryCost:1024*1024, // 1MB
    //     timeCost:2
    // })
    return generatedHash;
};
exports.createHash = createHash;
const compareHash = async (password, hashedPassword) => {
    const isMatch = await (0, bcrypt_1.compare)(password, hashedPassword);
    // const isMatch=await verify(hashedPassword,password)
    return isMatch;
};
exports.compareHash = compareHash;
//# sourceMappingURL=hash.js.map