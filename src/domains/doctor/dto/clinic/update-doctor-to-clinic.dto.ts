import {PartialType} from "@nestjs/swagger";
import {AddDoctorToClinicDto} from "./add-doctor-to-clinic.dto";

export class UpdateDoctorToClinicDto extends PartialType(AddDoctorToClinicDto) {
}