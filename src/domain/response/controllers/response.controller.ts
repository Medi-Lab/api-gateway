import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateResponseDto, UpdateResponseDto} from "../dto";
import {DefaultParam} from "../../../core";
import {ResponseServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";

@ApiTags('Відгук')
@Controller('response')
export class ResponseController {
    constructor(
        @Inject(constants.tokens.RESPONSE_SERVICE_TOKEN)
        private readonly responseService: ResponseServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Залишити відгук просто або під відгуком іншої людини'})
    @ApiResponse({status: 200})
    @Post()
    leaveResponse(@Body() createResponseDto: CreateResponseDto) {
        return this.responseService.createResponse(createResponseDto);
    }

    @ApiOperation({summary: 'Отримати відгуки користувачів про лікаря'})
    @ApiResponse({status: 200})
    @Get()
    getResponses() {
        return this.responseService.getResponses();
    }

    @ApiOperation({summary: 'Обновити відгук'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateResponse(@Param() {id}: DefaultParam, @Body() updateResponseDto: UpdateResponseDto) {
        return this.responseService.updateResponse(id, updateResponseDto);
    }

    @ApiOperation({summary: 'Видалити відгук'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteResponse(@Param() {id}: DefaultParam) {
        return this.responseService.deleteResponseById(id);
    }
}
