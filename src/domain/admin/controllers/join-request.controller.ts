import {Body, Controller, Delete, Get, Inject, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {DefaultParam} from "../../../core";
import {CreateJoinRequestDto} from "../dto";
import {constants} from "../../../core/constants";
import {JoinRequestServiceInterface} from "../interfaces";

@ApiTags('Приєднатись до сервіса лікарю')
@Controller('join-request')
export class JoinRequestController {
    constructor(
        @Inject(constants.tokens.JOIN_REQUEST_SERVICE_TOKEN)
        private readonly joinRequestService: JoinRequestServiceInterface) {
    }

    @ApiOperation({summary: 'Відправити запит на реєстрацію в сервісі'})
    @ApiResponse({status: 200})
    @Post()
    sendRequestToJoinService(@Body() createJoinRequestDto: CreateJoinRequestDto) {
        return this.joinRequestService.createRequestToJoinService(createJoinRequestDto);
    }

    @ApiOperation({summary: 'Отримати запити на включення в сервіс'})
    @ApiResponse({status: 200})
    @Get()
    getJoinRequests() {
        return this.joinRequestService.getJoinRequests();
    }

    @ApiOperation({summary: 'Видалити запит на реєстрацію в сервісі'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteRequestToJoinService(@Param() {id}: DefaultParam) {
        return this.joinRequestService.deleteJoinRequest(id);
    }
}
