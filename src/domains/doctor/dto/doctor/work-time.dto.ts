import {IsDefined, IsNotEmptyObject, IsObject, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {WorkingHours} from "./working-hours.dto";

//TODO зробити деякі поля не обовязковими(погратися з цим)
export class WorkTime {
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    monday: WorkingHours;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    tuesday: WorkingHours;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    wednesday: WorkingHours;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    thursday: WorkingHours;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    friday: WorkingHours;

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

    @IsObject()
    @ValidateNested()
    @Type(() => WorkingHours)
    weekdays?: WorkingHours;
}