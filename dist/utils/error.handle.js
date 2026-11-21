"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorizedException = exports.BadrequestException = exports.NotFoundException = exports.AppError = void 0;
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
class BadrequestException extends AppError {
    constructor(msg = "bad request") {
        super("bad request", 400);
    }
}
exports.BadrequestException = BadrequestException;
class UnAuthorizedException extends AppError {
    constructor(msg = "unAuthorized") {
        super("unAuthorized", 401);
    }
}
exports.UnAuthorizedException = UnAuthorizedException;
//# sourceMappingURL=error.handle.js.map