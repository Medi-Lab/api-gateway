import {Module} from '@nestjs/common';
import {ReactionToResponseController, ResponseController} from "./controllers";
import {ReactionToResponseService, ResponseService} from "./services";
import {constants} from "../../core/constants";

@Module({
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
