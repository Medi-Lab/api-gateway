import {CreateDoctorsPositionDto, UpdateDoctorsPositionDto} from "../dto";
import {Observable} from "rxjs";

export interface PositionServiceInterface {
    createPosition(createPositionDto: CreateDoctorsPositionDto): Observable<CreateDoctorsPositionDto>;

    updatePosition(id: string, updatePositionDto: UpdateDoctorsPositionDto): Observable<CreateDoctorsPositionDto>;

    getPositionsByJobId(jobId: string): Observable<CreateDoctorsPositionDto[]>;

    deletePositionById(id: string): Observable<CreateDoctorsPositionDto>;
}