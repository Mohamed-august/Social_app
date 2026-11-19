"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadrequestResponse = exports.NotFoundException = exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    constructor(msg, statusCode = 500) {
        super(msg);
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
class NotFoundException extends AppError {
    constructor(msg = "not found") {
        super("not found", 404);
    }
}
exports.NotFoundException = NotFoundException;
class BadrequestResponse extends AppError {
    constructor(msg = "bad request") {
        super("bas request", 400);
    }
}
exports.BadrequestResponse = BadrequestResponse;
//# sourceMappingURL=error.handle.js.map