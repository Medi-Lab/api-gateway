import {Inject, Injectable} from '@nestjs/common';
import {CreateRoleDto, UpdateRoleDto} from "../dto";
import {RoleServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@Injectable()
export class RoleService implements RoleServiceInterface {
    constructor(
        @Inject(constants.microservices_names.user)
        private readonly userClient: ClientProxy,
    ) {
    }

    createRole(createRoleDto: CreateRoleDto): Observable<ResponseInterface | CreateRoleDto> {
        return this.userClient
            .send('create_role', createRoleDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateRoleData(id: string, updateRoleDto: UpdateRoleDto): Observable<ResponseInterface | CreateRoleDto> {
        return this.userClient
            .send('update_role', {id: Number(id), data: updateRoleDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getRoles(query): Observable<CreateRoleDto[]> {
        return this.userClient
            .send("get_roles", query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteRoleById(id: string): Observable<ResponseInterface | CreateRoleDto> {
        return this.userClient
            .send('delete_role_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}
