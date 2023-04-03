import {Controller, Delete, Get, Inject, Patch, Post} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {constants} from "../../../core/constants";
import {WorkTimeServiceInterface} from "../interfaces";

@ApiTags('Робочі дні лікаря')
@Controller('/work-time')
export class WorkTimeController {
    constructor(
        @Inject(constants.tokens.WORK_TIME_SERVICE_TOKEN)
        private readonly workTimeService: WorkTimeServiceInterface
    ) {
    }

    // зробити час по дефолту
    @ApiOperation({summary: 'Додати робочий час лікарю'})
    @ApiResponse({status: 200})
    @Post()
    addWorkTime() {

    }

    //by doctors id
    @ApiOperation({summary: 'Отримати робочий час лікаря'})
    @ApiResponse({status: 200})
    @Get(':id')
    getDoctorWorkTime() {

    }

    //by doctors id
    @ApiOperation({summary: 'Обновити робочий час лікаря'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateDoctorsWorkTime() {

    }

    //by doctors id
    @ApiOperation({summary: 'Видалити робочий час лікаря'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteDoctorsWorkTime() {

    }
}