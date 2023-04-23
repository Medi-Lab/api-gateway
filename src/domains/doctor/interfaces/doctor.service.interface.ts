import {CreateDoctorDto, UpdateDoctorDto} from "../dto";
import {Observable} from "rxjs";

export interface DoctorServiceInterface {
    createDoctor(createDoctorDto: CreateDoctorDto): Observable<CreateDoctorDto>;

    updateDoctor(id: string, updateDoctorDto: UpdateDoctorDto): Observable<CreateDoctorDto>;

    getDoctorById(id: string): Observable<CreateDoctorDto>;

    getDoctors(query): Observable<CreateDoctorDto[]>;

    getMyDoctors(userId: string): Observable<CreateDoctorDto[]>;

    deleteDoctorById(id: string): Observable<CreateDoctorDto>;
}