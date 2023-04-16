import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query} from "@nestjs/common";
import {constants} from "../../../core/constants";
import {
    AddDoctorToClinicDto,
    CreateDoctorDto,
    QueryParamsToChangeDoctorsClinicDto,
    UpdateDoctorToClinicDto
} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {DefaultParam} from "../../../core";
import {CreateClinicDto} from "../../clinic/dto";
import {ClinicServiceInterface} from "../interfaces";

@ApiTags('Додати лікарів до клініки')
@Controller('add-doctor-to-clinic')
export class ClinicController {
    constructor(
        @Inject(constants.tokens.ADD_DOCTOR_TO_CLINIC_SERVICE_TOKEN)
        private readonly clinicService: ClinicServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Додати лікаря до клініки'})
    @ApiResponse({status: 200})
    @Post()
    addDoctorToClinic(@Body() addDoctorToClinicDto: AddDoctorToClinicDto): Observable<ResponseInterface> {
        return this.clinicService.addDoctorToClinic(addDoctorToClinicDto);
    }

    @ApiOperation({summary: 'Змінити клінку лікаря'})
    @ApiResponse({status: 200})
    @Patch()
    changeDoctorsClinicConnection(
        @Query() query: QueryParamsToChangeDoctorsClinicDto,
        @Body() updateDoctorToClinicDto: UpdateDoctorToClinicDto
    ): Observable<ResponseInterface> {
        return this.clinicService.changeDoctorsClinicConnection(query, updateDoctorToClinicDto);
    }

    @ApiOperation({summary: 'Отримати клінки в яких працює лікар за id лікаря'})
    @ApiResponse({status: 200})
    @Get('doctor/:id')
    getClinicsInWhichDoctorWork(@Param() {id}: DefaultParam): Observable<CreateClinicDto[]> {
        return this.clinicService.getClinicsInWhichDoctorWork(id);
    }

    @ApiOperation({summary: 'Отримати лікарів які працюють в клініці за id клініки'})
    @ApiResponse({status: 200})
    @Get('clinic/:id')
    getDoctorsWhichWorkOnTheClinic(@Param() {id}: DefaultParam): Observable<CreateDoctorDto[]> {
        return this.clinicService.getDoctorsWhichWorkOnTheClinic(id);
    }

    @ApiOperation({summary: 'Видалити клініку в якій працює лікар'})
    @ApiResponse({status: 200})
    @Delete(':id')
    removeDoctorFromClinic(@Param() {id}: DefaultParam): Observable<ResponseInterface> {
        return this.clinicService.removeDoctorFromClinic(id);
    }
}