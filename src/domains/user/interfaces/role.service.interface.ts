import {CreateRoleDto, UpdateRoleDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface RoleServiceInterface {
    createRole(createRoleDto: CreateRoleDto): Observable<ResponseInterface | CreateRoleDto>;

    updateRoleData(id: string, updateRoleDto: UpdateRoleDto): Observable<ResponseInterface | CreateRoleDto>;

    getRoles(query): Observable<CreateRoleDto[]>;

    deleteRoleById(id: string): Observable<ResponseInterface | CreateRoleDto>;
}