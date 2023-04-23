import {CreateRateDto, GetUserRateDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface RateServiceInterface {
    rateDoctor(createRateDto: CreateRateDto): Observable<CreateRateDto>;

    getAverageRateOfDoctor(id: string): Observable<ResponseInterface>;

    getUserRate(query: GetUserRateDto): Observable<CreateRateDto>;
}