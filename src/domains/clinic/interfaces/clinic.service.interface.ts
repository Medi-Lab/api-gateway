import {CreateClinicDto, UpdateClinicDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface ClinicServiceInterface {
    createClinic(createClinicDto: CreateClinicDto): Observable<ResponseInterface | CreateClinicDto>;

    updateClinic(id: string, updateClinicDto: UpdateClinicDto): Observable<ResponseInterface | CreateClinicDto>;

    getClinicById(id: string): Observable<ResponseInterface | CreateClinicDto>;

    getClinics(query): Observable<CreateClinicDto[]>;

    deleteClinicById(id: string): Observable<ResponseInterface | CreateClinicDto>
}