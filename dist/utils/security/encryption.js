"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryption = exports.encryption = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
//import { errorRes } from "../error.handle.js";
const secretkey = Buffer.from("sjchcchjdh56sjchcchjdh5625lkiuaw");
const encryption = (data) => {
    const iv = node_crypto_1.default.randomBytes(16);
    const cipher = node_crypto_1.default.createCipheriv("aes-256-cbc", secretkey, iv);
    let cipherText = cipher.update(data, "utf-8", "hex");
    cipherText += cipher.final("hex");
    return `${iv.toString("hex")}:${cipherText}`;
};
exports.encryption = encryption;
const decryption = (encryptedValue) => {
    const [iv, cipherText] = encryptedValue.split(":");
    if (!iv || !cipherText) {
        // errorRes({
        //     msg:"in-valid encrypted value"
        // })
    }
    const binaryIv = Buffer.from(iv, "hex");
    const decipher = node_crypto_1.default.createDecipheriv("aes-256-cbc", secretkey, binaryIv);
    let plaintext = decipher.update(cipherText, "hex", "utf-8");
    plaintext += decipher.final("utf-8");
    return plaintext;
};
exports.decryption = decryption;
//# sourceMappingURL=encryption.js.map