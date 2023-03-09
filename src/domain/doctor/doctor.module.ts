import {Module} from '@nestjs/common';
import {
    ConsultationController,
    DoctorController,
    RateController,
    RecommendationController,
    SpecializationController,
} from "./controllers";
import {
    ConsultationService,
    DoctorService,
    RateService,
    RecommendationService,
    SpecializationService,
    WorkTimeService
} from "./services";
import {constants} from "../../core/constants";

@Module({
    controllers: [
        DoctorController,
        RecommendationController,
        ConsultationController,
        RateController,
        SpecializationController
    ],
    providers: [
        {
            provide: constants.tokens.DOCTOR_SERVICE_TOKEN,
            useClass: DoctorService
        },
        {
            provide: constants.tokens.RECOMMENDATION_SERVICE_TOKEN,
            useClass: RecommendationService
        },
        {
            provide: constants.tokens.CONSULTATION_SERVICE_TOKEN,
            useClass: ConsultationService
        },
        {
            provide: constants.tokens.WORK_TIME_SERVICE_TOKEN,
            useClass: WorkTimeService
        },
        {
            provide: constants.tokens.RATE_SERVICE_TOKEN,
            useClass: RateService
        },
        {
            provide: constants.tokens.SPECIALIZATION_SERVICE_TOKEN,
            useClass: SpecializationService
        }
    ]
})
export class DoctorModule {
}
