import {Module} from '@nestjs/common';
import {
    ConsultationController,
    DoctorController,
    DoctorToClinicController,
    EducationController,
    JobController,
    PositionController,
    RateController,
    RecommendationController,
    SpecializationController,
    SpecializationToDoctorController,
} from "./controllers";
import {
    ClinicService,
    ConsultationService,
    DoctorService,
    EducationService,
    JobService,
    PositionService,
    RateService,
    RecommendationService,
    SpecializationService,
    SpecializationToDoctorService,
} from "./services";
import {constants} from "../../core/constants";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            // ...registerMicroservices(Object.keys(constants.microservices_names)),
            {
                name: constants.microservices_names.doctor,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: constants.microservices_queues.doctor,
                    queueOptions: {
                        durable: true
                    },
                }
            }
        ])
    ],
    controllers: [
        DoctorController,
        RecommendationController,
        ConsultationController,
        RateController,
        SpecializationController,
        DoctorToClinicController,
        EducationController,
        JobController,
        PositionController,
        SpecializationToDoctorController
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
            provide: constants.tokens.RATE_SERVICE_TOKEN,
            useClass: RateService
        },
        {
            provide: constants.tokens.SPECIALIZATION_SERVICE_TOKEN,
            useClass: SpecializationService
        },
        {
            provide: constants.tokens.ADD_DOCTOR_TO_CLINIC_SERVICE_TOKEN,
            useClass: ClinicService
        },
        {
            provide: constants.tokens.EDUCATION_SERVICE_TOKEN,
            useClass: EducationService
        },
        {
            provide: constants.tokens.JOB_SERVICE_TOKEN,
            useClass: JobService
        },
        {
            provide: constants.tokens.POSITION_SERVICE_TOKEN,
            useClass: PositionService
        },
        {
            provide: constants.tokens.SPECIALIZATION_TO_DOCTOR_SERVICE_TOKEN,
            useClass: SpecializationToDoctorService
        }
    ]
})
export class DoctorModule {
}
