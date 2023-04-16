import {IsDefined, IsNotEmpty, IsNumber, Max, Min} from "class-validator";

export class WorkingHours {
    @IsNumber()
    @IsDefined()
    @Min(0)
    @Max(24)
    @IsNotEmpty()
    from: number;

    @IsNumber()
    @IsDefined()
    @Min(0)
    @Max(24)
    @IsNotEmpty()
    to: number;
}