import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class AddSpecializationToDoctorDto {
    @ApiProperty({example: 6, description: 'id лікаря'})
    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @ApiProperty({example: 9, description: 'id спеціалізації'})
    @IsNotEmpty()
    @IsNumber()
    specializationId: number;
}