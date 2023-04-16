import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class AcceptRequestDto {
    @ApiProperty({example: 4, description: "id запиту"})
    @IsNotEmpty()
    @IsNumber()
    requestId: number;

    @ApiProperty({example: 65, description: "id адміна"})
    @IsNotEmpty()
    @IsNumber()
    adminId: number;
}