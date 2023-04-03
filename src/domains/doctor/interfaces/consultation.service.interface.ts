import {CreateConsultationDto} from "../dto";

export interface ConsultationServiceInterface {
    createConsultation(createConsultationDto: CreateConsultationDto);

    updateConsultation(id: string, updateConsultationDto);

    getConsultationById(id: string);

    getConsultations();

    deleteConsultationById(id: string);
}