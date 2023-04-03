import {BlockUserDto, UnblockUserDto} from "../dto";

export interface BlockingServiceInterface {
    blockUser(blockUserDto: BlockUserDto);

    unblockUser(unblockUserDto: UnblockUserDto);

    getBlockedUsers();
}