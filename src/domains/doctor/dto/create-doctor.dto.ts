import {IsBoolean, IsNotEmpty, IsNumber, IsOptional} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateDoctorDto {
    @ApiProperty({example: 54, description: 'id користувача'})
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    //??
    @ApiProperty({example: 34, description: 'id спеціалізації'})
    @IsNotEmpty()
    @IsNumber()
    specialization_id: number;

    @ApiProperty({example: 23, description: 'id клініки'})
    @IsNotEmpty()
    @IsNumber()
    clinic_id: number;

    @ApiProperty({example: true, description: 'Чи консультує онлайн'})
    @IsOptional()
    @IsBoolean()
    can_consult_online?: boolean;

    @ApiProperty({example: false, description: 'Чи може виїхати на дом'})
    @IsOptional()
    @IsBoolean()
    can_come_home?: boolean;
}