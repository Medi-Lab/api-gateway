import {
    AddSpecializationToDoctorDto,
    CreateSpecializationDto,
    SpecializationToDoctorDto,
    UpdateSpecializationToDoctorDto
} from "../dto";
import {Observable} from "rxjs";

export interface SpecializationToDoctorServiceInterface {
    addSpecializationToDoctor(
        addSpecializationToDoctorDto: AddSpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto>;

    updateSpecializationToDoctor(
        specializationToDoctor: SpecializationToDoctorDto,
        updateSpecializationToDoctorDto: UpdateSpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto>;

    getDoctorsSpecializations(
        doctorId: string
    ): Observable<CreateSpecializationDto[]>

    deleteSpecializationToDoctor(
        deleteSpecializationToDoctorDto: SpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto>;
}