import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {DefaultParam} from "../../../core";
import {constants} from "../../../core/constants";
import {RoleService} from "../services/role.service";
import {CreateRoleDto, UpdateRoleDto} from "../dto";
import {QueryDb} from "../../../core/decorators/query-db.decorator";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@ApiTags('Роль')
@Controller('role')
export class RoleController {
    constructor(
        @Inject(constants.tokens.ROLE_SERVICE_TOKEN)
        private readonly roleService: RoleService
    ) {
    }

    @ApiOperation({summary: 'Додати роль'})
    @ApiResponse({status: 200})
    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto): Observable<ResponseInterface | CreateRoleDto> {
        return this.roleService.createRole(createRoleDto);
    }

    @ApiOperation({summary: 'Змінити дані про конкретну роль'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateRoleData(@Param() {id}: DefaultParam, @Body() updateRoleDto: UpdateRoleDto): Observable<ResponseInterface | CreateRoleDto> {
        return this.roleService.updateRoleData(id, updateRoleDto);
    }

    @ApiOperation({summary: 'Отримати всі ролі'})
    @ApiResponse({status: 200})
    @Get()
    getRoles(@QueryDb() query): Observable<CreateRoleDto[]> {
        return this.roleService.getRoles(query);
    }

    @ApiOperation({summary: 'Видалити роль'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteRole(@Param() {id}: DefaultParam): Observable<ResponseInterface | CreateRoleDto> {
        return this.roleService.deleteRoleById(id);
    }
}
