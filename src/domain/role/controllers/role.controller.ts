import {Body, Controller, Delete, Get, Inject, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RoleService} from "../services";
import {CreateRoleDto, UpdateRoleDto} from "../dto";
import {DefaultParam} from "../../../core";
import {constants} from "../../../core/constants";

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
    getRoles() {
        return this.roleService.getRoles();
    }

    @ApiOperation({summary: 'Видалити роль'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteRole(@Param() {id}: DefaultParam) {
        return this.roleService.deleteRoleById(id);
    }
}
