import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {constants} from "../../../core/constants";
import {JobServiceInterface} from "../interfaces";
import {CreateJobDto, UpdateJobDto} from "../dto";
import {Observable} from "rxjs";
import {DefaultParam} from "../../../core";

@ApiTags('Робота')
@Controller('job')
export class JobController {
    constructor(
        @Inject(constants.tokens.JOB_SERVICE_TOKEN)
        private readonly jobService: JobServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Створити роботу'})
    @ApiResponse({status: 200})
    @Post()
    createJob(
        @Body() createJobDto: CreateJobDto
    ): Observable<CreateJobDto> {
        return this.jobService.createJob(createJobDto);
    }

    @ApiOperation({summary: 'Змінити дані про роботу'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateJob(
        @Param() {id}: DefaultParam,
        @Body() updateJobDto: UpdateJobDto
    ): Observable<CreateJobDto> {
        return this.jobService.updateJob(id, updateJobDto);
    }

    @ApiOperation({summary: 'Отримати роботи лікаря'})
    @ApiResponse({status: 200})
    @Get(':id')
    getDoctorsJobs(@Param() {id}: DefaultParam): Observable<CreateJobDto[]> {
        return this.jobService.getDoctorsJobs(id);
    }

    @ApiOperation({summary: 'Видалити роботу'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteJobById(@Param() {id}: DefaultParam): Observable<CreateJobDto> {
        return this.jobService.deleteJobById(id);
    }
}