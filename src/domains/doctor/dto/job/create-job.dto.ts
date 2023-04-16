import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateJobDto {
    @ApiProperty({example: 1, description: 'id лікаря'})
    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @ApiProperty({example: 3, description: 'id клініки'})
    @IsNotEmpty()
    @IsNumber()
    clinicId: number;

    @ApiProperty({example: 'ProDent', description: 'Якщо не вказано шо за клініка, то тут можна написати назву клінки'})
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({example: 'Працював з пацієнтами, бла, бла, бла', description: 'Опис роботи в клініці'})
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({example: '15-09-2006', description: 'Дата початку роботи'})
    @IsOptional()
    @IsISO8601()
    dateStart?: Date;

    @ApiProperty({example: '15-09-2006', description: 'Дата початку роботи'})
    @IsOptional()
    @IsISO8601()
    dateEnd?: Date;

    @ApiProperty({example: true, description: 'Чи працює до тепер'})
    @IsOptional()
    @IsBoolean()
    untilNow?: boolean;
}