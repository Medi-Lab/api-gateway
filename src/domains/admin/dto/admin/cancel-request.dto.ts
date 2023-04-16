import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CancelRequestDto {
    @ApiProperty({example: 4, description: "id запиту"})
    @IsNotEmpty()
    @IsNumber()
    requestId: number;

    @ApiProperty({example: 65, description: "id адміна"})
    @IsNotEmpty()
    @IsNumber()
    adminId: number;

    @ApiProperty({example: 'Нє вєрю, нє вєрю', description: "Чому адмін не прийняв заявку"})
    @IsOptional()
    @IsString()
    cancelReason?: string;
}