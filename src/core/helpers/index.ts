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

export const formOrderBy = (orderItem) => {
    const [isDirectionOrItem, item] = orderItem.split('-');
    if (isDirectionOrItem === '') {
        return {
            [item]: 'desc'
        }
    }
    return {
        [isDirectionOrItem]: 'asc'
    }
}

export const transformToArray = (someStringArray) => {
    return someStringArray
        .slice(1, someStringArray.length - 1)
        .replaceAll(' ', '')
        .split(',');
}

export const convertToObjectWithNumbers = (object) => {
    const resultObject = {};
    let parsedFields = Object.entries(object);

    parsedFields.forEach(item =>
        resultObject[item[0]] = isNaN(Number(item[1])) ? item[1] : Number(item[1])
    );
    return resultObject;
}