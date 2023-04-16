import {
    IsBoolean,
    IsDefined,
    IsNotEmpty,
    IsNotEmptyObject,
    IsObject,
    IsOptional,
    IsPhoneNumber,
    IsString,
    ValidateNested
} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {WorkTime} from "./work-time.dto";

export class CreateClinicDto {
    @ApiProperty({example: "MedLab", description: "Назва клініки"})
    @IsNotEmpty()
    @IsString()
    title: string;

    //private | public
    @ApiProperty({example: true, description: "Чи приватна клініка"})
    @IsNotEmpty()
    @IsBoolean()
    isPrivate: boolean;

    @ApiProperty({
        example: '{\n' +
            '        "weekdays": {\n' +
            '            "from": 8,\n' +
            '            "to": 16\n' +
            '        },        \n' +
            '        "saturday": {\n' +
            '            "from": 8,\n' +
            '            "to": 18\n' +
            '        },\n' +
            '        "sunday": {\n' +
            '            "from": 8,\n' +
            '            "to": 18\n' +
            '        }\n' +
            '    }', description: 'Час роботи клініки'
    })
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkTime)
    workTime: WorkTime;

    @ApiProperty({example: 'Шевченка 57/а', description: "Адрес клініки"})
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({example: '+360976278245', description: "Контактний номер клініки"})
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    //photo
    @IsOptional()
    photo?: string;

    @ApiProperty({example: 'Суми', description: "Місто в якому знаходиться клініка"})
    @IsNotEmpty()
    @IsString()
    city: string;
}