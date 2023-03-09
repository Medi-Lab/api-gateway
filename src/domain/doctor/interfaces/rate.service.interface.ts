import {CreateRateDto} from "../dto";

export interface RateServiceInterface {
    rateDoctor(createRateDto: CreateRateDto);

    getAverageRateOfDoctor(id: string);

    getUserRate(query: any);
}