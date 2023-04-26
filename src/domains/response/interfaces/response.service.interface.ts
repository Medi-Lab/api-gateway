import {CreateResponseDto, UpdateResponseDto} from "../dto";
import {Observable} from "rxjs";

export interface ResponseServiceInterface {
    createResponse(createResponseDto: CreateResponseDto): Observable<CreateResponseDto>;

    updateResponse(id: string, updateResponseDto: UpdateResponseDto): Observable<CreateResponseDto>;

    getResponses(query): Observable<CreateResponseDto[]>;

    deleteResponseById(id: string): Observable<CreateResponseDto>;
}