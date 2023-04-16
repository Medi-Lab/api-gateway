import {IsDefined, IsNotEmptyObject, IsObject, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {WorkingHours} from "./working-hours.dto";

export class WorkTime {
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    weekdays: WorkingHours;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    saturday: WorkingHours;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    sunday: WorkingHours;
}