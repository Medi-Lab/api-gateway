import {Inject, Injectable} from '@nestjs/common';
import {CreateConsultationDto, UpdateConsultationDto} from "../dto";
import {ConsultationServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {catchError, map, Observable, of} from "rxjs";

@Injectable()
export class ConsultationService implements ConsultationServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    createConsultation(
        createConsultationDto: CreateConsultationDto
    ): Observable<CreateConsultationDto> {
        return this.doctorClient
            .send('create_consultation', createConsultationDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateConsultation(
        id: string,
        updateConsultationDto: UpdateConsultationDto
    ): Observable<CreateConsultationDto> {
        return this.doctorClient
            .send('update_consultation', {id: Number(id), data: updateConsultationDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getDoctorsConsultationsById(id: string): Observable<CreateConsultationDto> {
        return this.doctorClient
            .send('get_doctors_consultations_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getConsultations(query): Observable<CreateConsultationDto[]> {
        return this.doctorClient
            .send('get_consultations', query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteConsultationById(id: string): Observable<CreateConsultationDto> {
        return this.doctorClient
            .send('delete_consultation_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}
