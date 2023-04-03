import {Injectable} from '@nestjs/common';
import {CreateConsultationDto} from "../dto";
import {ConsultationServiceInterface} from "../interfaces";

@Injectable()
export class ConsultationService implements ConsultationServiceInterface {
    createConsultation(createConsultationDto: CreateConsultationDto) {
        return createConsultationDto;
    }

    updateConsultation(id: string, updateConsultationDto) {
        return {id, updateConsultationDto}
    }

    getConsultationById(id: string) {
        return id;
    }

    getConsultations() {
        return [];
    }

    deleteConsultationById(id: string) {
        return id;
    }
}
