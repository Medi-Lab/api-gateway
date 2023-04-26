import {Module} from '@nestjs/common';
import {ReactionToResponseController, ResponseController} from "./controllers";
import {ReactionToResponseService, ResponseService} from "./services";
import {constants} from "../../core/constants";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            // ...registerMicroservices(Object.keys(constants.microservices_names)),
            {
                name: constants.microservices_names.response,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: constants.microservices_queues.response,
                    queueOptions: {
                        durable: true
                    },
                }
            }
        ])
    ],
    controllers: [
        ResponseController,
        ReactionToResponseController
    ],
    providers: [
        {
            provide: constants.tokens.RESPONSE_SERVICE_TOKEN,
            useClass: ResponseService
        },
        {
            useClass: ReactionToResponseService,
            provide: constants.tokens.REACTION_TO_RESPONSE_SERVICE_TOKEN
        }
    ]
})
export class ResponseModule {
}
