"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successRes = void 0;
const successRes = ({ res, data = {}, msg = "Done", status = 200 }) => {
    return res.status(status).json({
        data,
        msg,
        status,
        timestamp: new Date(Date.now())
    });
};
exports.successRes = successRes;
//# sourceMappingURL=success.res.js.map