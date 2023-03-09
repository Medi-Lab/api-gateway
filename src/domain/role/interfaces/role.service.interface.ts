import {CreateRoleDto, UpdateRoleDto} from "../dto";

export interface RoleServiceInterface {
    createRole(createRoleDto: CreateRoleDto);

    updateRoleData(id: string, updateRoleDto: UpdateRoleDto);

    getRoles(): any[];

    deleteRoleById(id: string);
}