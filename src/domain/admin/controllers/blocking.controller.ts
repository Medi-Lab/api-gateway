import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {BlockUserDto, UnblockUserDto} from "../dto";
import {constants} from "../../../core/constants";
import {BlockingServiceInterface} from "../interfaces";

@ApiTags('Блокування користувача')
@Controller('blocking')
export class BlockingController {
    constructor(
        @Inject(constants.tokens.BLOCKING_SERVICE_TOKEN)
        private readonly blockingService: BlockingServiceInterface) {
    }

    @ApiOperation({summary: 'Заблокувати користувача'})
    @ApiResponse({status: 200})
    @Post('block')
    blockUser(@Body() blockUserDto: BlockUserDto) {
        return this.blockingService.blockUser(blockUserDto);
    }

    @ApiOperation({summary: 'Розблокувати користувача'})
    @ApiResponse({status: 200})
    @Post('unblock')
    unblockUser(@Body() unblockUserDto: UnblockUserDto) {
        return this.blockingService.unblockUser(unblockUserDto);
    }

    @ApiOperation({summary: 'Отримати заблокованих користувачів'})
    @ApiResponse({status: 200})
    @Get()
    getBlockedUsers() {
        return this.blockingService.getBlockedUsers();
    }
}
