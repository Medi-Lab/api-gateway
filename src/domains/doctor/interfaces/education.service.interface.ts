import {AddDoctorsEducationDto, UpdateDoctorsEducationDto} from "../dto";
import {Observable} from "rxjs";

export interface EducationServiceInterface {
    createEducation(createEducationDto: AddDoctorsEducationDto): Observable<AddDoctorsEducationDto>;

    updateEducation(id: string, updateEducationDto: UpdateDoctorsEducationDto): Observable<AddDoctorsEducationDto>;

    getEducationsByDoctorId(doctorId: string): Observable<AddDoctorsEducationDto[]>;

    deleteEducationById(id: string): Observable<AddDoctorsEducationDto>;
}