import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddRoleToUserDto {
    @ApiProperty({example: 12, description: "id користувача"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @ApiProperty({example: 1, description: "id ролі"})
    @IsNotEmpty()
    @IsNumber()
    roleId: number;
}