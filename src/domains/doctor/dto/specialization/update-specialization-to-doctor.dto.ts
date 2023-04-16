import {PartialType} from "@nestjs/swagger";
import {AddSpecializationToDoctorDto} from "./add-specialization-to-doctor.dto";

export class UpdateSpecializationToDoctorDto extends PartialType(AddSpecializationToDoctorDto) {
}