import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateClinicDto, UpdateClinicDto} from "./dto";
import {DefaultParam} from "../../core";
import {constants} from "../../core/constants";
import {ClinicServiceInterface} from "./interfaces/clinic.service.interface";

@ApiTags('Клініка')
@Controller('clinic')
export class ClinicController {
    constructor(
        @Inject(constants.tokens.CLINIC_SERVICE_TOKEN)
        private readonly clinicService: ClinicServiceInterface) {
    }

    @ApiOperation({summary: 'Створити клініку'})
    @ApiResponse({status: 200})
    @Post()
    createClinic(@Body() createClinicDto: CreateClinicDto) {
        return this.clinicService.createClinic(createClinicDto);
    }

    @ApiOperation({summary: 'Обновити клініки'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateClinic(@Param() {id}: DefaultParam, @Body() updateClinicDto: UpdateClinicDto) {
        return this.clinicService.updateClinic(id, updateClinicDto);
    }

    @ApiOperation({summary: 'Отримати клініку'})
    @ApiResponse({status: 200})
    @Get(':id')
    getClinic(@Param() {id}: DefaultParam) {
        return this.clinicService.getClinicById(id);
    }

    @ApiOperation({summary: 'Отримати клініки'})
    @ApiResponse({status: 200})
    @Get()
    getClinics() {
        return this.clinicService.getClinics()
    }

    @ApiOperation({summary: 'Виадлити клініку'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteClinic(@Param() {id}: DefaultParam) {
        return this.clinicService.deleteById(id);
    }
}
