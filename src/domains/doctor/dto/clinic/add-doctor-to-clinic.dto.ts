import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class AddDoctorToClinicDto {
    @ApiProperty({example: 53, description: 'id лікаря'})
    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @ApiProperty({example: 23, description: 'id клініки'})
    @IsNotEmpty()
    @IsNumber()
    clinicId: number;
}