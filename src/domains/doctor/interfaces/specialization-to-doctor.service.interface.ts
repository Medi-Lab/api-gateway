import {AddSpecializationToDoctorDto, CreateSpecializationDto, UpdateSpecializationToDoctorDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface SpecializationToDoctorServiceInterface {
    addSpecializationToDoctor(addSpecializationToDoctorDto: AddSpecializationToDoctorDto): Observable<ResponseInterface>;

    updateSpecializationToDoctor(id: string, updateSpecializationToDoctorDto: UpdateSpecializationToDoctorDto): Observable<ResponseInterface>;

    getDoctorsSpecializations(doctorId: string): Observable<ResponseInterface | CreateSpecializationDto[]>

    deleteSpecializationToDoctor(deleteSpecializationToDoctorDto: AddSpecializationToDoctorDto): Observable<ResponseInterface>;
}