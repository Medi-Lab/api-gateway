import {Injectable} from '@nestjs/common';
import {AcceptRequestDto, CancelRequestDto} from "../dto";
import {AdminServiceInterface} from "../interfaces/admin.service.interface";

@Injectable()
export class AdminService implements AdminServiceInterface {
    getRequestsToJoinService() {
        return []
    }

    acceptRequestToJoinService(acceptRequestDto: AcceptRequestDto) {
        return acceptRequestDto;
    }

    cancelRequestToJoinService(cancelRequestDto: CancelRequestDto) {
        return cancelRequestDto;
    }
}
