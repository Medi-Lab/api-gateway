import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateRecordDto, UpdateRecordDto} from "./dto";
import {DefaultParam} from "../../core";
import {constants} from "../../core/constants";
import {RecordServiceInterface} from "./interfaces/record.service.interface";
import {Observable} from "rxjs";
import {QueryDb} from "../../core/decorators/query-db.decorator";

@ApiTags('Запис')
@Controller('record')
export class RecordController {
    constructor(
        @Inject(constants.tokens.RECORD_SERVICE_TOKEN)
        private readonly recordService: RecordServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Запис на прийом до лікаря'})
    @ApiResponse({status: 200})
    @Post()
    addRecordToDoctor(@Body() createRecordDto: CreateRecordDto): Observable<CreateRecordDto> {
        return this.recordService.createRecord(createRecordDto);
    }

    @ApiOperation({summary: 'Змінити запис тим чи іншим чином'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateRecord(
        @Param() {id}: DefaultParam,
        @Body() updateRecordDto: UpdateRecordDto
    ): Observable<CreateRecordDto> {
        return this.recordService.updateRecord(id, updateRecordDto);
    }

    // Подивитись на яку годину консультація(з якої по яку)
    @ApiOperation({summary: 'Отримати запис в тій чи іншій формі, за різними умовами'})
    @ApiResponse({status: 200})
    @Get(':id')
    getRecord(@Param() {id}: DefaultParam): Observable<CreateRecordDto> {
        return this.recordService.getRecordById(id);
    }

    // Подивитись історію всіх консультацій
    @ApiOperation({summary: 'Отримати записи в тій чи іншій формі, за різними умовами'})
    @ApiResponse({status: 200})
    @Get()
    getRecords(@QueryDb() query): Observable<CreateRecordDto[]> {
        return this.recordService.getRecords(query);
    }

    @ApiOperation({summary: 'Видалити запис'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteRecord(@Param() {id}: DefaultParam): Observable<CreateRecordDto> {
        return this.recordService.deleteRecordById(id);
    }
}
