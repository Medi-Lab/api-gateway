import {IsBoolean, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddDoctorsEducationDto {
    @ApiProperty({example: 1, description: 'id лікаря'})
    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @ApiProperty({example: 'КПІ', description: 'Університет, коледж, курси, ше якась штука'})
    @IsNotEmpty()
    @IsString()
    school: string;

    @ApiProperty({example: 1, description: '1 - університет, 2 - коледж і тд'})
    @IsNotEmpty()
    @IsNumber()
    type: number;

    @ApiProperty({example: '15-09-2006', description: 'Дата початку навчання'})
    @IsOptional()
    @IsISO8601()
    dateStart?: Date;

    @ApiProperty({example: '15-09-2010', description: 'Дата кінця навчання'})
    @IsOptional()
    @IsISO8601()
    dateEnd?: Date;

    @ApiProperty({example: 'Було круте навчання', description: 'Опис(додаткова інформація) про навчання'})
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({example: true, description: 'Чи проходить начання до сьогоднішнього часу'})
    @IsOptional()
    @IsBoolean()
    untilNow?: boolean;
}