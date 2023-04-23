import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from "@nestjs/common";
import {constants} from "../../../core/constants";
import {PositionServiceInterface} from "../interfaces";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Observable} from "rxjs";
import {CreateDoctorsPositionDto, UpdateDoctorsPositionDto} from "../dto";
import {DefaultParam} from "../../../core";

@ApiTags('Посада')
@Controller('position')
export class PositionController {
    constructor(
        @Inject(constants.tokens.POSITION_SERVICE_TOKEN)
        private readonly positionService: PositionServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Створити посаду'})
    @ApiResponse({status: 200})
    @Post()
    createPosition(
        @Body() createPositionDto: CreateDoctorsPositionDto
    ): Observable<CreateDoctorsPositionDto> {
        return this.positionService.createPosition(createPositionDto);
    }

    @ApiOperation({summary: 'Змінити дані про посаду'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updatePosition(
        @Param() {id}: DefaultParam,
        @Body() updatePositionDto: UpdateDoctorsPositionDto
    ): Observable<CreateDoctorsPositionDto> {
        return this.positionService.updatePosition(id, updatePositionDto);
    }

    @ApiOperation({summary: 'Отримати посаду за id роботи'})
    @ApiResponse({status: 200})
    @Get(':id')
    getPositionsByJobId(@Param() {id}: DefaultParam): Observable<CreateDoctorsPositionDto[]> {
        return this.positionService.getPositionsByJobId(id);
    }

    @ApiOperation({summary: 'Видалити посаду'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deletePositionById(@Param() {id}: DefaultParam): Observable<CreateDoctorsPositionDto> {
        return this.positionService.deletePositionById(id);
    }
}