import {PartialType} from "@nestjs/swagger";
import {AddDoctorsEducationDto} from "./add-doctors-education.dto";

export class UpdateDoctorsEducationDto extends PartialType(AddDoctorsEducationDto) {

}