import {AddRoleToUserDto} from "../dto";

export interface UsersRoleServiceInterface {
    addRoleToUser(addRoleToUserDto: AddRoleToUserDto);
}