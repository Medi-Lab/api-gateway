import {Module} from '@nestjs/common';
import {ClinicController} from './clinic.controller';
import {ClinicService} from './clinic.service';
import {constants} from "../../core/constants";

@Module({
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
