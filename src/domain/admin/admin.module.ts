import {Module} from '@nestjs/common';
import {BlockingController} from "./controllers/blocking.controller";
import {JoinRequestController} from "./controllers/join-request.controller";
import {BlockingService} from "./services/blocking.service";
import {JoinRequestService} from "./services/join-request.service";
import {AdminService} from "./services/admin.service";
import {AdminController} from "./controllers/admin.controller";
import {constants} from "../../core/constants";

@Module({
    controllers: [
        AdminController,
        BlockingController,
        JoinRequestController
    ],
    providers: [
        {
            provide: constants.tokens.ADMIN_SERVICE_TOKEN,
            useClass: AdminService
        },
        {
            provide: constants.tokens.BLOCKING_SERVICE_TOKEN,
            useClass: BlockingService
        },
        {
            provide: constants.tokens.JOIN_REQUEST_SERVICE_TOKEN,
            useClass: JoinRequestService
        }
    ]
})
export class AdminModule {
}
