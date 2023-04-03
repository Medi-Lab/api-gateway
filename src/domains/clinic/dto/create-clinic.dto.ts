import {IsBoolean, IsNotEmpty, IsOptional, IsPhoneNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateClinicDto {
    @ApiProperty({example: "MedLab", description: "Назва клініки"})
    @IsNotEmpty()
    @IsString()
    title: string;

    //private | public
    @ApiProperty({example: true, description: "Чи приватна клініка"})
    @IsNotEmpty()
    @IsBoolean()
    is_private: boolean;

    // work_time:

    @ApiProperty({example: 'Шевченка 57/а', description: "Адрес клініки"})
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({example: '+360976278245', description: "Контактний номер клініки"})
    @IsNotEmpty()
    @IsPhoneNumber('UA')
    phone: string;

    //photo
    @IsOptional()
    photo?: string;

    @ApiProperty({example: 'Суми', description: "Місто в якому знаходиться клініка"})
    @IsNotEmpty()
    @IsString()
    city: string;
}