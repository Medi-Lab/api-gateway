import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateDoctorsPositionDto {
    @ApiProperty({example: 1, description: 'id робити'})
    @IsNotEmpty()
    @IsNumber()
    jobId: number;

    @ApiProperty({example: 'Медсесетра', description: 'Посада'})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: 'Я робив бла бла бла', description: 'Опис того шо ти робив на цій посаді'})
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({example: '15-09-2006', description: 'Дата початку роботи на цій посаді'})
    @IsOptional()
    @IsISO8601()
    dateStart?: Date;

    @ApiProperty({example: '15-09-2006', description: 'Дата початку роботи на цій посаді'})
    @IsOptional()
    @IsISO8601()
    dateEnd?: Date;

    @ApiProperty({example: true, description: 'Чи працює до тепер'})
    @IsOptional()
    @IsBoolean()
    untilNow?: boolean;
}