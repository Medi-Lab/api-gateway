import {LoginUserDto, RegisterUserDto} from "../dto";

export interface AuthServiceInterface {
    register(registerUserDto: RegisterUserDto);

    login(loginUserDto: LoginUserDto);

    logout();
}