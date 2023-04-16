import {Inject, Injectable} from '@nestjs/common';
import {catchError, map, Observable, of} from "rxjs";
import {ClientProxy} from "@nestjs/microservices";
import {CreateUserDto, UpdateUserDto} from "../dto";
import {constants} from "../../../core/constants";
import {UserServiceInterface} from "../interfaces";
import {ResponseInterface} from "../../../core/error/response.interface";


@Injectable()
export class UserService implements UserServiceInterface {
    constructor(
        @Inject(constants.microservices_names.user)
        private readonly userClient: ClientProxy,
    ) {
    }

    createUser(createUserDto: CreateUserDto): Observable<ResponseInterface | CreateUserDto> {
        return this.userClient
            .send('create_user', createUserDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateUser(id: string, updateUserDto: UpdateUserDto): Observable<ResponseInterface | CreateUserDto> {
        return this.userClient
            .send('update_user', {id: Number(id), data: updateUserDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getUserById(id: string): Observable<ResponseInterface | CreateUserDto> {
        return this.userClient
            .send('get_user_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getUsers(query): Observable<CreateUserDto[]> {
        return this.userClient
            .send("get_users", query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteUserById(id: string): Observable<ResponseInterface | CreateUserDto> {
        return this.userClient
            .send('delete_user_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}
