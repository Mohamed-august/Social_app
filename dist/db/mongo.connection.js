"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
const chalk_1 = __importDefault(require("chalk"));
const DBConnection = () => {
    return mongoose_1.default.connect(config_1.MONGO_URI).then(() => {
        console.log(chalk_1.default.green("DB connected successfully"));
    }).catch((err) => {
        console.log(chalk_1.default.red("DB connection failed =>", err));
    });
};
exports.DBConnection = DBConnection;
//# sourceMappingURL=mongo.connection.js.map