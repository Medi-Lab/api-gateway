import {PartialType} from "@nestjs/swagger";
import {CreateDoctorsPositionDto} from "./create-doctors-position.dto";

export class UpdateDoctorsPositionDto extends PartialType(CreateDoctorsPositionDto) {
}