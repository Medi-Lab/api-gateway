import {Module} from '@nestjs/common';
import {RecordController} from "./record.controller";
import {RecordService} from "./record.service";
import {constants} from "../../core/constants";

@Module({
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
