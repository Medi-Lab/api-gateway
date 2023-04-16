import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ReactionToResponseDto {
    @ApiProperty({example: 4, description: "Відгук який хочуть лайкнути чи дизлайкнути"})
    @IsNotEmpty()
    @IsNumber()
    responseId: number;

    @ApiProperty({
        example: 33,
        description: "Користувач який лайкає, щоб не міг лайкнути ще раз цей пост чи дизлайкнути"
    })
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}