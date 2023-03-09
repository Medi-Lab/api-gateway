import {Body, Controller, Inject, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LoginUserDto, RegisterUserDto} from "./dto";
import {constants} from "../../core/constants";
import {AuthServiceInterface} from "./interfaces/auth.service.interface";

@ApiTags('Авторизація')
@Controller('auth')
export class AuthController {
    constructor(
        @Inject(constants.tokens.AUTH_SERVICE_TOKEN)
        private readonly authService: AuthServiceInterface) {
    }

    @ApiOperation({summary: 'Реєстрація'})
    @ApiResponse({status: 200})
    @Post('register')
    register(@Body() registerUserDto: RegisterUserDto) {
        return this.authService.register(registerUserDto)
    }

    @ApiOperation({summary: 'Логін'})
    @ApiResponse({status: 200})
    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto);
    }

    @ApiOperation({summary: 'Розлогінитись'})
    @ApiResponse({status: 200})
    @Post('logout')
    logout() {
        return this.authService.logout();
    }
}
