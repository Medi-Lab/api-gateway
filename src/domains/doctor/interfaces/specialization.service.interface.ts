import {CreateSpecializationDto, UpdateSpecializationDto} from "../dto";

export interface SpecializationServiceInterface {
    createSpecialization(createSpecializationDto: CreateSpecializationDto);

    updateSpecialization(id: string, updateSpecializationDto: UpdateSpecializationDto);

    getSpecializations();

    getSpecializationById(id: string);

    deleteSpecializationById(id: string);
}