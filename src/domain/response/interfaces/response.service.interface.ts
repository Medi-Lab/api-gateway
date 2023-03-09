import {CreateResponseDto, UpdateResponseDto} from "../dto";

export interface ResponseServiceInterface {
    createResponse(createResponseDto: CreateResponseDto);

    updateResponse(id: string, updateResponseDto: UpdateResponseDto);

    getResponseById(id: string);

    getResponses();

    deleteResponseById(id: string);
}