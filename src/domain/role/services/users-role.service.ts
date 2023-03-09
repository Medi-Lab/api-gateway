import {Injectable} from "@nestjs/common";
import {AddRoleToUserDto} from "../dto";
import {UsersRoleServiceInterface} from "../interfaces";

@Injectable()
export class UsersRoleService implements UsersRoleServiceInterface {
    addRoleToUser(addRoleToUserDto: AddRoleToUserDto) {
        return addRoleToUserDto;
    }
}