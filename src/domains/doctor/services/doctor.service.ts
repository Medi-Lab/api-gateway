import {Inject, Injectable} from '@nestjs/common';
import {CreateDoctorDto, UpdateDoctorDto} from "../dto";
import {DoctorServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";

@Injectable()
export class DoctorService implements DoctorServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    createDoctor(createDoctorDto: CreateDoctorDto): Observable<CreateDoctorDto> {
        return this.doctorClient
            .send('create_doctor', createDoctorDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateDoctor(id: string, updateDoctorDto: UpdateDoctorDto): Observable<CreateDoctorDto> {
        return this.doctorClient
            .send('update_doctor', {id: Number(id), data: updateDoctorDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getDoctorById(id: string): Observable<CreateDoctorDto> {
        return this.doctorClient
            .send('get_doctor_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getDoctors(query): Observable<CreateDoctorDto[]> {
        return this.doctorClient
            .send('get_doctors', query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getMyDoctors(userId: string): Observable<CreateDoctorDto[]> {
        return this.doctorClient
            .send('get_my_doctors', Number(userId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteDoctorById(id: string): Observable<CreateDoctorDto> {
        return this.doctorClient
            .send('delete_doctor_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}
