export interface IError extends Error{
    statusCode:number
}

export class AppError extends Error {
    constructor(msg:string,private statusCode:number=500){
        super(msg)
    }
}

export class NotFoundException extends AppError{
    constructor(msg:string="not found"){
        super("not found",404)
    }
}

export class BadrequestException extends AppError{
    constructor(msg:string="bad request"){
        super("bad request",400)
    }
}

export class UnAuthorizedException extends AppError{
    constructor(msg:string="unAuthorized"){
        super("unAuthorized",401)
    }
}
