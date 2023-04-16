import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateClinicDto, UpdateClinicDto} from "./dto";
import {DefaultParam} from "../../core";
import {constants} from "../../core/constants";
import {ClinicServiceInterface} from "./interfaces/clinic.service.interface";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../core/error/response.interface";
import {QueryDb} from "../../core/decorators/query-db.decorator";

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
    createClinic(@Body() createClinicDto: CreateClinicDto): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicService.createClinic(createClinicDto);
    }

    @ApiOperation({summary: 'Обновити клініки'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateClinic(@Param() {id}: DefaultParam, @Body() updateClinicDto: UpdateClinicDto): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicService.updateClinic(id, updateClinicDto);
    }

    @ApiOperation({summary: 'Отримати клініку'})
    @ApiResponse({status: 200})
    @Get(':id')
    getClinic(@Param() {id}: DefaultParam): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicService.getClinicById(id);
    }

    @ApiOperation({summary: 'Отримати клініки'})
    @ApiResponse({status: 200})
    @Get()
    getClinics(@QueryDb() query): Observable<CreateClinicDto[]> {
        return this.clinicService.getClinics(query);
    }

    @ApiOperation({summary: 'Виадлити клініку'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteClinic(@Param() {id}: DefaultParam): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicService.deleteClinicById(id);
    }
}
