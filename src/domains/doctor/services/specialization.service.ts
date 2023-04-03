import {Injectable} from "@nestjs/common";
import {CreateSpecializationDto, UpdateSpecializationDto} from "../dto";
import {SpecializationServiceInterface} from "../interfaces";

@Injectable()
export class SpecializationService implements SpecializationServiceInterface {
    createSpecialization(createSpecializationDto: CreateSpecializationDto) {
        return createSpecializationDto;
    }

    updateSpecialization(id: string, updateSpecializationDto: UpdateSpecializationDto) {
        return {id, updateSpecializationDto};
    }

    getSpecializations() {
        return [];
    }

    getSpecializationById(id: string) {
        return id;
    }

    deleteSpecializationById(id: string) {
        return id;
    }
}