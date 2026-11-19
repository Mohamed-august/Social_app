"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../../config/config");
const sendEmail = async ({ to, subject, html }) => {
    const transporter = nodemailer_1.default.createTransport({
        auth: {
            user: config_1.USER,
            pass: config_1.PASS
        },
        service: "gmail"
    });
    const info = await transporter.sendMail({
        from: "saraha app <saraha@gmail.com>",
        to,
        subject,
        html
    });
    console.log(info.accepted);
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map