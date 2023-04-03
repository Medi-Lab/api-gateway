import {Injectable} from '@nestjs/common';
import {CreateResponseDto, UpdateResponseDto} from "../dto";
import {ResponseServiceInterface} from "../interfaces";

@Injectable()
export class ResponseService implements ResponseServiceInterface {
    createResponse(createResponseDto: CreateResponseDto) {
        return createResponseDto;
    }

    updateResponse(id: string, updateResponseDto: UpdateResponseDto) {
        return {id, updateResponseDto}
    }

    getResponseById(id: string) {
        return id;
    }

    getResponses() {
        return []
    }

    deleteResponseById(id: string) {
        return id;
    }

}
