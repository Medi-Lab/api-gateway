import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateDoctorDto, UpdateDoctorDto} from "../dto";
import {DefaultParam} from "../../../core";
import {constants} from "../../../core/constants";
import {DoctorServiceInterface} from "../interfaces";
import {Observable} from "rxjs";
import {QueryDb} from "../../../core/decorators/query-db.decorator";

@ApiTags('Лікар')
@Controller('doctor')
export class DoctorController {
    constructor(
        @Inject(constants.tokens.DOCTOR_SERVICE_TOKEN)
        private readonly doctorService: DoctorServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Створити лікаря'})
    @ApiResponse({status: 200})
    @Post()
    createDoctor(@Body() createDoctorDto: CreateDoctorDto): Observable<CreateDoctorDto> {
        return this.doctorService.createDoctor(createDoctorDto);
    }

    @ApiOperation({summary: 'Змінити дані про лікаря'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateDoctor(@Param() {id}: DefaultParam, @Body() updateDoctorDto: UpdateDoctorDto): Observable<CreateDoctorDto> {
        return this.doctorService.updateDoctor(id, updateDoctorDto);
    }

    @ApiOperation({summary: 'Отримати лікаря'})
    @ApiResponse({status: 200})
    @Get(':id')
    getDoctor(@Param() {id}: DefaultParam): Observable<CreateDoctorDto> {
        return this.doctorService.getDoctorById(id);
    }


    @ApiOperation({summary: 'Отримати лікарів'})
    @ApiResponse({status: 200})
    @Get()
    getDoctors(@QueryDb() query): Observable<CreateDoctorDto[]> {
        return this.doctorService.getDoctors(query);
    }

    @ApiOperation({summary: 'Переглянути список лікарів яких я вже відвідував'})
    @ApiResponse({status: 200})
    @Get('visited')
    //TODO user_id request to the records find records by user_id -> get doctors_id(це і є id лікарів, які є твоїми лікарями)
    getMyDoctors(@Param() {id}: DefaultParam): Observable<CreateDoctorDto[]> {
        return this.doctorService.getMyDoctors(id);
    }

    @ApiOperation({summary: 'Видалити лікаря'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteDoctor(@Param() {id}: DefaultParam): Observable<CreateDoctorDto> {
        return this.doctorService.deleteDoctorById(id);
    }
}
