import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UnblockUserDto {
    @ApiProperty({example: 49, description: "id користувача"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({example: 99, description: "id користувача адміна(який заблокував)"})
    @IsNotEmpty()
    @IsNumber()
    adminId: number;

    // зробити модуль подачі заявок на розблокування
    @ApiProperty({example: 'Подав заявку на розблокування', description: "Детальний опис причини розблокування"})
    @IsOptional()
    @IsString()
    unblockDescription?: string;
}