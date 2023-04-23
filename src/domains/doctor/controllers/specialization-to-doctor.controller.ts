import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query} from "@nestjs/common";
import {constants} from "../../../core/constants";
import {
    AddSpecializationToDoctorDto,
    CreateSpecializationDto,
    SpecializationToDoctorDto,
    UpdateSpecializationToDoctorDto
} from "../dto";
import {Observable} from "rxjs";
import {SpecializationToDoctorServiceInterface} from "../interfaces";
import {DefaultParam} from "../../../core";

@ApiTags('Спеціалізація для лікаря')
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
    addSpecializationToDoctor(
        @Body() addSpecializationToDoctorDto: AddSpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto> {
        return this.specializationToDoctorService.addSpecializationToDoctor(addSpecializationToDoctorDto);
    }

    @ApiOperation({summary: 'Змінити лікарю спеціальність'})
    @ApiResponse({status: 200})
    @Patch()
    updateSpecializationToDoctor(
        @Query() querySpecializationToDoctor: SpecializationToDoctorDto,
        @Body() updateSpecializationToDoctorDto: UpdateSpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto> {
        return this.specializationToDoctorService.updateSpecializationToDoctor(
            querySpecializationToDoctor,
            updateSpecializationToDoctorDto
        );
    }

    @ApiOperation({summary: 'Отримати за id лікаря спеціалізації'})
    @ApiResponse({status: 200})
    @Get(':id')
    getDoctorsSpecializations(@Param() {id}: DefaultParam): Observable<CreateSpecializationDto[]> {
        return this.specializationToDoctorService.getDoctorsSpecializations(id);
    }

    @ApiOperation({summary: 'Видалити спеціалізації лікаря'})
    @ApiResponse({status: 200})
    @Delete()
    deleteSpecializationToDoctor(
        @Query() deleteSpecializationToDoctorDto: SpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto> {
        return this.specializationToDoctorService.deleteSpecializationToDoctor(deleteSpecializationToDoctorDto);
    }
}