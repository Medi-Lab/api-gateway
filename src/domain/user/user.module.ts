import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {UserService} from "./user.service";
import {constants} from "../../core/constants";

@Module({
    imports: [
        ClientsModule.register([
            // ...registerMicroservices(Object.keys(constants.microservices_names)),
            {
                name: constants.microservices_names.user,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://rabbitmq:5672'],
                    queue: constants.microservices_queues.user,
                    queueOptions: {
                        durable: true
                    },
                }
            }
        ])
    ],
    controllers: [UserController],
    providers: [
        {
            provide: constants.tokens.USER_SERVICE_TOKEN,
            useClass: UserService
        }
    ]
})
export class UserModule {
}
