import {CreateConsultationDto, UpdateConsultationDto} from "../dto";
import {Observable} from "rxjs";
import {ResponseInterface} from "../../../core/error/response.interface";

export interface ConsultationServiceInterface {
    createConsultation(createConsultationDto: CreateConsultationDto): Observable<ResponseInterface | CreateConsultationDto>;

    updateConsultation(id: string, updateConsultationDto: UpdateConsultationDto): Observable<ResponseInterface | CreateConsultationDto>;

    getDoctorsConsultationsById(id: string): Observable<ResponseInterface | CreateConsultationDto>;

    getConsultations(query): Observable<CreateConsultationDto[]>;

    deleteConsultationById(id: string): Observable<ResponseInterface | CreateConsultationDto>;
}