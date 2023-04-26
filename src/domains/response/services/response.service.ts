import {Inject, Injectable} from '@nestjs/common';
import {CreateResponseDto, UpdateResponseDto} from "../dto";
import {ResponseServiceInterface} from "../interfaces";
import {catchError, map, Observable, of} from "rxjs";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class ResponseService implements ResponseServiceInterface {
    constructor(
        @Inject(constants.microservices_names.response)
        private readonly responseClient: ClientProxy
    ) {
    }

    createResponse(createResponseDto: CreateResponseDto): Observable<CreateResponseDto> {
        return this.responseClient
            .send('create_response', createResponseDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateResponse(id: string, updateResponseDto: UpdateResponseDto): Observable<CreateResponseDto> {
        return this.responseClient
            .send('update_response', {id: Number(id), data: updateResponseDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getResponses(query): Observable<CreateResponseDto[]> {
        return this.responseClient
            .send('get_responses', query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteResponseById(id: string): Observable<CreateResponseDto> {
        return this.responseClient
            .send('delete_response_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}
