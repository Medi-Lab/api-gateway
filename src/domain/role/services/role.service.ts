import {Injectable} from '@nestjs/common';
import {CreateRoleDto, UpdateRoleDto} from "../dto";
import {RoleServiceInterface} from "../interfaces";

@Injectable()
export class RoleService implements RoleServiceInterface {
    createRole(createRoleDto: CreateRoleDto) {
        console.log()
        return createRoleDto;
    }

    updateRoleData(id: string, updateRoleDto: UpdateRoleDto) {
        return {id, updateRoleDto};
    }

    getRoles(): any[] {
        return [];
    }

    deleteRoleById(id: string) {
        return id;
    }
}
