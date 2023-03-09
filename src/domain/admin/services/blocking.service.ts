import {Injectable} from '@nestjs/common';
import {BlockUserDto, UnblockUserDto} from "../dto";
import {BlockingServiceInterface} from "../interfaces";

@Injectable()
export class BlockingService implements BlockingServiceInterface {
    blockUser(blockUserDto: BlockUserDto) {
        return blockUserDto;
    }


    unblockUser(unblockUserDto: UnblockUserDto) {
        return unblockUserDto;
    }

    getBlockedUsers() {
        return [];
    }
}
