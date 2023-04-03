import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateConsultationDto {
    @ApiProperty({example: 4, description: "id лікаря"})
    @IsNotEmpty()
    @IsNumber()
    doctor_id: number;

    @ApiProperty({example: 432, description: "Ціна консульація"})
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({example: 40, description: "Скільки хвилин іде консульація"})
    @IsNotEmpty()
    @IsNumber()
    duration: number;
}