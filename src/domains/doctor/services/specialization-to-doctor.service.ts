import {Inject, Injectable} from "@nestjs/common";
import {SpecializationToDoctorServiceInterface} from "../interfaces";
import {constants} from "../../../core/constants";
import {ClientProxy} from "@nestjs/microservices";
import {
    AddSpecializationToDoctorDto,
    CreateSpecializationDto,
    SpecializationToDoctorDto,
    UpdateSpecializationToDoctorDto
} from "../dto";
import {catchError, map, Observable, of} from "rxjs";

@Injectable()
export class SpecializationToDoctorService implements SpecializationToDoctorServiceInterface {
    constructor(
        @Inject(constants.microservices_names.doctor)
        private readonly doctorClient: ClientProxy
    ) {
    }

    addSpecializationToDoctor(
        addSpecializationToDoctorDto: AddSpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto> {
        return this.doctorClient
            .send('add_specialization_to_doctor', addSpecializationToDoctorDto)
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    updateSpecializationToDoctor(
        specializationToDoctor: SpecializationToDoctorDto,
        updateSpecializationToDoctorDto: UpdateSpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto> {
        return this.doctorClient
            .send('update_specialization_to_doctor', {
                specializationToDoctor: {
                    specializationId: Number(specializationToDoctor.specializationId),
                    doctorId: Number(specializationToDoctor.doctorId),
                },
                data: updateSpecializationToDoctorDto
            })
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    getDoctorsSpecializations(
        doctorId: string
    ): Observable<CreateSpecializationDto[]> {
        return this.doctorClient
            .send('get_doctors_specializations', Number(doctorId))
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }

    deleteSpecializationToDoctor(
        deleteSpecializationToDoctorDto: SpecializationToDoctorDto
    ): Observable<AddSpecializationToDoctorDto> {
        return this.doctorClient
            .send('delete_specialization_to_doctor',
                {
                    specializationId: Number(deleteSpecializationToDoctorDto.specializationId),
                    doctorId: Number(deleteSpecializationToDoctorDto.doctorId)
                })
            .pipe(
                map(response => response),
                catchError(error => of(error))
            );
    }
}