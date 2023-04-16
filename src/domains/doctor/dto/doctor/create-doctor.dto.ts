import {
    IsBoolean,
    IsDefined,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
    Max,
    Min,
    ValidateNested
} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {WorkTime} from "./work-time.dto";
import {Type} from "class-transformer";

export class CreateDoctorDto {
    @ApiProperty({example: 54, description: 'id користувача'})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
    
    @ApiProperty({example: true, description: 'Чи консультує онлайн'})
    @IsNotEmpty()
    @IsBoolean()
    canConsultOnline: boolean;

    @ApiProperty({example: false, description: 'Чи може виїхати на дом'})
    @IsNotEmpty()
    @IsBoolean()
    canComeHome: boolean;


    //!TODO змінити example, коли почнем робити запити
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
            '    }', description: 'Час роботи лікаря'
    })
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => WorkTime)
    workTime: WorkTime;

    @ApiProperty({example: 1, description: 'Категорія лікаря(2,1,вища)'})
    @IsNotEmpty()
    @IsNumber()
    category: number;

    @ApiProperty({example: 12, description: 'Досвід який може встановити собі лікар'})
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(99)
    experience?: number;

    @ApiProperty({example: 'Щось про себе', description: 'Що лікар розказав про себе'})
    @IsOptional()
    @IsString()
    aboutMe?: string;

    @ApiProperty({example: '["комунікабельність", "привітність"]', description: 'Що лікар розказав про себе'})
    @IsOptional()
    @IsString({each: true})
    skills?: string[] = [];
}