import {CreateUserDto, UpdateUserDto} from "../dto";
import {Observable} from "rxjs";

export interface UserServiceInterface {
    createUser(createUserDto: CreateUserDto);

    updateUser(id: string, updateUserDto: UpdateUserDto);

    getUserById(id: string): string;

    getUsers(): Observable<any[]>;

    deleteUserById(id: string): string;

}