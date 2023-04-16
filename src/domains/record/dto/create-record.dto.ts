import {IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRecordDto {
    @ApiProperty({example: 12, description: "id користувача"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;

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
        description: "тип консультації(буде в константах)(перша консультація, повторна, вже колись був і тд)"
    })
    @IsNotEmpty()
    @IsNumber()
    state: number;

    @ApiProperty({example: '2023-08-09T18:31:32', description: "Фактична дата початку прийому"})
    @IsOptional()
    @IsISO8601()
    actualDateStart?: Date;

    @ApiProperty({example: '2023-08-09T18:45:34', description: "Фактична дата кінця прийому"})
    @IsOptional()
    @IsISO8601()
    actualDateEnd?: Date;

    @ApiProperty({
        example: 'Дуже болить горло, першить просто капець',
        description: "Детальний розпис причини відвідування лікаря"
    })
    @IsOptional()
    @IsString()
    reasonForRecordingDescription?: string;

    @ApiProperty({example: 'Пити амізон і смоктульки', description: "Рекомендації лікаря пацієнту"})
    @IsOptional()
    @IsString()
    doctorsRecommendation?: string;

    // photo
    @ApiProperty({example: 'link to the photo', description: "Тут в майбутньому має бути фото рецепту"})
    @IsOptional()
    @IsString()
    recipe?: string;

    // ІДЕЇ
    // жива черга
}