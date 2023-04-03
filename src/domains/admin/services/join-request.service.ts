import {Injectable} from '@nestjs/common';
import {CreateJoinRequestDto} from "../dto";
import {JoinRequestServiceInterface} from "../interfaces";

@Injectable()
export class JoinRequestService implements JoinRequestServiceInterface {
    createRequestToJoinService(createJoinRequestDto: CreateJoinRequestDto) {
        return createJoinRequestDto;
    }

    getJoinRequests() {
        return [];
    }

    deleteJoinRequest(id: string) {
        return id;
    }
}
