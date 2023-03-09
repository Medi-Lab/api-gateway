import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateJoinRequestDto {
    @ApiProperty({example: 3, description: "id користувача"})
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @ApiProperty({
        example: 'Хочу працювати на цьому сервісі',
        description: "мотивація чому користувач хоче стати лікарем в сервісі"
    })
    @IsString()
    @IsNotEmpty()
    description_reason: string;

    //Date start

    @ApiProperty({example: 'photo', description: "фото доказів шо користувач справді лікар"})
    @IsString()
    @IsOptional()
    photo?: string;
}