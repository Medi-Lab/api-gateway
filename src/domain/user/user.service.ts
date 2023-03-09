import {Inject, Injectable} from '@nestjs/common';
import {catchError, map, Observable, of, timeout} from "rxjs";
import {ClientProxy} from "@nestjs/microservices";
import {CreateUserDto, UpdateUserDto} from "./dto";
import {constants} from "../../core/constants";
import {UserServiceInterface} from "./interfaces/user.service.interface";


@Injectable()
export class UserService implements UserServiceInterface {
    constructor(
        @Inject(constants.microservices_names.user)
        private readonly userClient: ClientProxy,
    ) {
    }

    createUser(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return {id, updateUserDto};
    }

    getUserById(id: string) {
        return id;
    }

    getUsers(): Observable<any[]> {
        console.log("users")

        return this.userClient
            .send("get_users", {})
            .pipe(
                timeout(5000),
                map(response => response),
                catchError(error => {
                    return of(error);
                })
            );
    }

    deleteUserById(id: string) {
        return id;
    }
}
