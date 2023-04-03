import {HttpStatus} from "@nestjs/common";
import {ResponseInterface} from "./response.interface";
import {ResponseTypes} from "./response.types";

export class BasicResponse implements ResponseInterface {
    readonly message: string;
    readonly timeStamp: string;
    readonly statusCode?: HttpStatus;
    readonly type: ResponseTypes;

    constructor(message: string, statusCode: HttpStatus) {
        this.message = message;
        this.timeStamp = new Date().toISOString();
        this.statusCode = statusCode;
    }

}