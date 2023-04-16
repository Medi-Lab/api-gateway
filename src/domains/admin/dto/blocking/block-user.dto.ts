import {IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class BlockUserDto {
    @ApiProperty({example: 49, description: "id користувача"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({example: 99, description: "id користувача адміна(який заблокував)"})
    @IsNotEmpty()
    @IsNumber()
    adminId: number;

    @ApiProperty({example: '15-03-2023', description: "До якого часу буде відбуватися блокування"})
    @IsNotEmpty()
    @IsISO8601()
    tillWhatTime: Date;

    //constants(спам) і тд
    @ApiProperty({example: 1, description: "наприклад будуть constants spam:1"})
    @IsNotEmpty()
    @IsNumber()
    blockReason: number;

    @ApiProperty({example: 'Спамив в того лікаря', description: "Детальний опис причини блокування"})
    @IsOptional()
    @IsString()
    blockDescription?: string;
}