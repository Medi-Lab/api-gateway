import {Body, Controller, Inject, Post} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UsersRoleServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {AddRoleToUserDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

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
    addRoleToUser(@Body() addRoleToUserDto: AddRoleToUserDto): Observable<ResponseInterface> {
        return this.usersRoleService.addRoleToUser(addRoleToUserDto);
    }
}