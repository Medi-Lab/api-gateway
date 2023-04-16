import {Inject, Injectable} from "@nestjs/common";
import {SpecializationToDoctorServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {AddSpecializationToDoctorDto, CreateSpecializationDto, UpdateSpecializationToDoctorDto} from "../dto";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@Injectable()
export class SpecializationToDoctorService implements SpecializationToDoctorServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    addSpecializationToDoctor(addSpecializationToDoctorDto: AddSpecializationToDoctorDto): Observable<ResponseInterface> {
        return this.doctorClient
            .send('add_specialization_to_doctor', addSpecializationToDoctorDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateSpecializationToDoctor(id: string, updateSpecializationToDoctorDto: UpdateSpecializationToDoctorDto): Observable<ResponseInterface> {
        return this.doctorClient
            .send('update_specialization_to_doctor', {id: Number(id), data: updateSpecializationToDoctorDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getDoctorsSpecializations(doctorId: string): Observable<ResponseInterface | CreateSpecializationDto[]> {
        return this.doctorClient
            .send('get_doctors_specializations', Number(doctorId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteSpecializationToDoctor(deleteSpecializationToDoctorDto: AddSpecializationToDoctorDto): Observable<ResponseInterface> {
        return this.doctorClient
            .send('delete_specialization_to_doctor', deleteSpecializationToDoctorDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}