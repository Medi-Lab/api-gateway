import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from "@nestjs/common";
import {CreateSpecializationDto, UpdateSpecializationDto} from "../dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {DefaultParam} from "../../../core";
import {SpecializationServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";

@Controller('specialization')
export class SpecializationController {
    constructor(
        @Inject(constants.tokens.SPECIALIZATION_SERVICE_TOKEN)
        private readonly specializationService: SpecializationServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Створити спеціалізацію'})
    @ApiResponse({status: 200})
    @Post()
    createSpecialization(@Body() createSpecializationDto: CreateSpecializationDto) {
        return this.specializationService.createSpecialization(createSpecializationDto);
    }

    @ApiOperation({summary: 'Редагувати спеціалізацію'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateSpecialization(@Param() {id}: DefaultParam, @Body() updateSpecializationDto: UpdateSpecializationDto) {
        return this.specializationService.updateSpecialization(id, updateSpecializationDto);
    }

    @ApiOperation({summary: 'Отримати спеціалізацію'})
    @ApiResponse({status: 200})
    @Get(':id')
    getSpecialization(@Param() {id}: DefaultParam) {
        return this.specializationService.getSpecializationById(id);
    }

    @ApiOperation({summary: 'Отримати спеціалізації'})
    @ApiResponse({status: 200})
    @Get()
    getSpecializations() {
        return this.specializationService.getSpecializations();
    }

    @ApiOperation({summary: 'Видалити спеціалізацію'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteSpecialization(@Param() {id}: DefaultParam) {
        return this.specializationService.deleteSpecializationById(id);
    }
}