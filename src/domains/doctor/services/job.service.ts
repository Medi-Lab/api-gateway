import {JobServiceInterface} from "../interfaces";
import {Inject, Injectable} from "@nestjs/common";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {CreateJobDto, UpdateJobDto} from "../dto";
import {catchError, map, Observable, of} from "rxjs";

@Injectable()
export class JobService implements JobServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    createJob(createJobDto: CreateJobDto): Observable<CreateJobDto> {
        return this.doctorClient
            .send('create_job', createJobDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateJob(id: string, updateJobDto: UpdateJobDto): Observable<CreateJobDto> {
        return this.doctorClient
            .send('update_job', {id: Number(id), data: updateJobDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getDoctorsJobs(doctorId: string): Observable<CreateJobDto[]> {
        return this.doctorClient
            .send('get_doctor_jobs', Number(doctorId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteJobById(id: string): Observable<CreateJobDto> {
        return this.doctorClient
            .send('delete_job_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}