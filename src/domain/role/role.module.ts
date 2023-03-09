import {Module} from '@nestjs/common';
import {RoleController, UsersRoleController} from "./controllers";
import {constants} from "../../core/constants";
import {RoleService, UsersRoleService} from "./services";

@Module({
    controllers: [RoleController, UsersRoleController],
    providers: [
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
export class RoleModule {
}
