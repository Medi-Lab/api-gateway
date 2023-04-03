import {CreateUserDto, UpdateUserDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface UserServiceInterface {
    createUser(createUserDto: CreateUserDto): Observable<ResponseInterface | CreateUserDto>;

    updateUser(id: string, updateUserDto: UpdateUserDto): Observable<ResponseInterface | CreateUserDto>;

    getUserById(id: string): Observable<ResponseInterface | CreateUserDto>;

    getUsers(query): Observable<CreateUserDto[]>;

    deleteUserById(id: string): Observable<ResponseInterface | CreateUserDto>;

}