import {CreateDoctorsPositionDto, UpdateDoctorsPositionDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface PositionServiceInterface {
    createPosition(createPositionDto: CreateDoctorsPositionDto): Observable<ResponseInterface | CreateDoctorsPositionDto>;

    updatePosition(id: string, updatePositionDto: UpdateDoctorsPositionDto): Observable<ResponseInterface | CreateDoctorsPositionDto>;

    getPositionsByJobId(jobId: string): Observable<CreateDoctorsPositionDto[]>;

    deletePositionById(id: string): Observable<ResponseInterface | CreateDoctorsPositionDto>;
}