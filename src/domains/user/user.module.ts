import {Module} from '@nestjs/common';
import {UserController} from './controllers/user.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {UserService} from "./services/user.service";
import {constants} from "../../core/constants";
import {RoleService} from "./services/role.service";
import {UsersRoleService} from "./services/users-role.service";
import {RoleController} from "./controllers/role.controller";
import {UsersRoleController} from "./controllers/users-role.controller";

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
    controllers: [
        UserController,
        RoleController,
        UsersRoleController
    ],
    providers: [
        {
            provide: constants.tokens.USER_SERVICE_TOKEN,
            useClass: UserService
        },
        {
            provide: constants.tokens.ROLE_SERVICE_TOKEN,
            useClass: RoleService
        },
        {
            provide: constants.tokens.USER_ROLE_SERVICE_TOKEN,
            useClass: UsersRoleService
        }
    ]
})
export class UserModule {
}
