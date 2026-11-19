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

export class BadrequestResponse extends AppError{
    constructor(msg:string="bad request"){
        super("bas request",400)
    }
}
