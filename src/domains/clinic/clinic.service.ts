import {Inject, Injectable} from '@nestjs/common';
import {CreateClinicDto, UpdateClinicDto} from "./dto";
import {ClinicServiceInterface} from "./interfaces/clinic.service.interface";
import {constants} from "../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../core/error/response.interface";

@Injectable()
export class ClinicService implements ClinicServiceInterface {
    constructor(
        @Inject(constants.microservices_names.clinic)
        private readonly clinicClient: ClientProxy
    ) {
    }

    createClinic(createClinicDto: CreateClinicDto): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicClient
            .send('create_clinic', createClinicDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateClinic(id: string, updateClinicDto: UpdateClinicDto): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicClient
            .send('update_clinic', {id: Number(id), data: updateClinicDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getClinicById(id: string): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicClient
            .send('get_clinic_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getClinics(query): Observable<CreateClinicDto[]> {
        return this.clinicClient
            .send("get_clinics", query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteClinicById(id: string): Observable<ResponseInterface | CreateClinicDto> {
        return this.clinicClient
            .send('delete_clinic_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}
