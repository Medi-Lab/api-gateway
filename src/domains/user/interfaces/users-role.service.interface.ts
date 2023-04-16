import {AddRoleToUserDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface UsersRoleServiceInterface {
    addRoleToUser(addRoleToUserDto: AddRoleToUserDto): Observable<ResponseInterface>;
}