import {ClinicServiceInterface} from "../interfaces";
import {
    AddDoctorToClinicDto,
    CreateDoctorDto,
    QueryParamsToChangeDoctorsClinicDto,
    UpdateDoctorToClinicDto
} from "../dto";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {CreateClinicDto} from "../../clinic/dto";
import {Inject} from "@nestjs/common";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";

export class ClinicService implements ClinicServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    addDoctorToClinic(addDoctorToClinicDto: AddDoctorToClinicDto): Observable<ResponseInterface> {
        return this.doctorClient
            .send('add_doctor_to_clinic', addDoctorToClinicDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    changeDoctorsClinicConnection(
        queryParamsToChangeDoctorsClinicDto: QueryParamsToChangeDoctorsClinicDto,
        updateDoctorToClinicDto: UpdateDoctorToClinicDto
    ): Observable<ResponseInterface> {
        return this.doctorClient
            .send('change_doctors_clinic', {
                query: {
                    clinicId: Number(queryParamsToChangeDoctorsClinicDto.clinicId),
                    doctorId: Number(queryParamsToChangeDoctorsClinicDto.doctorId)
                },
                data: updateDoctorToClinicDto
            })
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getClinicsInWhichDoctorWork(doctorId: string): Observable<CreateClinicDto[]> {
        return this.doctorClient
            .send('get_doctors_clinics', Number(doctorId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getDoctorsWhichWorkOnTheClinic(clinicId: string): Observable<CreateDoctorDto[]> {
        return this.doctorClient
            .send('get_doctors_which_work_on_clinic', Number(clinicId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    removeDoctorFromClinic(clinicToDoctorId: string): Observable<ResponseInterface> {
        return this.doctorClient
            .send('remove_doctor_from_clinic', Number(clinicToDoctorId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

}