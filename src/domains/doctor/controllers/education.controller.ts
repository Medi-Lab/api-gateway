import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from "@nestjs/common";
import {constants} from "../../../core/constants";
import {EducationServiceInterface} from "../interfaces";
import {AddDoctorsEducationDto, UpdateDoctorsEducationDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {DefaultParam} from "../../../core";

@ApiTags('Навчання')
@Controller('education')
export class EducationController {
    constructor(
        @Inject(constants.tokens.EDUCATION_SERVICE_TOKEN)
        private readonly educationService: EducationServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Створити місці навчання'})
    @ApiResponse({status: 200})
    @Post()
    createEducation(@Body() createEducationDto: AddDoctorsEducationDto): Observable<ResponseInterface | AddDoctorsEducationDto> {
        return this.educationService.createEducation(createEducationDto);
    }

    @ApiOperation({summary: 'Змінити дані про місце навчання'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateEducation(@Param() {id}: DefaultParam, @Body() updateEducationDto: UpdateDoctorsEducationDto): Observable<ResponseInterface | AddDoctorsEducationDto> {
        return this.educationService.updateEducation(id, updateEducationDto);
    }


    @ApiOperation({summary: 'Отримати місце навчання за id лікаря'})
    @ApiResponse({status: 200})
    @Get(':id')
    getEducationsByDoctorId(@Param() {id}: DefaultParam): Observable<AddDoctorsEducationDto[]> {
        return this.educationService.getEducationsByDoctorId(id);
    }

    @ApiOperation({summary: 'Видалити місце навчання'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteEducationById(@Param() {id}: DefaultParam): Observable<ResponseInterface | AddDoctorsEducationDto> {
        return this.educationService.deleteEducationById(id);
    }
}