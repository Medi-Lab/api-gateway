import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRateDto {
    @ApiProperty({example: 2, description: "id користувача, що оцінив"})
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @ApiProperty({example: 32, description: "id лікаря, якого оцінили"})
    @IsNumber()
    @IsNotEmpty()
    doctorId: number;

    @ApiProperty({example: 3.5, description: "Оцінка на яку оцінили"})
    @IsNumber()
    @IsNotEmpty()
    mark: number;
}