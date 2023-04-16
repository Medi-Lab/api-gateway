import {Inject, Injectable} from "@nestjs/common";
import {EducationServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {AddDoctorsEducationDto, UpdateDoctorsEducationDto} from "../dto";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

@Injectable()
export class EducationService implements EducationServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    createEducation(createEducationDto: AddDoctorsEducationDto): Observable<ResponseInterface | AddDoctorsEducationDto> {
        return this.doctorClient
            .send('create_education', createEducationDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateEducation(id: string, updateEducationDto: UpdateDoctorsEducationDto): Observable<ResponseInterface | AddDoctorsEducationDto> {
        return this.doctorClient
            .send('update_education', {id: Number(id), data: updateEducationDto})
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getEducationsByDoctorId(doctorId: string): Observable<AddDoctorsEducationDto[]> {
        return this.doctorClient
            .send('get_educations_by_doctor_id', Number(doctorId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteEducationById(id: string): Observable<ResponseInterface | AddDoctorsEducationDto> {
        return this.doctorClient
            .send('delete_education_by_id', Number(id))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}