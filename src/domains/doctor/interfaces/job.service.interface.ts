import {CreateJobDto, UpdateJobDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface JobServiceInterface {
    createJob(createJobDto: CreateJobDto): Observable<ResponseInterface | CreateJobDto>;

    updateJob(id: string, updateJobDto: UpdateJobDto): Observable<ResponseInterface | CreateJobDto>;

    getDoctorsJobs(doctorId: string): Observable<CreateJobDto[]>;

    deleteJobById(id: string): Observable<ResponseInterface | CreateJobDto>;
}