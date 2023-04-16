import {CreateSpecializationDto, UpdateSpecializationDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface SpecializationServiceInterface {
    createSpecialization(createSpecializationDto: CreateSpecializationDto): Observable<ResponseInterface | CreateSpecializationDto>;

    updateSpecialization(id: string, updateSpecializationDto: UpdateSpecializationDto): Observable<ResponseInterface | CreateSpecializationDto>;

    getSpecializationById(id: string): Observable<ResponseInterface | CreateSpecializationDto>;

    getSpecializations(query): Observable<CreateSpecializationDto[]>;

    deleteSpecializationById(id: string): Observable<ResponseInterface | CreateSpecializationDto>;
}