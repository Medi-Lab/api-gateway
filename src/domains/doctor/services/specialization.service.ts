import {Inject, Injectable} from "@nestjs/common";
import {SpecializationServiceInterface} from "../interfaces";
import {CreateSpecializationDto, UpdateSpecializationDto} from "../dto";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class SpecializationService implements SpecializationServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    createSpecialization(createSpecializationDto: CreateSpecializationDto): Observable<ResponseInterface | CreateSpecializationDto> {
        return this.doctorClient
            .send('create_specialization', createSpecializationDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateSpecialization(id: string, updateSpecializationDto: UpdateSpecializationDto): Observable<ResponseInterface | CreateSpecializationDto> {
        return this.doctorClient
            .send('update_specialization', {id: Number(id), data: updateSpecializationDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getSpecializationById(id: string): Observable<ResponseInterface | CreateSpecializationDto> {
        return this.doctorClient
            .send('get_specialization_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getSpecializations(query): Observable<CreateSpecializationDto[]> {
        return this.doctorClient
            .send('get_specializations', query)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteSpecializationById(id: string): Observable<ResponseInterface | CreateSpecializationDto> {
        return this.doctorClient
            .send('delete_specialization_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}