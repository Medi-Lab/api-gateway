import {Injectable} from '@nestjs/common';
import {LoginUserDto, RegisterUserDto} from "./dto";
import {AuthServiceInterface} from "./interfaces/auth.service.interface";

@Injectable()
export class AuthService implements AuthServiceInterface {
    register(registerUserDto: RegisterUserDto) {
        return registerUserDto;
    }

    login(loginUserDto: LoginUserDto) {
        return loginUserDto;
    }

    logout() {
        return 'logout!';
    }
}
