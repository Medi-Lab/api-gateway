import {Injectable} from '@nestjs/common';
import {CreateClinicDto, UpdateClinicDto} from "./dto";
import {ClinicServiceInterface} from "./interfaces/clinic.service.interface";

@Injectable()
export class ClinicService implements ClinicServiceInterface {
    createClinic(createClinicDto: CreateClinicDto) {
        return createClinicDto;
    }

    updateClinic(id: string, updateClinicDto: UpdateClinicDto) {
        return {id, updateClinicDto};
    }

    getClinicById(id: string) {
        return id;
    }

    getClinics() {
        return [];
    }

    deleteById(id: string) {
        return id;
    }
}
