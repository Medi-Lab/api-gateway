import {CreateDoctorDto, UpdateDoctorDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface DoctorServiceInterface {
    createDoctor(createDoctorDto: CreateDoctorDto): Observable<ResponseInterface | CreateDoctorDto>;

    updateDoctor(id: string, updateDoctorDto: UpdateDoctorDto): Observable<ResponseInterface | CreateDoctorDto>;

    getDoctorById(id: string): Observable<ResponseInterface | CreateDoctorDto>;

    getDoctors(query): Observable<CreateDoctorDto[]>;

    getMyDoctors(userId: string): Observable<CreateDoctorDto[]>;

    deleteDoctorById(id: string): Observable<ResponseInterface | CreateDoctorDto>;
}