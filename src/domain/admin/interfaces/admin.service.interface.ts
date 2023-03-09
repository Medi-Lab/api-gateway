import {AcceptRequestDto, CancelRequestDto} from "../dto";

export interface AdminServiceInterface {
    getRequestsToJoinService();

    acceptRequestToJoinService(acceptRequestDto: AcceptRequestDto);

    cancelRequestToJoinService(cancelRequestDto: CancelRequestDto);
}