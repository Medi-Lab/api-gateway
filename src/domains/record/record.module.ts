import {Module} from '@nestjs/common';
import {RecordController} from "./record.controller";
import {RecordService} from "./record.service";
import {constants} from "../../core/constants";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            // ...registerMicroservices(Object.keys(constants.microservices_names)),
            {
                name: constants.microservices_names.record,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: constants.microservices_queues.record,
                    queueOptions: {
                        durable: true
                    },
                }
            }
        ])
    ],
    controllers: [RecordController],
    providers: [
        {
            provide: constants.tokens.RECORD_SERVICE_TOKEN,
            useClass: RecordService
        }
    ]
})
export class RecordModule {
}
