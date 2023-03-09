import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateSpecializationDto {
    @ApiProperty({example: "Психолог", description: "Назва спеціалізації"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: "Покращує моральний стан людини", description: "Опис спеціалізації"})
    @IsNotEmpty()
    @IsOptional()
    description?: string;
}