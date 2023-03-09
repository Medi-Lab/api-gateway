import {constants} from "../constants";
import {ClientsModuleOptions, Transport} from "@nestjs/microservices";

export function registerMicroservices(microservicesNames: string[]): ClientsModuleOptions {
    return microservicesNames.map(microservicesName => ({
        name: constants.microservices_names[microservicesName],
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://rabbitmq:5672'],
            queue: constants.microservices_queues[microservicesName],
            queueOptions: {
                durable: true
            },
        }
    }))
}