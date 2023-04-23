import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateConsultationDto, UpdateConsultationDto} from "../dto";
import {DefaultParam} from "../../../core";
import {constants} from "../../../core/constants";
import {ConsultationServiceInterface} from "../interfaces";
import {Observable} from "rxjs";
import {QueryDb} from "../../../core/decorators/query-db.decorator";

@ApiTags('Консультація в лікаря')
@Controller('consultation')
export class ConsultationController {
    constructor(
        @Inject(constants.tokens.CONSULTATION_SERVICE_TOKEN)
        private readonly consultationService: ConsultationServiceInterface) {
    }

    @ApiOperation({summary: 'Додати консультацію'})
    @ApiResponse({status: 200})
    @Post()
    addConsultation(
        @Body() createConsultationDto: CreateConsultationDto
    ): Observable<CreateConsultationDto> {
        return this.consultationService.createConsultation(createConsultationDto);
    }

    //by doctors id
    @ApiOperation({summary: 'Обновити консультації'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateDoctorsConsultations(
        @Param() {id}: DefaultParam,
        @Body() updateConsultationDto: UpdateConsultationDto
    ): Observable<CreateConsultationDto> {
        return this.consultationService.updateConsultation(id, updateConsultationDto);
    }

    //by doctors id
    @ApiOperation({summary: 'Отримати консультації'})
    @ApiResponse({status: 200})
    @Get(':id')
    getDoctorsConsultations(
        @Param() {id}: DefaultParam
    ): Observable<CreateConsultationDto> {
        return this.consultationService.getDoctorsConsultationsById(id);
    }

    @ApiOperation({summary: 'Отримати конслультації'})
    @ApiResponse({status: 200})
    @Get()
    getConsultations(
        @QueryDb() query
    ): Observable<CreateConsultationDto[]> {
        return this.consultationService.getConsultations(query);
    }

    //by doctors id
    @ApiOperation({summary: 'Видалити консультації'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteDoctorsConsultation(
        @Param() {id}: DefaultParam
    ): Observable<CreateConsultationDto> {
        return this.consultationService.deleteConsultationById(id);
    }
}
