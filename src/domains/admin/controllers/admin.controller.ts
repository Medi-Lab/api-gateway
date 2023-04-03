import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AcceptRequestDto, CancelRequestDto} from "../dto";
import {constants} from "../../../core/constants";
import {AdminServiceInterface} from "../interfaces/admin.service.interface";

@ApiTags('Адміністрування')
@Controller('admin')
export class AdminController {
    constructor(
        @Inject(constants.tokens.ADMIN_SERVICE_TOKEN)
        private readonly adminService: AdminServiceInterface) {
    }

    @ApiOperation({summary: 'Отримати запити на реєстрацію як лікар в сервісі'})
    @ApiResponse({status: 200})
    @Get()
    getRequestsToJoinService() {
        return this.adminService.getRequestsToJoinService();
    }

    @ApiOperation({summary: 'Прийняти запит на реєстрацію в сервісі'})
    @ApiResponse({status: 200})
    @Post('accept')
    acceptRequestToJoinService(@Body() acceptRequestDto: AcceptRequestDto) {
        return this.adminService.acceptRequestToJoinService(acceptRequestDto);
    }

    @ApiOperation({summary: 'Відхилити запит на реєстрацію в сервісі'})
    @ApiResponse({status: 200})
    @Post('reject')
    cancelRequestToJoinService(@Body() cancelRequestDto: CancelRequestDto) {
        return this.adminService.cancelRequestToJoinService(cancelRequestDto);
    }
}
