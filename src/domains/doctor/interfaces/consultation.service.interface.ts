import {CreateConsultationDto, UpdateConsultationDto} from "../dto";
import {Observable} from "rxjs";

export interface ConsultationServiceInterface {
    createConsultation(createConsultationDto: CreateConsultationDto): Observable<CreateConsultationDto>;

    updateConsultation(id: string, updateConsultationDto: UpdateConsultationDto): Observable<CreateConsultationDto>;

    getDoctorsConsultationsById(id: string): Observable<CreateConsultationDto>;

    getConsultations(query): Observable<CreateConsultationDto[]>;

    deleteConsultationById(id: string): Observable<CreateConsultationDto>;
}