import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {CreateDoctorDto} from "../dto";

export interface RecommendationServiceInterface {
    getRecommendedDoctor(id: string, query: any): Observable<ResponseInterface | CreateDoctorDto>;

    getRecommendationList(userId: string): Observable<ResponseInterface | CreateDoctorDto[]>;
}