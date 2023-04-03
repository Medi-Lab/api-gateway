import {BasicResponse} from "./basic-response";
import {ResponseTypes} from "./response.types";
import {HttpStatus} from "@nestjs/common";
import {ResponseInterface} from "./response.interface";

export class Error extends BasicResponse implements ResponseInterface {
    readonly type: ResponseTypes;

    constructor(message: string, statusCode: HttpStatus) {
        super(message, statusCode);
        this.type = ResponseTypes.ERROR;
    }
}