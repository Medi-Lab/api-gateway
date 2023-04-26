import {Module} from '@nestjs/common';
import {ClinicController} from './clinic.controller';
import {ClinicService} from './clinic.service';
import {constants} from "../../core/constants";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            // ...registerMicroservices(Object.keys(constants.microservices_names)),
            {
                name: constants.microservices_names.clinic,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: constants.microservices_queues.clinic,
                    queueOptions: {
                        durable: true
                    },
                }
            }
        ])
    ],
    controllers: [ClinicController],
    providers: [
        {
            provide: constants.tokens.CLINIC_SERVICE_TOKEN,
            useClass: ClinicService
        }
    ]
})
export class ClinicModule {
}
