import {CreateJobDto, UpdateJobDto} from "../dto";
import {Observable} from "rxjs";

export interface JobServiceInterface {
    createJob(createJobDto: CreateJobDto): Observable<CreateJobDto>;

    updateJob(id: string, updateJobDto: UpdateJobDto): Observable<CreateJobDto>;

    getDoctorsJobs(doctorId: string): Observable<CreateJobDto[]>;

    deleteJobById(id: string): Observable<CreateJobDto>;
}