export interface IError extends Error {
    statusCode: number;
}
export declare class AppError extends Error {
    private statusCode;
    constructor(msg: string, statusCode?: number);
}
export declare class NotFoundException extends AppError {
    constructor(msg?: string);
}
export declare class BadrequestResponse extends AppError {
    constructor(msg?: string);
}
//# sourceMappingURL=error.handle.d.ts.map