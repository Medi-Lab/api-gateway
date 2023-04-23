import {Inject, Injectable} from "@nestjs/common";
import {CreateRateDto, GetUserRateDto} from "../dto";
import {RateServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@Injectable()
export class RateService implements RateServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    rateDoctor(createRateDto: CreateRateDto): Observable<CreateRateDto> {
        return this.doctorClient
            .send('rate', createRateDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getAverageRateOfDoctor(id: string): Observable<ResponseInterface> {
        return this.doctorClient
            .send('get_average_rate_of_doctor', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getUserRate(query: GetUserRateDto): Observable<CreateRateDto> {
        return this.doctorClient
            .send('get_user_rate', {userId: Number(query.userId), doctorId: Number(query.doctorId)})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}