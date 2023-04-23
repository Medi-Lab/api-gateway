import {Inject, Injectable} from "@nestjs/common";
import {PositionServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {CreateDoctorsPositionDto, UpdateDoctorsPositionDto} from "../dto";
import {catchError, map, Observable, of} from "rxjs";

@Injectable()
export class PositionService implements PositionServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    createPosition(
        createPositionDto: CreateDoctorsPositionDto
    ): Observable<CreateDoctorsPositionDto> {
        return this.doctorClient
            .send('create_position', createPositionDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updatePosition(
        id: string,
        updatePositionDto: UpdateDoctorsPositionDto
    ): Observable<CreateDoctorsPositionDto> {
        return this.doctorClient
            .send('update_position', {id: Number(id), data: updatePositionDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getPositionsByJobId(jobId: string): Observable<CreateDoctorsPositionDto[]> {
        return this.doctorClient
            .send('get_positions_by_job_id', Number(jobId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deletePositionById(id: string): Observable<CreateDoctorsPositionDto> {
        return this.doctorClient
            .send('delete_position_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}