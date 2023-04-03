import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: "Супер адмін", description: "Назва ролі"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({
        example: "Може додавати нові ролі, приймати заявки лікарів і тд...",
        description: "Пояснює що можна робити користувача з такою роллю"
    })
    @IsNotEmpty()
    @IsString()
    description: string;
}