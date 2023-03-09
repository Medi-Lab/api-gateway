import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class LoginUserDto {
    @ApiProperty({example: "myros@gmail.com", description: "email зареєстрованого користувача"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({example: "fdghththtf22", description: "Пароль зареєстрованого користувача"})
    @IsNotEmpty()
    @IsString()
    password: string;
}