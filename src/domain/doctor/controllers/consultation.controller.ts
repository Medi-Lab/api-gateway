import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateConsultationDto, UpdateConsultationDto} from "../dto";
import {DefaultParam} from "../../../core";
import {constants} from "../../../core/constants";
import {ConsultationServiceInterface} from "../interfaces";

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
    addConsultation(@Body() createConsultationDto: CreateConsultationDto) {
        return this.consultationService.createConsultation(createConsultationDto);
    }

    //by doctors id
    @ApiOperation({summary: 'Обновити консультації'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateDoctorsConsultations(@Param() {id}: DefaultParam, @Body() updateConsultationDto: UpdateConsultationDto) {
        return this.consultationService.updateConsultation(id, updateConsultationDto);
    }

    @ApiOperation({summary: 'Отримати конслультації'})
    @ApiResponse({status: 200})
    @Get()
    getConsultations() {
        return this.consultationService.getConsultations();
    }

    //by doctors id
    @ApiOperation({summary: 'Отримати консультації'})
    @ApiResponse({status: 200})
    @Get(':id')
    getDoctorsConsultations(@Param() {id}: DefaultParam) {
        return this.consultationService.getConsultationById(id);
    }

    //by doctors id
    @ApiOperation({summary: 'Видалити консультації'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteDoctorsConsultation(@Param() {id}: DefaultParam) {
        return this.consultationService.deleteConsultationById(id);
    }
}
