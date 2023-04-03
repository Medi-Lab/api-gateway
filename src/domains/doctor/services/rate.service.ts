import {Injectable} from "@nestjs/common";
import {CreateRateDto} from "../dto";
import {RateServiceInterface} from "../interfaces";

@Injectable()
export class RateService implements RateServiceInterface {
    rateDoctor(createRateDto: CreateRateDto) {
        return createRateDto;
    }

    //doctor_id
    getAverageRateOfDoctor(id: string) {
        return id;
    }

    getUserRate(query: any) {
        return query;
    }
}