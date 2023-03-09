import {Controller, Inject, Post} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AddRoleToUserDto} from "../dto";
import {UsersRoleServiceInterface} from "../interfaces/users-role.service.interface";
import {constants} from "../../../core/constants";

@ApiTags('Додати роль до користувача')
@Controller('role-user')
export class UsersRoleController {
    constructor(
        @Inject(constants.tokens.USER_ROLE_SERVICE_TOKEN)
        private readonly usersRoleService: UsersRoleServiceInterface
    ) {
    }

    @ApiOperation({summary: 'Додати роль до користувача'})
    @ApiResponse({status: 200})
    @Post()
    addRoleToUser(addRoleToUserDto: AddRoleToUserDto) {
        return this.usersRoleService.addRoleToUser(addRoleToUserDto);
    }
}