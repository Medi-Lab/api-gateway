import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class QueryParamsToChangeDoctorsClinicDto {
    @ApiProperty({example: 53, description: 'id клініки'})
    @IsNotEmpty()
    clinicId: string;

    @ApiProperty({example: 53, description: 'id лікаря'})
    @IsNotEmpty()
    doctorId: string;
}