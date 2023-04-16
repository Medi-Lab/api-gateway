import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from "@nestjs/common";
import {constants} from "../../../core/constants";
import {AddSpecializationToDoctorDto, CreateSpecializationDto, UpdateSpecializationToDoctorDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {SpecializationToDoctorServiceInterface} from "../interfaces";
import {DefaultParam} from "../../../core";

@ApiTags('Спціалізація для лікаря')
@Controller('specialization-to-doctor')
export class SpecializationToDoctorController {
    constructor(
        @Inject(constants.tokens.SPECIALIZATION_TO_DOCTOR_SERVICE_TOKEN)
        private readonly specializationToDoctorService: SpecializationToDoctorServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Додати лікарю спеціальність'})
    @ApiResponse({status: 200})
    @Post()
    addSpecializationToDoctor(@Body() addSpecializationToDoctorDto: AddSpecializationToDoctorDto): Observable<ResponseInterface> {
        return this.specializationToDoctorService.addSpecializationToDoctor(addSpecializationToDoctorDto);
    }

    @ApiOperation({summary: 'Змінити лікарю спеціальність'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateSpecializationToDoctor(@Param() {id}: DefaultParam, @Body() updateSpecializationToDoctorDto: UpdateSpecializationToDoctorDto): Observable<ResponseInterface> {
        return this.specializationToDoctorService.updateSpecializationToDoctor(id, updateSpecializationToDoctorDto);
    }

    @ApiOperation({summary: 'Отримати за id лікаря спеціалізації'})
    @ApiResponse({status: 200})
    @Get(':id')
    getDoctorsSpecializations(@Param() {id}: DefaultParam): Observable<ResponseInterface | CreateSpecializationDto[]> {
        return this.specializationToDoctorService.getDoctorsSpecializations(id);
    }

    @ApiOperation({summary: 'Видалити спеціалізації лікаря'})
    @ApiResponse({status: 200})
    @Delete()
    deleteSpecializationToDoctor(@Body() deleteSpecializationToDoctorDto: AddSpecializationToDoctorDto): Observable<ResponseInterface> {
        return this.specializationToDoctorService.deleteSpecializationToDoctor(deleteSpecializationToDoctorDto);
    }
}