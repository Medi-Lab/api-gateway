import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class RegisterUserDto {
    @ApiProperty({example: "myros@gmail.com", description: "email майбутнього користувача"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({example: "fdghththtf22", description: "Пароль майбутнього користувача"})
    @IsNotEmpty()
    @IsString()
    password: string;
}