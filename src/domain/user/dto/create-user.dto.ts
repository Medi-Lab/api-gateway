import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: "Мирослав", description: "Ім'я користувача"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: "myros@gmail.com", description: "email користувача"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

// photo:string;

    @ApiProperty({example: "ua", description: "Мова користувача"})
    @IsNotEmpty()
    @IsString()
    language: string;

    @ApiProperty({example: "15-09-2006", description: "Дата дня народження користувача"})
    @IsNotEmpty()
    @IsString()
    birthday: string;

    @ApiProperty({example: "+380956174454", description: "Номер телефона користувача"})
    @IsNotEmpty()
    @IsPhoneNumber('UA')
    @IsString()
    phone: string;

    @ApiProperty({example: "fdghththtf22", description: "Пароль користувача"})
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({example: "1", description: "Гендер користувача"})
    @IsNotEmpty()
    @IsBoolean()
    gender: boolean;

    @ApiProperty({example: "Львівська область", description: "Регіон проживання користувача"})
    @IsOptional()
    @IsString()
    region?: string;

    @ApiProperty({example: "Львів", description: "Місто проживання користувача"})
    @IsOptional()
    @IsString()
    city?: string;

    @ApiProperty({example: "Свободи 35", description: "Адрес користувача"})
    @IsOptional()
    @IsString()
    address?: string;
}