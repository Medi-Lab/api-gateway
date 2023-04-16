import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateConsultationDto {
    @ApiProperty({example: 4, description: "id лікаря"})
    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @ApiProperty({example: 432, description: "Ціна консульація"})
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({example: 40, description: "Скільки хвилин іде консульація"})
    @IsNotEmpty()
    @IsNumber()
    duration: number;

    @ApiProperty({example: 40, description: "Чи консультація проходить онлайн"})
    @IsNotEmpty()
    @IsBoolean()
    isOnline: boolean;

    @ApiProperty({example: 40, description: "Чи може лікар виїхати до вас"})
    @IsNotEmpty()
    @IsBoolean()
    isHouseCall: boolean;

    @ApiProperty({example: 40, description: "Назва консультації"})
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({example: 40, description: "Додаткове пояснення консультації"})
    @IsOptional()
    @IsString()
    description?: string;
}