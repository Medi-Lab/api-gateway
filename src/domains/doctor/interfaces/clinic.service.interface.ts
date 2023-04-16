import {
    AddDoctorToClinicDto,
    CreateDoctorDto,
    QueryParamsToChangeDoctorsClinicDto,
    UpdateDoctorToClinicDto
} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {CreateClinicDto} from "../../clinic/dto";

export interface ClinicServiceInterface {
    addDoctorToClinic(addDoctorToClinicDto: AddDoctorToClinicDto): Observable<ResponseInterface>;

    changeDoctorsClinicConnection(query: QueryParamsToChangeDoctorsClinicDto, updateDoctorToClinicDto: UpdateDoctorToClinicDto): Observable<ResponseInterface>;

    getClinicsInWhichDoctorWork(doctorId: string): Observable<CreateClinicDto[]>;

    getDoctorsWhichWorkOnTheClinic(clinicId: string): Observable<CreateDoctorDto[]>;

    removeDoctorFromClinic(clinicToDoctorId: string): Observable<ResponseInterface>;
}