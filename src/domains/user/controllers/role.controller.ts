import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {DefaultParam} from "../../../core";
import {constants} from "../../../core/constants";
import {RoleService} from "../services/role.service";
import {CreateRoleDto, UpdateRoleDto} from "../dto";
import {QueryDb} from "../../../core/decorators/query-db.decorator";

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
    createRole(@Body() createRoleDto: CreateRoleDto) {
        return this.roleService.createRole(createRoleDto);
    }

    @ApiOperation({summary: 'Змінити дані про конкретну роль'})
    @ApiResponse({status: 200})
    @Patch(':id')
    updateRoleData(@Param() {id}: DefaultParam, @Body() updateRoleDto: UpdateRoleDto) {
        return this.roleService.updateRoleData(id, updateRoleDto);
    }

    @ApiOperation({summary: 'Отримати всі ролі'})
    @ApiResponse({status: 200})
    @Get()
    getRoles(@QueryDb() query) {
        return this.roleService.getRoles(query);
    }

    @ApiOperation({summary: 'Видалити роль'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteRole(@Param() {id}: DefaultParam) {
        return this.roleService.deleteRoleById(id);
    }
}
