import {CreateJoinRequestDto} from "../dto";

export interface JoinRequestServiceInterface {
    createRequestToJoinService(createJoinRequestDto: CreateJoinRequestDto);

    getJoinRequests();

    deleteJoinRequest(id: string);
}