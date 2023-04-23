import {CreateSpecializationDto, UpdateSpecializationDto} from "../dto";
import {Observable} from "rxjs";

export interface SpecializationServiceInterface {
    createSpecialization(
        createSpecializationDto: CreateSpecializationDto
    ): Observable<CreateSpecializationDto>;

    updateSpecialization(
        id: string,
        updateSpecializationDto: UpdateSpecializationDto
    ): Observable<CreateSpecializationDto>;

    getSpecializationById(id: string): Observable<CreateSpecializationDto>;

    getSpecializations(query): Observable<CreateSpecializationDto[]>;

    deleteSpecializationById(id: string): Observable<CreateSpecializationDto>;
}