import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class GetUserRateDto {
    @ApiProperty({example: 1, description: "id лікаря"})
    @IsString()
    @IsNotEmpty()
    doctorId: string;

    @ApiProperty({example: 2, description: "id користувача"})
    @IsString()
    @IsNotEmpty()
    userId: string;
}