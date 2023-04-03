import {Inject, Injectable} from "@nestjs/common";
import {AddRoleToUserDto} from "../dto";
import {UsersRoleServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@Injectable()
export class UsersRoleService implements UsersRoleServiceInterface {
    constructor(
        @Inject(constants.microservices_names.user)
        private readonly userClient: ClientProxy,
    ) {
    }

    addRoleToUser(addRoleToUserDto: AddRoleToUserDto): Observable<ResponseInterface> {
        return this.userClient
            .send('add_role_to_user', addRoleToUserDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}