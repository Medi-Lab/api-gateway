import {Inject, Injectable} from "@nestjs/common";
import {RecommendationServiceInterface} from "../interfaces";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {CreateDoctorDto} from "../dto";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class RecommendationService implements RecommendationServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    getRecommendedDoctor(id: string, query: any): Observable<ResponseInterface | CreateDoctorDto> {
        return this.doctorClient
            .send('get_recommended_doctor', {id: Number(id), query})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getRecommendationList(userId: string): Observable<ResponseInterface | CreateDoctorDto[]> {
        return this.doctorClient
            .send('get_recommendation_list', Number(userId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}