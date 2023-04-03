import {HttpStatus} from "@nestjs/common";
import {ResponseTypes} from "./response.types";

export interface ResponseInterface {
    readonly message: string;
    readonly timeStamp: string;
    readonly statusCode?: HttpStatus;
    readonly type: ResponseTypes;
}