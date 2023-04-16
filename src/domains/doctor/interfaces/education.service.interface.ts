import {AddDoctorsEducationDto, UpdateDoctorsEducationDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface EducationServiceInterface {
    createEducation(createEducationDto: AddDoctorsEducationDto): Observable<ResponseInterface | AddDoctorsEducationDto>;

    updateEducation(id: string, updateEducationDto: UpdateDoctorsEducationDto): Observable<ResponseInterface | AddDoctorsEducationDto>;

    getEducationsByDoctorId(doctorId: string): Observable<AddDoctorsEducationDto[]>;

    deleteEducationById(id: string): Observable<ResponseInterface | AddDoctorsEducationDto>;
}