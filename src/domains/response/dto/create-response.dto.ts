import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateResponseDto {
    @ApiProperty({example: 'Дуже крутий лікар', description: "Текст відгуку"})
    @IsNotEmpty()
    @IsString()
    text: string;

    @ApiProperty({example: 2, description: "id лікаря"})
    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @ApiProperty({example: 23, description: "id користувача"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({example: 1, description: "id відгуку(якшо ми лишаємо комент під відгуком)"})
    @IsOptional()
    @IsNumber()
    responseId?: number;
}