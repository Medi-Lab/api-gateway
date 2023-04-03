import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {constants} from "../../core/constants";

@Module({
    controllers: [AuthController],
    providers: [
        {
            provide: constants.tokens.AUTH_SERVICE_TOKEN,
            useClass: AuthService
        }
    ]
})
export class AuthModule {
}
