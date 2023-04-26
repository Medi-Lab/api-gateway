import {IsBoolean, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRecordDto {
    @ApiProperty({example: 23, description: "id користувача"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({example: 55, description: "id клініки"})
    @IsNotEmpty()
    @IsNumber()
    clinicId: number;

    @ApiProperty({example: 15, description: "id консультації"})
    @IsNotEmpty()
    @IsNumber()
    consultationId: number;

    @ApiProperty({example: 2, description: "id лікаря"})
    @IsNotEmpty()
    @IsNumber()
    doctorId: number;

    @ApiProperty({example: 'Болить горло', description: "Причина приходу до лікаря"})
    @IsNotEmpty()
    @IsString()
    reason: string;

    @ApiProperty({example: '2023-08-09T18:30:00', description: "Дата початку прийому"})
    @IsNotEmpty()
    @IsISO8601()
    dateStart: Date;

    @ApiProperty({example: '2023-08-09T18:40:00', description: "Дата кінця прийому"})
    @IsNotEmpty()
    @IsISO8601()
    dateEnd: Date;

    @ApiProperty({
        example: 2,
        description: "стан консультації(буде в константах)(прийом назначений, прийом відмінений, прийом перенесений, прийом іде, прийом відбувся)"
    })
    @IsNotEmpty()
    @IsNumber()
    state: number;

    @ApiProperty({
        example: 1,
        description: "тип консультації(буде в константах)(консультація, направлення, повторна консультація)"
    })
    @IsNotEmpty()
    @IsNumber()
    type: number;

    @ApiProperty({example: true, description: "Чи оплата буде готівкою"})
    @IsNotEmpty()
    @IsBoolean()
    isPayedInCash: boolean;

    @ApiProperty({example: false, description: "Чи оплачений запис"})
    @IsOptional()
    @IsBoolean()
    isPayed?: boolean;

    @ApiProperty({example: '2023-08-09T18:31:32', description: "Фактична дата початку прийому"})
    @IsOptional()
    @IsISO8601()
    actualDateStart?: Date;

    @ApiProperty({example: '2023-08-09T18:45:34', description: "Фактична дата кінця прийому"})
    @IsOptional()
    @IsISO8601()
    actualDateEnd?: Date;

    @ApiProperty({example: 1, description: "ID лікаря, який направив"})
    @IsNumber()
    @IsOptional()
    doctorsIdWhichMadeReferral?: number;

    @ApiProperty({
        example: 'Дуже болить горло, першить просто капець',
        description: "Детальний розпис причини відвідування лікаря"
    })
    @IsOptional()
    @IsString()
    reasonForRecordingDescription?: string;

    @ApiProperty({example: '3,5', description: "Оцінка після прийому"})
    @IsOptional()
    @IsNumber()
    @Max(5)
    @Min(0)
    mark?: number;

    @ApiProperty({example: 'link to the photo', description: "Тут в майбутньому має бути фото рецепту"})
    @IsOptional()
    @IsString()
    recipe?: string;

    @ApiProperty({example: 'Гостра ангіна', description: "Діагноз"})
    @IsOptional()
    @IsString()
    diagnosis?: string;

    @ApiProperty({example: 'Пити амізон і смоктульки', description: "Рекомендації лікаря пацієнту"})
    @IsOptional()
    @IsString()
    treatment?: string;

    @ApiProperty({example: 'Лежати в ліжку і всяке таке', description: "Щось додаткове шо прописав лікар"})
    @IsOptional()
    @IsString()
    additionalData?: string;
}