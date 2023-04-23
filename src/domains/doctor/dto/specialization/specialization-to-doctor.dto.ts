import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class SpecializationToDoctorDto {
    @ApiProperty({example: 6, description: 'id лікаря'})
    @IsNotEmpty()
    @IsString()
    doctorId: string;

    @ApiProperty({example: 9, description: 'id спеціалізації'})
    @IsNotEmpty()
    @IsString()
    specializationId: string;
}